import React from "react";
import classNames from "classnames";

export interface ClassicLabelProps {
  label?: string;
  hideLabel?: boolean;
  disabled?: boolean;
  className?: string;
  disabledClassName?: string;
  htmlFor?: string;
  id?: string;
  onClick?: () => void;
}

/**
 * Renders a label for the "classic" field variant.
 * - When hideLabel is false: renders a visible label with the given className.
 * - When hideLabel is true: renders an offscreen label for accessibility.
 * - When label is falsy: renders nothing.
 */
export const ClassicLabel = ({
  label,
  hideLabel,
  disabled,
  className,
  disabledClassName,
  htmlFor,
  id,
  onClick,
}: ClassicLabelProps) => {
  if (!label) {
    return null;
  }

  if (hideLabel) {
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <label className="c__offscreen" htmlFor={htmlFor} onClick={onClick}>
        {label}
      </label>
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <label
      className={classNames(className, {
        [disabledClassName ?? ""]: disabled && disabledClassName,
      })}
      htmlFor={htmlFor}
      id={id}
      onClick={onClick}
    >
      {label}
    </label>
  );
};
