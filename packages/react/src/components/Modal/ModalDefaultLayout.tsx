import React from "react";
import classNames from "classnames";
import { Button } from ":/components/Button";
import { useCunningham } from ":/components/Provider";
import { CloseIcon } from "./CloseIcon";
import { ModalFooter } from "./ModalFooter";
import { ModalDefaultVariantProps } from "./index";

export const ModalDefaultLayout = ({
  titleVariant = "default",
  showCloseButton,
  titleId,
  subtitleId,
  ...props
}: ModalDefaultVariantProps & {
  showCloseButton: boolean;
  titleId: string;
  subtitleId: string;
}) => {
  const { t } = useCunningham();
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
              <h2
                id={titleId}
                className="c__modal__title c__modal__title--compact"
              >
                {props.titleIcon && (
                  <div className="c__modal__title-icon" aria-hidden="true">
                    {props.titleIcon}
                  </div>
                )}
                {props.title}
              </h2>
            )}
            {showCloseButton && (
              <Button
                icon={<CloseIcon />}
                variant="tertiary"
                color="neutral"
                size="small"
                aria-label={t("components.modals.close_button_aria_label")}
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
                  aria-label={t("components.modals.close_button_aria_label")}
                  onClick={props.onClose}
                />
              </div>
            )}
            {(props.titleIcon || props.title) && (
              <h2 id={titleId} className="c__modal__title">
                {props.titleIcon && (
                  <div className="c__modal__title-icon" aria-hidden="true">
                    {props.titleIcon}
                  </div>
                )}
                {props.title}
              </h2>
            )}
            {props.subtitle && (
              <p id={subtitleId} className="c__modal__subtitle">
                {props.subtitle}
              </p>
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
