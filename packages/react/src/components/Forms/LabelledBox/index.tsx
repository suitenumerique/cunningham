import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import type { FieldVariant } from ":/components/Forms/types";

export interface Props extends PropsWithChildren {
  label?: string;
  variant?: FieldVariant;
  labelAsPlaceholder?: boolean;
  htmlFor?: string;
  labelId?: string;
  hideLabel?: boolean;
  horizontal?: boolean;
  disabled?: boolean;
}

export const LabelledBox = ({
  children,
  label,
  variant = "floating",
  labelAsPlaceholder,
  htmlFor,
  labelId,
  hideLabel,
  horizontal,
  disabled,
}: Props) => {
  const isClassic = variant === "classic";

  return (
    <div
      className={classNames("labelled-box", {
        "labelled-box--classic": isClassic,
        "labelled-box--no-label": hideLabel,
        "labelled-box--horizontal": horizontal,
        "labelled-box--disabled": disabled,
      })}
    >
      {label && (
        <label
          className={classNames("labelled-box__label", {
            // In classic variant, labelAsPlaceholder is ignored (label is always static)
            placeholder: !isClassic && labelAsPlaceholder,
            c__offscreen: hideLabel,
          })}
          htmlFor={htmlFor}
          id={labelId}
        >
          <span>{label}</span>
        </label>
      )}
      <div className="labelled-box__children">{children}</div>
    </div>
  );
};
