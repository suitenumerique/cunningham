import React from "react";
import classNames from "classnames";
import { Button } from ":/components/Button";
import { CloseIcon } from "./CloseIcon";
import { ModalFooter } from "./ModalFooter";
import { ModalDefaultVariantProps } from "./index";

export const ModalDefaultLayout = ({
  titleVariant = "default",
  showCloseButton,
  ...props
}: ModalDefaultVariantProps & { showCloseButton: boolean }) => {
  const isCompact = titleVariant === "compact";

  return (
    <>
      <div
        className={classNames("c__modal__scroller", {
          "c__modal__scroller--compact": isCompact,
        })}
      >
        {isCompact ? (
          <div className="c__modal__header c__modal__header--compact">
            {(props.titleIcon || props.title) && (
              <div className="c__modal__title c__modal__title--compact">
                {props.titleIcon && (
                  <div className="c__modal__title-icon">{props.titleIcon}</div>
                )}
                {props.title}
              </div>
            )}
            {showCloseButton && (
              <Button
                icon={<CloseIcon />}
                variant="tertiary"
                color="neutral"
                size="small"
                aria-label="close"
                onClick={props.onClose}
              />
            )}
          </div>
        ) : (
          <>
            {showCloseButton && (
              <div className="c__modal__close">
                <Button
                  icon={<CloseIcon />}
                  variant="tertiary"
                  color="neutral"
                  size="small"
                  aria-label="close"
                  onClick={props.onClose}
                />
              </div>
            )}
            {(props.titleIcon || props.title) && (
              <div className="c__modal__title">
                {props.titleIcon && (
                  <div className="c__modal__title-icon">{props.titleIcon}</div>
                )}
                {props.title}
              </div>
            )}
            {props.subtitle && (
              <div className="c__modal__subtitle">{props.subtitle}</div>
            )}
          </>
        )}

        <div className="c__modal__content">{props.children}</div>
        {!props.stickyFooter && <ModalFooter {...props} />}
      </div>
      {props.stickyFooter && <ModalFooter {...props} sticky />}
    </>
  );
};
