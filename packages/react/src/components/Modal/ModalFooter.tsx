import React from "react";
import classNames from "classnames";
import { ModalActionProps } from "./index";

export const ModalFooter = ({
  leftActions,
  rightActions,
  actions,
  sticky,
}: ModalActionProps & {
  sticky?: boolean;
}) => {
  if ((leftActions || rightActions) && actions) {
    return null;
  }

  if (!leftActions && !rightActions && !actions) {
    return null;
  }

  return (
    <div
      className={classNames("c__modal__footer", {
        "c__modal__footer--sticky": sticky,
      })}
    >
      {(actions || leftActions) && (
        <div className="c__modal__footer__left">{actions || leftActions}</div>
      )}
      {!actions && rightActions && (
        <div className="c__modal__footer__right">{rightActions}</div>
      )}
    </div>
  );
};
