import React, {
  RefAttributes,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { Field, FieldProps } from ":/components/Forms/Field";
import { LabelledBox } from ":/components/Forms/LabelledBox";
import { ClassicLabel } from ":/components/Forms/ClassicLabel";
import { randomString } from ":/utils";
import type { FieldVariant } from ":/components/Forms/types";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  RefAttributes<HTMLTextAreaElement> &
  FieldProps & {
    label?: string;
    variant?: FieldVariant;
    hideLabel?: boolean;
    charCounter?: boolean;
    charCounterMax?: number;
  };

export const TextArea = ({
  label,
  variant = "floating",
  hideLabel,
  id,
  defaultValue,
  charCounter,
  charCounterMax,
  ref,
  ...props
}: TextAreaProps) => {
  const isClassic = variant === "classic";
  const areaRef = useRef<HTMLTextAreaElement | null>(null);
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

  const { fullWidth, rightText, text, textItems, className, ...areaProps } =
    props;

  const textareaElement = (
    <textarea
      className="c__textarea"
      {...areaProps}
      placeholder={isClassic ? props.placeholder : undefined}
      id={idToUse.current}
      onFocus={(e) => {
        setInputFocus(true);
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        setInputFocus(false);
        props.onBlur?.(e);
      }}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange?.(e);
      }}
      ref={(nativeRef) => {
        if (ref) {
          if (typeof ref === "function") {
            ref(nativeRef);
          } else {
            ref.current = nativeRef;
          }
        }
        areaRef.current = nativeRef;
      }}
    />
  );

  return (
    <Field
      {...props}
      className={classNames("c__field--textarea", className)}
      rightText={rightTextToUse}
    >
      {isClassic && (
        <ClassicLabel
          label={label}
          hideLabel={hideLabel}
          disabled={props.disabled}
          className="c__textarea__label"
          disabledClassName="c__textarea__label--disabled"
          htmlFor={idToUse.current}
        />
      )}
      {/* We disabled linting for this specific line because we consider that the onClick props is only used for */}
      {/* mouse users, so this do not engender any issue for accessibility. */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={classNames("c__textarea__wrapper", {
          "c__textarea__wrapper--disabled": props.disabled,
          "c__textarea__wrapper--classic": isClassic,
        })}
        onClick={() => areaRef.current?.focus()}
      >
        {isClassic ? (
          textareaElement
        ) : (
          <LabelledBox
            label={label}
            variant={variant}
            hideLabel={hideLabel}
            htmlFor={idToUse.current}
            labelAsPlaceholder={labelAsPlaceholder}
            disabled={props.disabled}
          >
            {textareaElement}
          </LabelledBox>
        )}
      </div>
    </Field>
  );
};
