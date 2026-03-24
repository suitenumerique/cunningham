import React, {
  MutableRefObject,
  RefAttributes,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  CalendarDate,
  CalendarIdentifier,
  createCalendar,
  DateValue,
  GregorianCalendar,
  toCalendar,
} from "@internationalized/date";
import {
  DateFormatterOptions,
  useDateFormatter,
  useLocale,
} from "@react-aria/i18n";
import {
  CalendarState,
  RangeCalendarState,
  useCalendarState,
  useRangeCalendarState,
} from "@react-stately/calendar";
import {
  CalendarAria,
  useCalendar,
  useRangeCalendar,
} from "@react-aria/calendar";
import {
  useSelect,
  UseSelectReturnValue,
  UseSelectStateChange,
} from "downshift";
import classNames from "classnames";
import {
  CalendarProps as ReactAriaCalendarProps,
  RangeCalendarProps,
} from "react-aria";

import { range } from ":/utils";
import { Button } from ":/components/Button";
import { CalendarGrid } from ":/components/Calendar/CalendarGrid";
import { useCunningham } from ":/components/Provider";

// todo to be factorized with the select component
interface Option {
  value: number;
  label: string;
  disabled?: boolean;
}

// todo to be factorized with the select component
const optionToString = (option: Option | null) => {
  return option ? option.label : "";
};

type DropdownValuesProps = {
  options: Array<Option>;
  downShift: UseSelectReturnValue<Option>;
};

// todo to be factorized with the select component
const DropdownValues = ({ options, downShift }: DropdownValuesProps) => (
  <div
    className={classNames("c__calendar__menu", {
      "c__calendar__menu--opened": downShift.isOpen,
    })}
    {...downShift.getMenuProps()}
  >
    <ul>
      {downShift.isOpen &&
        options.map((item, index) => (
          <li
            key={`${item.value}${index}`}
            {...downShift.getItemProps({
              item,
              index,
            })}
            className={classNames("c__calendar__menu__item", {
              "c__calendar__menu__item--highlight":
                downShift.highlightedIndex === index,
              "c__calendar__menu__item--selected":
                downShift.selectedItem?.label === item.label,
              "c__calendar__menu__item--disabled": item.disabled,
            })}
          >
            <span>{item.label}</span>
            {downShift.selectedItem?.label === item.label && (
              <span className="material-icons c__calendar__menu__item__check">
                check
              </span>
            )}
          </li>
        ))}
    </ul>
  </div>
);

export type CalendarProps = ReactAriaCalendarProps<DateValue> & {
  onOk?: (value: DateValue | null) => void;
  onCancel?: () => void;
  onReset?: () => void;
  hideFooter?: boolean;
  className?: string;
};

export type CalendarRangeProps = RangeCalendarProps<DateValue> & {
  onOk?: () => void;
  onCancel?: () => void;
  onReset?: () => void;
  hideFooter?: boolean;
  className?: string;
};

type CalendarAuxProps = CalendarAria &
  RefAttributes<HTMLDivElement> & {
    minYear?: number;
    maxYear?: number;
    state: RangeCalendarState | CalendarState;
    onOk?: (value: DateValue | null) => void;
    onCancel?: () => void;
    onReset?: () => void;
    hideFooter?: boolean;
    className?: string;
    dropdownOpenRef?: MutableRefObject<boolean>;
  };

const CalendarAux = ({
  state,
  minYear = 1900, // in gregorian calendar.
  maxYear = 2100, // in gregorian calendar.
  prevButtonProps,
  nextButtonProps,
  calendarProps,
  onOk,
  onCancel,
  onReset,
  hideFooter,
  className,
  ref,
  dropdownOpenRef,
}: CalendarAuxProps) => {
  const { t } = useCunningham();

  const useTimeZoneFormatter = (formatOptions: DateFormatterOptions) => {
    return useDateFormatter({
      ...formatOptions,
      timeZone: state.timeZone,
    });
  };

  const monthFormatter = useTimeZoneFormatter({ month: "long" });
  const yearItemsFormatter = useTimeZoneFormatter({ year: "numeric" });
  const [showGrid, setShowGrid] = useState(true);

  const monthItems: Array<Option> = useMemo(() => {
    // Note that in some calendar systems, such as the Hebrew, the number of months may differ between years.
    const numberOfMonths = state.focusedDate.calendar.getMonthsInYear(
      state.focusedDate,
    );
    return range(1, numberOfMonths).map((monthNumber) => {
      const date = state.focusedDate.set({ month: monthNumber });
      return {
        value: monthNumber,
        label: monthFormatter.format(date.toDate(state.timeZone)),
        disabled:
          (!!state.minValue && state.minValue.month > monthNumber) ||
          (!!state.maxValue && state.maxValue.month < monthNumber),
      };
    });
  }, [state.maxValue, state.minValue, state.focusedDate.year]);

  const yearItems: Array<Option> = useMemo(() => {
    const calendarCurrentUser = createCalendar(
      new Intl.DateTimeFormat().resolvedOptions()
        .calendar as CalendarIdentifier,
    );
    const minDate = toCalendar(
      new CalendarDate(new GregorianCalendar(), minYear, 1, 1),
      calendarCurrentUser,
    );
    const maxDate = toCalendar(
      new CalendarDate(new GregorianCalendar(), maxYear, 12, 31),
      calendarCurrentUser,
    );
    return range(minDate.year, maxDate.year).map((yearNumber) => {
      const date = state.focusedDate.set({ year: yearNumber });
      return {
        value: yearNumber,
        label: yearItemsFormatter.format(date.toDate(state.timeZone)),
        disabled:
          (!!state.minValue && state.minValue.year > yearNumber) ||
          (!!state.maxValue && state.maxValue.year < yearNumber),
      };
    });
  }, [state.focusedDate.year, state.timeZone, state.maxValue, state.minValue]);

  const useDownshiftSelect = (
    key: string,
    items: Array<Option>,
  ): UseSelectReturnValue<Option> => {
    return useSelect({
      items,
      itemToString: optionToString,
      onSelectedItemChange: (e: UseSelectStateChange<Option>) => {
        const updatedFocusedDate = state.focusedDate.set({
          [key]: e?.selectedItem?.value,
        });

        /**
         * We need to hide the grid before updated the focused date because if the mouse hovers a cell it will
         * automatically internally call the focusCell method which sets the focused date to the hovered cell date.
         *
         * (Current year = 2024) The steps are:
         * 1 - Select year 2050 in the dropdown.
         * 2 - Hide the dropdown
         * 3 - state.setFocusedDate(2050)
         * 3 - Mouse hovers a cell in the grid before the state takes into account the new focused date ( 2050 ).
         * 4 - focusCell is called with the current year (2024) overriding the previous call with year=2050
         *
         * The resulting bug will be the year 2024 being selected in the grid instead of 2050.
         *
         * So instead why first hide the grid, wait for the state to be updated, set the focused date to 2050, and
         * then show the grid again. This way we will prevent the mouse from hovering a cell before the state is updated.
         */
        setShowGrid(false);
        setTimeout(() => {
          state.setFocusedDate(updatedFocusedDate);
          setTimeout(() => {
            setShowGrid(true);
          });
        });
      },
    });
  };
  const downshiftMonth = useDownshiftSelect("month", monthItems);
  const downshiftYear = useDownshiftSelect("year", yearItems);

  // Sync dropdown open state to the ref so the proxy ref in CalendarRange
  // can hide ref.current from react-spectrum's handlers while a dropdown is open.
  if (dropdownOpenRef) {
    dropdownOpenRef.current = downshiftMonth.isOpen || downshiftYear.isOpen;
  }

  // isDisabled, onPress and onFocusChange props don't exist on the <Button /> component.
  // remove them to avoid any warning.
  const {
    isDisabled: isPrevButtonDisabled,
    onPress: onPressPrev,
    onFocusChange: onFocusChangePrev,
    ...prevButtonOtherProps
  } = prevButtonProps;
  const {
    isDisabled: isNextButtonDisabled,
    onPress: onPressNext,
    onFocusChange: onFocusChangeNext,
    ...nextButtonOtherProps
  } = nextButtonProps;

  const getToggleButtonProps = (
    key: string,
    items: Array<Option>,
    downshift: UseSelectReturnValue<Option>,
  ) => ({
    ...downshift.getToggleButtonProps(),
    onClick: () => {
      const selectedItem = items.find(
        (item) => item.value === state.focusedDate[key as keyof CalendarDate],
      );
      if (selectedItem) {
        downshift.selectItem(selectedItem);
      }
      downshift.toggleMenu();
    },
    "aria-label": t(
      `components.forms.date_picker.${key}_select_button_aria_label`,
    ),
  });

  const showFooter = !hideFooter && (onOk || onCancel || onReset);

  return (
    <div className={classNames("c__calendar", className)}>
      <div
        // The dropdown menus (DropdownValues) must be inside this ref'd div so that
        // react-spectrum's useRangeCalendar pointerup handler sees focus as staying
        // within the calendar when a dropdown is opened.
        //
        // The ref is always stable here (no conditional detach). To prevent
        // react-spectrum from calling selectFocusedDate() on blur/pointerup when
        // a dropdown is open, CalendarRange passes a proxy ref to useRangeCalendar
        // whose .current returns null while dropdownOpenRef.current is true.
        //
        // See: https://github.com/adobe/react-spectrum/blob/74cac946a8e6c62cd111d062c58626f774372b91/packages/%40react-aria/calendar/src/useRangeCalendar.ts#L52-L72
        ref={ref}
        {...calendarProps}
        className="c__calendar__wrapper c__calendar__wrapper--opened"
      >
        <div className="c__calendar__wrapper__header">
          <div className="c__calendar__wrapper__header__selects">
            <Button
              className="c__calendar__wrapper__header__selects__dropdown"
              color="neutral"
              variant="bordered"
              size="nano"
              iconPosition="right"
              icon={<span className="material-icons">arrow_drop_down</span>}
              type="button"
              {...getToggleButtonProps("month", monthItems, downshiftMonth)}
            >
              {monthFormatter.format(state.focusedDate.toDate(state.timeZone))}
            </Button>
            <Button
              className="c__calendar__wrapper__header__selects__dropdown"
              color="neutral"
              variant="bordered"
              size="nano"
              iconPosition="right"
              icon={<span className="material-icons">arrow_drop_down</span>}
              type="button"
              {...getToggleButtonProps("year", yearItems, downshiftYear)}
            >
              {yearItemsFormatter.format(
                state.focusedDate.toDate(state.timeZone),
              )}
            </Button>
          </div>
          <div className="c__calendar__wrapper__header__nav">
            <Button
              color="neutral"
              variant="tertiary"
              size="nano"
              icon={<span className="material-icons">navigate_before</span>}
              {...{
                ...prevButtonOtherProps,
                "aria-label": t(
                  "components.forms.date_picker.previous_month_button_aria_label",
                ),
              }}
              disabled={isPrevButtonDisabled}
              onClick={() => state.focusPreviousSection()}
              type="button"
            />
            <Button
              color="neutral"
              variant="tertiary"
              size="nano"
              icon={<span className="material-icons">navigate_next</span>}
              type="button"
              {...{
                ...nextButtonOtherProps,
                "aria-label": t(
                  "components.forms.date_picker.next_month_button_aria_label",
                ),
              }}
              disabled={isNextButtonDisabled}
              onClick={() => state.focusNextSection()}
            />
          </div>
        </div>
        <CalendarGrid state={state} showBody={showGrid} />
        {showFooter && (
          <div className="c__calendar__wrapper__footer">
            <div className="c__calendar__wrapper__footer__left">
              {onReset && (
                <Button
                  color="brand"
                  variant="tertiary"
                  size="nano"
                  onClick={onReset}
                  type="button"
                >
                  {t("components.calendar.reset")}
                </Button>
              )}
            </div>
            <div className="c__calendar__wrapper__footer__right">
              {onCancel && (
                <Button
                  color="brand"
                  variant="bordered"
                  size="nano"
                  onClick={onCancel}
                  type="button"
                >
                  {t("components.calendar.cancel")}
                </Button>
              )}
              {onOk && (
                <Button
                  color="brand"
                  variant="primary"
                  size="nano"
                  onClick={() => {
                    const value =
                      "value" in state ? (state as CalendarState).value : null;
                    onOk(value);
                  }}
                  type="button"
                >
                  {t("components.calendar.ok")}
                </Button>
              )}
            </div>
          </div>
        )}
        <DropdownValues options={monthItems} downShift={downshiftMonth} />
        <DropdownValues options={yearItems} downShift={downshiftYear} />
      </div>
    </div>
  );
};

export const Calendar = ({
  onOk,
  onCancel,
  onReset,
  hideFooter,
  className,
  ...props
}: CalendarProps) => {
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });
  const calendarProps = useCalendar(props, state);
  return (
    <CalendarAux
      {...calendarProps}
      state={state}
      ref={ref}
      onOk={onOk}
      onCancel={onCancel}
      onReset={onReset}
      hideFooter={hideFooter}
      className={className}
    />
  );
};

export const CalendarRange = ({
  onOk,
  onCancel,
  onReset,
  hideFooter,
  className,
  ...props
}: CalendarRangeProps) => {
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const dropdownOpenRef = useRef(false);

  // Proxy ref passed to useRangeCalendar: returns null while a month/year
  // dropdown is open so react-spectrum's onBlur and pointerup handlers skip
  // the selectFocusedDate() call that would otherwise close the calendar.
  // The real DOM ref stays permanently attached, avoiding the re-render flash
  // that the previous approach (toggling ref between element and null) caused.
  const spectrumRef = useMemo(
    () => ({
      get current(): HTMLDivElement | null {
        return dropdownOpenRef.current ? null : ref.current;
      },
      set current(el: HTMLDivElement | null) {
        ref.current = el;
      },
    }),
    [],
  );

  const state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar,
  });
  const calendarProps = useRangeCalendar(props, state, spectrumRef);
  return (
    <CalendarAux
      {...calendarProps}
      state={state}
      ref={ref}
      dropdownOpenRef={dropdownOpenRef}
      onOk={onOk}
      onCancel={onCancel}
      onReset={onReset}
      hideFooter={hideFooter}
      className={className}
    />
  );
};
