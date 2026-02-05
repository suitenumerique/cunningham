import React, {
  InputHTMLAttributes,
  ReactNode,
  RefAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { randomString } from ":/utils";
import { Field, FieldProps } from ":/components/Forms/Field";
import { LabelledBox } from ":/components/Forms/LabelledBox";
import { ClassicLabel } from ":/components/Forms/ClassicLabel";
import type { FieldVariant } from ":/components/Forms/types";

export type InputOnlyProps = {
  label?: string;
  variant?: FieldVariant;
  hideLabel?: boolean;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  charCounter?: boolean;
  charCounterMax?: number;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  RefAttributes<HTMLInputElement> &
  FieldProps &
  InputOnlyProps;

export const Input = ({
  className,
  defaultValue,
  label,
  variant = "floating",
  hideLabel,
  id,
  icon,
  rightIcon,
  charCounter,
  charCounterMax,
  ref,
  ...props
}: InputProps) => {
  const isClassic = variant === "classic";
  const classes = ["c__input"];
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputFocus, setInputFocus] = useState(false);
  const [value, setValue] = useState(defaultValue || props.value || "");
  const [labelAsPlaceholder, setLabelAsPlaceholder] = useState(!value);
  const idToUse = useRef(id || randomString());
  const rightTextToUse = charCounter
    ? `${value.toString().length}/${charCounterMax}`
    : props.rightText;

  useEffect(() => {
    if (inputFocus) {
      setLabelAsPlaceholder(false);
      return;
    }
    setLabelAsPlaceholder(!value);
  }, [inputFocus, value]);

  // If the input is used as a controlled component, we need to update the local value.
  useEffect(() => {
    if (defaultValue !== undefined) {
      return;
    }
    setValue(props.value || "");
  }, [props.value]);

  const {
    compact,
    fullWidth,
    rightText,
    state,
    text,
    textItems,
    ...inputProps
  } = props;

  const inputElement = (
    <input
      type="text"
      className={classes.join(" ")}
      {...inputProps}
      placeholder={isClassic ? props.placeholder : undefined}
      id={idToUse.current}
      value={value}
      onFocus={(e) => {
        setInputFocus(true);
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        setInputFocus(false);
        props.onBlur?.(e);
      }}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange?.(e);
      }}
      ref={(inputTextRef) => {
        if (ref) {
          if (typeof ref === "function") {
            ref(inputTextRef);
          } else {
            ref.current = inputTextRef;
          }
        }
        inputRef.current = inputTextRef;
      }}
    />
  );

  return (
    <Field {...props} rightText={rightTextToUse} className={className}>
      {isClassic && (
        <ClassicLabel
          label={label}
          hideLabel={hideLabel}
          disabled={props.disabled}
          className="c__input__label"
          disabledClassName="c__input__label--disabled"
          htmlFor={idToUse.current}
        />
      )}
      {/* We disabled linting for this specific line because we consider that the onClick props is only used for */}
      {/* mouse users, so this do not engender any issue for accessibility. */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={classNames(
          "c__input__wrapper",
          props.state && "c__input__wrapper--" + props.state,
          {
            "c__input__wrapper--disabled": props.disabled,
            "c__input__wrapper--classic": isClassic,
          },
        )}
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        {!!icon && <div className="c__input__icon-left">{icon}</div>}
        {isClassic ? (
          inputElement
        ) : (
          <LabelledBox
            label={label}
            variant={variant}
            hideLabel={hideLabel}
            htmlFor={idToUse.current}
            labelAsPlaceholder={labelAsPlaceholder}
            disabled={props.disabled}
          >
            {inputElement}
          </LabelledBox>
        )}
        {!!rightIcon && <div className="c__input__icon-right">{rightIcon}</div>}
      </div>
    </Field>
  );
};
