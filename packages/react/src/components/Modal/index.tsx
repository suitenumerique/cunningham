import React, { PropsWithChildren, ReactNode, useEffect } from "react";
import classNames from "classnames";
import ReactModal from "react-modal";
import { Button } from ":/components/Button";
import { NOSCROLL_CLASS, useModals } from ":/components/Modal/ModalProvider";
import { CloseIcon } from "./CloseIcon";

export type ModalHandle = {};

export const MODAL_CLASS = "c__modal";

export enum ModalSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  EXTRA_LARGE = "extra-large",
  FULL = "full",
}

export const useModal = ({
  isOpenDefault,
}: { isOpenDefault?: boolean } = {}) => {
  const [isOpen, setIsOpen] = React.useState(!!isOpenDefault);
  const onClose = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    onClose();
  };

  return {
    isOpen,
    onClose,
    open,
    close,
  };
};

export type ModalProps = PropsWithChildren & {
  size: ModalSize;
  isOpen: boolean;
  onClose: () => void;
  leftActions?: React.ReactNode;
  rightActions?: React.ReactNode;
  actions?: React.ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  titleIcon?: React.ReactNode;
  stickyFooter?: boolean;
  hideCloseButton?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  preventClose?: boolean;
  "aria-label"?: string;
};

export const Modal = (props: ModalProps) => {
  /**
   * This is a workaround to prevent the modal from rendering on the first render because if the modal is open on the
   * first render, it will not be able to resolve document.getElementById(<MODAL_PARENT_ID>) which is not rendered yet.
   */
  const [firstRender, setFirstRender] = React.useState(true);
  useEffect(() => {
    setFirstRender(false);
  }, []);

  if (firstRender) {
    return null;
  }

  return <ModalInner {...props} />;
};

export const ModalInner = ({ closeOnEsc = true, ...props }: ModalProps) => {
  const { modalParentSelector } = useModals();

  if (!props.isOpen) {
    return null;
  }

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={() => {
        if (!props.preventClose) {
          props.onClose();
        }
      }}
      parentSelector={modalParentSelector}
      overlayClassName="c__modal__backdrop"
      className={classNames(MODAL_CLASS, `${MODAL_CLASS}--${props.size}`)}
      shouldCloseOnOverlayClick={!!props.closeOnClickOutside}
      shouldCloseOnEsc={closeOnEsc}
      bodyOpenClassName={classNames("c__modals--opened", NOSCROLL_CLASS)}
      contentLabel={props["aria-label"] || props.title?.toString()}
    >
      <div className="c__modal__scroller">
        {!props.hideCloseButton && !props.preventClose && (
          <div className="c__modal__close">
            <Button
              icon={<CloseIcon />}
              variant="tertiary"
              color="neutral"
              size="small"
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

        <div className="c__modal__content">{props.children}</div>
        {!props.stickyFooter && <ModalFooter {...props} />}
      </div>
      {props.stickyFooter && <ModalFooter {...props} sticky />}
    </ReactModal>
  );
};

const ModalFooter = ({
  leftActions,
  rightActions,
  actions,
  sticky,
}: Pick<ModalProps, "leftActions" | "rightActions" | "actions"> & {
  sticky?: boolean;
}) => {
  if ((leftActions || rightActions) && actions) {
    throw new Error("Cannot use leftActions or rightActions with actions");
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
      <div className="c__modal__footer__left">{actions || leftActions}</div>
      <div className="c__modal__footer__right">{!actions && rightActions}</div>
    </div>
  );
};
