import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  createElement,
  ReactNode,
  RefAttributes,
} from "react";

type DomProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonElement = HTMLButtonElement & HTMLAnchorElement;
export type ButtonProps = Omit<DomProps, "color"> &
  RefAttributes<ButtonElement> & {
    size?: "medium" | "small" | "nano";
    color?:
      | "brand"
      | "neutral"
      | "info"
      | "success"
      | "warning"
      | "error"
      | "success";
    variant?: "primary" | "secondary" | "tertiary" | "bordered";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    active?: boolean;
    fullWidth?: boolean;
  };

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  iconPosition = "left",
  color = "brand",
  icon,
  active,
  className,
  fullWidth,
  ref,
  ...props
}: ButtonProps) => {
  const classes = [
    "c__button",
    "c__button--" + color,
    ["c__button--", color, "--", variant].join(""),
    "c__button--" + size,
    className,
  ];
  if (icon && children) {
    classes.push("c__button--with-icon--" + iconPosition);
  }
  if (icon && !children) {
    classes.push("c__button--icon-only");
  }
  if (active) {
    classes.push("c__button--active");
  }
  if (fullWidth) {
    classes.push("c__button--full-width");
  }
  const iconElement = <span className="c__button__icon">{icon}</span>;
  const isDisabledLink = !!props.href && !!props.disabled;
  const tagName = props.href ? "a" : "button";
  return createElement(
    tagName,
    {
      className: classes.join(" "),
      ...props,
      ...(isDisabledLink && {
        "aria-disabled": true,
        onClick: (e: React.MouseEvent) => e.preventDefault(),
      }),
      ref,
    },
    <>
      {!!icon && iconPosition === "left" && iconElement}
      {children}
      {!!icon && iconPosition === "right" && iconElement}
    </>,
  );
};
