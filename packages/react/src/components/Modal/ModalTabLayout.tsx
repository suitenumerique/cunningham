import React, { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Button } from ":/components/Button";
import { CloseIcon } from "./CloseIcon";
import { ChevronRightIcon } from "./ChevronRightIcon";
import { ChevronLeftIcon } from "./ChevronLeftIcon";
import { ModalFooter } from "./ModalFooter";
import { ModalTabVariantProps } from "./index";

export const ModalTabLayout = ({
  showCloseButton,
  ...props
}: ModalTabVariantProps & { showCloseButton: boolean }) => {
  const [internalActiveTab, setInternalActiveTab] = useState(
    props.defaultActiveTab ?? props.tabs[0]?.id,
  );
  const [mobileView, setMobileView] = useState<"sidebar" | "content">(
    "sidebar",
  );

  const contentRef = useRef<HTMLDivElement>(null);
  const [isContentScrollable, setIsContentScrollable] = useState(false);

  const checkScrollable = useCallback(() => {
    const el = contentRef.current;
    if (el) {
      setIsContentScrollable(el.scrollHeight > el.clientHeight);
    }
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    checkScrollable();

    if (typeof ResizeObserver === "undefined") return;

    // eslint-disable-next-line compat/compat -- guarded by typeof check above
    const observer = new ResizeObserver(checkScrollable);
    observer.observe(el);
    return () => observer.disconnect();
  }, [checkScrollable]);

  const activeTabId = props.activeTab ?? internalActiveTab;
  const currentTab =
    props.tabs.find((t) => t.id === activeTabId) ?? props.tabs[0];

  const handleTabChange = (tabId: string) => {
    if (props.activeTab === undefined) {
      setInternalActiveTab(tabId);
    }
    props.onTabChange?.(tabId);
    setMobileView("content");
  };

  const handleBackToSidebar = () => {
    setMobileView("sidebar");
  };

  return (
    <div
      className={classNames("c__modal__tab-layout", {
        "c__modal__tab-layout--show-content": mobileView === "content",
      })}
    >
      <div className="c__modal__tab-sidebar">
        <div className="c__modal__tab-sidebar__header">
          {props.sidebarTitle && (
            <div className="c__modal__tab-sidebar__title">
              {props.sidebarTitle}
            </div>
          )}
          {showCloseButton && (
            <div className="c__modal__tab-sidebar__close">
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
        </div>
        <div className="c__modal__tab-sidebar__nav" role="tablist">
          {props.tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={tab.id === activeTabId}
              className={classNames("c__modal__tab-sidebar__item", {
                "c__modal__tab-sidebar__item--active": tab.id === activeTabId,
              })}
              onClick={() => handleTabChange(tab.id)}
            >
              <span className="c__modal__tab-sidebar__item-label">
                {tab.icon && (
                  <span className="c__modal__tab-sidebar__item-icon">
                    {tab.icon}
                  </span>
                )}
                {tab.label}
              </span>
              <span className="c__modal__tab-sidebar__item-chevron">
                <ChevronRightIcon />
              </span>
            </button>
          ))}
        </div>
      </div>
      <div
        className={classNames("c__modal__tab-content", {
          "c__modal__tab-content--scrollable": isContentScrollable,
        })}
      >
        <div className="c__modal__tab-content__head">
          <div className="c__modal__tab-content__header">
            <button
              type="button"
              className="c__modal__tab-content__back"
              onClick={handleBackToSidebar}
              aria-label="Back to tabs"
            >
              <ChevronLeftIcon />
            </button>
            <div className="c__modal__tab-content__title-group">
              {currentTab?.title && (
                <div className="c__modal__title">{currentTab.title}</div>
              )}
            </div>
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
          </div>
          {currentTab?.subtitle && (
            <div className="c__modal__subtitle">{currentTab.subtitle}</div>
          )}
        </div>
        <div className="c__modal__content" role="tabpanel" ref={contentRef}>
          {currentTab?.content}
        </div>
        {!props.stickyFooter && <ModalFooter {...props} />}
        {props.stickyFooter && <ModalFooter {...props} sticky />}
      </div>
    </div>
  );
};
