import React, {
  PropsWithChildren,
  useMemo,
  useRef,
  RefAttributes,
} from "react";
import {
  DateRangePickerState,
  DatePickerState,
} from "@react-stately/datepicker";
import { DateRangePickerAria, DatePickerAria } from "@react-aria/datepicker";
import classNames from "classnames";
import { I18nProvider } from "@react-aria/i18n";
import { Button } from ":/components/Button";
import { Popover } from ":/components/Popover";
import { Field, FieldProps } from ":/components/Forms/Field";
import { ClassicLabel } from ":/components/Forms/ClassicLabel";
import { useCunningham } from ":/components/Provider";
import {
  Calendar,
  CalendarRange,
} from ":/components/Forms/DatePicker/Calendar";
import { convertDateValueToString } from ":/components/Forms/DatePicker/utils";
import type { FieldVariant } from ":/components/Forms/types";

export type DatePickerAuxSubProps = FieldProps & {
  // eslint-disable-next-line react/no-unused-prop-types
  label?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  variant?: FieldVariant;
  // eslint-disable-next-line react/no-unused-prop-types
  hideLabel?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  minValue?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  maxValue?: string;
  disabled?: boolean;
  name?: string;
  locale?: string;
  timezone?: string;
};

export type DatePickerAuxProps = PropsWithChildren &
  DatePickerAuxSubProps &
  RefAttributes<HTMLDivElement> & {
    pickerState: DateRangePickerState | DatePickerState;
    pickerProps: Pick<
      DateRangePickerAria | DatePickerAria,
      "buttonProps" | "groupProps"
    >;
    calendar: React.ReactElement<typeof Calendar | typeof CalendarRange>;
    isFocused: boolean;
    labelAsPlaceholder: boolean;
    optionalClassName?: string;
    isRange?: boolean;
    onClear: () => void;
    // For classic range mode: render labels above the wrapper
    rangeLabels?: {
      startLabel: string;
      endLabel: string;
      disabled?: boolean;
      hideLabel?: boolean;
    };
  };

/**
 * This component is used by date and date range picker components.
 * It contains the common logic between the two.
 */
const DatePickerAux = ({
  className,
  pickerState,
  pickerProps,
  onClear,
  isFocused,
  labelAsPlaceholder,
  calendar,
  children,
  name,
  locale,
  disabled = false,
  optionalClassName,
  isRange,
  rangeLabels,
  ref,
  ...props
}: DatePickerAuxProps) => {
  const { t, currentLocale } = useCunningham();
  const pickerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isDateInvalid = useMemo(
    () => pickerState.validationState === "invalid" || props.state === "error",
    [pickerState.validationState, props.state],
  );

  const isClassic = props.variant === "classic";

  return (
    <I18nProvider locale={locale || currentLocale}>
      <Field
        {...props}
        className={classNames(className, {
          "c__date-picker__range__container": isRange,
        })}
      >
        <div
          ref={pickerRef}
          className={classNames(["c__date-picker", optionalClassName], {
            "c__date-picker--disabled": disabled,
            "c__date-picker--invalid": isDateInvalid,
            "c__date-picker--success": props.state === "success",
            "c__date-picker--focused":
              !isDateInvalid && !disabled && (pickerState.isOpen || isFocused),
            "c__date-picker--classic": isClassic,
          })}
        >
          {isClassic && !isRange && (
            <ClassicLabel
              label={props.label}
              hideLabel={props.hideLabel}
              disabled={disabled}
              className="c__date-picker__label"
              disabledClassName="c__date-picker__label--disabled"
              onClick={() => {
                wrapperRef.current?.focus();
                if (!pickerState.isOpen) {
                  pickerState.open();
                }
              }}
            />
          )}
          {/* Classic variant: range labels above the wrapper */}
          {isClassic && rangeLabels && !rangeLabels.hideLabel && (
            <div className="c__date-picker__range__labels">
              <ClassicLabel
                label={rangeLabels.startLabel}
                disabled={rangeLabels.disabled}
                className="c__date-picker__label"
                disabledClassName="c__date-picker__label--disabled"
                onClick={() => {
                  wrapperRef.current?.focus();
                  if (!pickerState.isOpen) {
                    pickerState.open();
                  }
                }}
              />
              <div className="c__date-picker__range__labels__spacer" />
              <ClassicLabel
                label={rangeLabels.endLabel}
                disabled={rangeLabels.disabled}
                className="c__date-picker__label"
                disabledClassName="c__date-picker__label--disabled"
                onClick={() => {
                  wrapperRef.current?.focus();
                  if (!pickerState.isOpen) {
                    pickerState.open();
                  }
                }}
              />
            </div>
          )}
          {/* Hidden range labels for accessibility when hideLabel is true */}
          {isClassic && rangeLabels && rangeLabels.hideLabel && (
            <>
              <ClassicLabel
                label={rangeLabels.startLabel}
                hideLabel
                onClick={() => {
                  wrapperRef.current?.focus();
                  if (!pickerState.isOpen) {
                    pickerState.open();
                  }
                }}
              />
              <ClassicLabel
                label={rangeLabels.endLabel}
                hideLabel
                onClick={() => {
                  wrapperRef.current?.focus();
                  if (!pickerState.isOpen) {
                    pickerState.open();
                  }
                }}
              />
            </>
          )}
          <div
            className={classNames("c__date-picker__wrapper", {
              "c__date-picker__wrapper--clickable": labelAsPlaceholder,
            })}
            ref={(node) => {
              wrapperRef.current = node;
              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            {...pickerProps.groupProps}
            role="button"
            tabIndex={0}
            onClick={() => !pickerState.isOpen && pickerState.open()}
          >
            {"dateRange" in pickerState ? (
              <>
                <input
                  type="hidden"
                  name={name && `${name}_start`}
                  value={convertDateValueToString(
                    pickerState.value?.start ?? null,
                    props.timezone,
                  )}
                />
                <input
                  type="hidden"
                  name={name && `${name}_end`}
                  value={convertDateValueToString(
                    pickerState.value?.end ?? null,
                    props.timezone,
                  )}
                />
              </>
            ) : (
              <input
                type="hidden"
                name={name}
                value={convertDateValueToString(
                  pickerState.value,
                  props.timezone,
                )}
              />
            )}
            <div className="c__date-picker__wrapper__icon">
              <Button
                type="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    pickerState.toggle();
                  }
                }}
                onClick={pickerState.toggle}
                aria-label={t(
                  pickerState.isOpen
                    ? "components.forms.date_picker.toggle_button_aria_label_close"
                    : "components.forms.date_picker.toggle_button_aria_label_open",
                )}
                color="neutral"
                variant="tertiary"
                size="small"
                className="c__date-picker__wrapper__toggle"
                icon={
                  <span className="material-icons icon">calendar_today</span>
                }
                disabled={disabled}
              />
            </div>
            {children}
            <Button
              className={classNames("c__date-picker__inner__action", {
                "c__date-picker__inner__action--empty": !pickerState.value,
                "c__date-picker__inner__action--hidden":
                  labelAsPlaceholder || disabled,
              })}
              color="neutral"
              variant="tertiary"
              size="nano"
              icon={<span className="material-icons">close</span>}
              onClick={onClear}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onClear();
                }
              }}
              aria-label={t(
                "components.forms.date_picker.clear_button_aria_label",
              )}
              disabled={disabled}
              type="button"
            />
          </div>
          {pickerState.isOpen && (
            <Popover
              parentRef={pickerRef}
              onClickOutside={pickerState.close}
              borderless
            >
              {calendar}
            </Popover>
          )}
        </div>
      </Field>
    </I18nProvider>
  );
};

export default DatePickerAux;
