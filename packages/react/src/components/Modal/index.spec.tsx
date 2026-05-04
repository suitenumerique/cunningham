import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal, ModalSize, ModalTab, useModal } from ":/components/Modal/index";
import { CunninghamProvider } from ":/components/Provider";
import { NOSCROLL_CLASS, useModals } from ":/components/Modal/ModalProvider";
import { VariantType } from ":/utils/VariantUtils";

describe("<Modal/>", () => {
  it("shows a modal opened by default", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);
    expect(await screen.findByText("Modal Content")).toBeInTheDocument();
  });
  it("shows a modal when clicking on the button", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });
  it("sets aria-hidden on app when a modal is opened", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");
    const app = document.querySelector(".c__app");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    expect(app).not.toHaveAttribute("aria-hidden", "true");

    await user.click(button);

    expect(screen.getByText("Modal Content")).toBeInTheDocument();
    expect(app).toHaveAttribute("aria-hidden", "true");
  });
  it("has aria-labelledby pointing to the title heading", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal size={ModalSize.SMALL} title="My Dialog Title" {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    const dialog = await screen.findByRole("dialog");
    const heading = screen.getByRole("heading", { name: "My Dialog Title" });
    expect(heading.tagName).toBe("H2");
    expect(dialog).toHaveAttribute("aria-labelledby", heading.id);
  });
  it("has aria-describedby pointing to the subtitle", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal
            size={ModalSize.SMALL}
            title="Title"
            subtitle="Description text"
            {...modal}
          >
            <div>Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    const dialog = await screen.findByRole("dialog");
    const subtitle = screen.getByText("Description text");
    expect(dialog).toHaveAttribute("aria-describedby", subtitle.id);
  });
  it("falls back to aria-label when there is no visible title", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal size={ModalSize.SMALL} aria-label="Custom label" {...modal}>
            <div>Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveAttribute("aria-label", "Custom label");
    expect(dialog).not.toHaveAttribute("aria-labelledby");
  });
  it("use modalParentSelector to change the modal portal", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <>
          <CunninghamProvider
            modalParentSelector={() =>
              document.querySelector("#my-custom-portal")!
            }
          >
            <button onClick={modal.open}>Open Modal</button>
            <Modal size={ModalSize.SMALL} {...modal}>
              <div>Modal Content</div>
            </Modal>
          </CunninghamProvider>
          <div id="my-custom-portal" />
        </>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");
    const portal = document.querySelector("#my-custom-portal")!;

    expect(portal.children.length).toEqual(0);
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();

    await user.click(button);

    const content = screen.getByText("Modal Content");
    expect(content).toBeInTheDocument();
    expect(portal.children.length).toEqual(1);
    expect(portal.children[0].className).toEqual("ReactModalPortal");
    expect(portal.children[0].children.length).toEqual(1);
    expect(portal).toContain(content);
  });
  it("closes the modal when clicking on the close button", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    const closeButton = screen.getByRole("button", {
      name: "Close",
    });
    await user.click(closeButton);
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });
  it("does not display close button", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} {...modal} hideCloseButton>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    const closeButton = screen.queryByRole("button", {
      name: "Close",
    });
    expect(closeButton).not.toBeInTheDocument();
  });
  it("closes on click outside when using closeOnClickOutside=true", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} closeOnClickOutside={true} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    await user.click(document.querySelector(".c__modal__backdrop")!);

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });
  it("does not close on click outside when using closeOnClickOutside=false", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} closeOnClickOutside={false} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    const modal = screen.getByRole("dialog");
    await user.click(modal);
    expect(screen.queryByText("Modal Content")).toBeInTheDocument();
  });
  it("close on esc by default", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });
  it("does not close on esc when using closeOnEsc=false", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} closeOnEsc={false} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByText("Modal Content")).toBeInTheDocument();
  });

  /**
   * It should also prevent the modal from closing when pressing the escape key, but it appears
   * that jest-dom does not handle dialog shortcuts, so we can't test it.
   */
  it("does not display close button when using preventClose=true", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} preventClose={true} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    const closeButton = screen.queryByRole("button", {
      name: "Close",
    });
    expect(closeButton).not.toBeInTheDocument();
  });

  it("displays pre-built confirmation modal and gives decision", async () => {
    let decision;
    const Wrapper = () => {
      const modals = useModals();
      const open = async () => {
        decision = await modals.confirmationModal();
      };
      return <button onClick={open}>Ask</button>;
    };

    render(
      <CunninghamProvider>
        <Wrapper />
      </CunninghamProvider>,
    );
    const user = userEvent.setup();
    const button = screen.getByText("Ask");

    // Modal is not open.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Display the modal.
    await user.click(button);

    // Modal is open.
    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
    expect(
      screen.getByText("Are you sure you want to do that?"),
    ).toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Click the yes button.
    const yesButton = screen.getByRole("button", {
      name: "Yes",
    });
    await user.click(yesButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is true.
    expect(decision).toBeTruthy();

    // Display the modal.
    await user.click(button);

    // Discard.
    const cancelButton = screen.getByRole("button", {
      name: "Cancel",
    });
    await user.click(cancelButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is false.
    expect(decision).toBeNull();

    // Display the modal.
    await user.click(button);

    // Close the modal.
    const closeButton = screen.getByRole("button", {
      name: "Close",
    });
    await user.click(closeButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();
  });
  it("displays pre-built delete confirmation modal", async () => {
    let decision;
    const Wrapper = () => {
      const modals = useModals();
      const open = async () => {
        decision = await modals.deleteConfirmationModal();
      };
      return <button onClick={open}>Ask</button>;
    };

    render(
      <CunninghamProvider>
        <Wrapper />
      </CunninghamProvider>,
    );
    const user = userEvent.setup();
    const button = screen.getByText("Ask");

    // Modal is not open.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Display the modal.
    await user.click(button);
    // Modal is open.
    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
    expect(
      screen.getByText("Are you sure to delete this item?"),
    ).toBeInTheDocument();
    const modalIcon = document.querySelector(".c__modal .c__modal__title-icon");
    expect(modalIcon).toHaveTextContent("delete");

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Click the yes button.
    const yesButton = screen.getByRole("button", {
      name: "Delete",
    });
    await user.click(yesButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is true.
    expect(decision).toBeTruthy();

    // Display the modal.
    await user.click(button);

    // Discard.
    const cancelButton = screen.getByRole("button", {
      name: "Cancel",
    });
    await user.click(cancelButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is false.
    expect(decision).toBeNull();

    // Display the modal.
    await user.click(button);

    // Close the modal.
    const closeButton = screen.getByRole("button", {
      name: "Close",
    });
    await user.click(closeButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();
  });

  it.each([
    [VariantType.INFO, "info"],
    [VariantType.SUCCESS, "check_circle"],
    [VariantType.WARNING, "error_outline"],
    [VariantType.ERROR, "cancel"],
    [VariantType.NEUTRAL, undefined],
  ])("renders % modal with according icon", async (type, icon) => {
    let decision;
    const Wrapper = () => {
      const modals = useModals();
      const open = async () => {
        decision = await modals.messageModal({
          messageType: type,
          title: "Watch out!",
          children: "This is a custom message!",
        });
      };
      return <button onClick={open}>Ask</button>;
    };

    render(
      <CunninghamProvider>
        <Wrapper />
      </CunninghamProvider>,
    );
    const user = userEvent.setup();
    const button = screen.getByText("Ask");

    // Modal is not open.
    expect(screen.queryByText("Watch out!")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Display the modal.
    await user.click(button);

    // Modal is open.
    expect(screen.getByText("Watch out!")).toBeInTheDocument();
    expect(screen.getByText("This is a custom message!")).toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Modal has icon.
    const modalIcon = document.querySelector(".c__modal .c__modal__title-icon");
    if (icon) {
      expect(modalIcon).toHaveTextContent(icon!);
    } else {
      expect(modalIcon).toBeNull();
    }

    // Click on ok
    const okButton = screen.getByRole("button", {
      name: "Ok",
    });
    await user.click(okButton);

    // Modal is closed.
    expect(screen.queryByText("Watch out!")).not.toBeInTheDocument();

    // Decision is true.
    expect(decision).toBeTruthy();

    // Display the modal.
    await user.click(button);

    // Modal is open.
    expect(screen.getByText("Watch out!")).toBeInTheDocument();

    // Decision is still true.
    expect(decision).toBeTruthy();

    // Close the modal.
    const closeButton = screen.getByRole("button", {
      name: "Close",
    });
    await user.click(closeButton);

    // Modal is closed.
    expect(screen.queryByText("Watch out!")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();
  });

  it("sets a noscroll class to body when a modal is open and remove it on close", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(document.body.classList.contains(NOSCROLL_CLASS)).toBeFalsy();
    await user.click(button);

    expect(document.body.classList.contains(NOSCROLL_CLASS)).toBeTruthy();

    const closeButton = screen.getByRole("button", {
      name: "Close",
    });
    await user.click(closeButton);
    expect(document.body.classList.contains(NOSCROLL_CLASS)).toBeFalsy();
  });

  it("removes noscroll body class only when last modal is closed when multiple are opened", async () => {
    const Wrapper = () => {
      const modal1 = useModal();
      const modal2 = useModal();
      const modal3 = useModal();
      const openModals = () => {
        modal1.open();
        modal2.open();
        modal3.open();
      };
      return (
        <CunninghamProvider>
          <button onClick={openModals}>Open Modals</button>
          <Modal size={ModalSize.LARGE} {...modal1}>
            Modal 1
          </Modal>
          <Modal size={ModalSize.MEDIUM} {...modal2}>
            Modal 2
          </Modal>
          <Modal size={ModalSize.SMALL} {...modal3}>
            Modal 3
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modals");

    expect(document.body.classList.contains(NOSCROLL_CLASS)).toBeFalsy();
    await user.click(button);

    expect(screen.getByText("Modal 1")).toBeInTheDocument();
    expect(screen.getByText("Modal 2")).toBeInTheDocument();
    expect(screen.getByText("Modal 3")).toBeInTheDocument();

    expect(document.body.classList.contains(NOSCROLL_CLASS)).toBeTruthy();

    const closeButtons = screen.getAllByRole("button", {
      name: "Close",
    });
    expect(closeButtons).toHaveLength(3);

    // Close modal 1.
    await user.click(closeButtons[0]);
    expect(screen.queryByText("Modal 1")).not.toBeInTheDocument();
    expect(screen.getByText("Modal 2")).toBeInTheDocument();
    expect(screen.getByText("Modal 3")).toBeInTheDocument();

    // class is still on body.
    expect(document.body.classList.contains(NOSCROLL_CLASS)).toBeTruthy();

    // Close modal 2.
    await user.click(closeButtons[1]);
    expect(screen.queryByText("Modal 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal 2")).not.toBeInTheDocument();
    expect(screen.getByText("Modal 3")).toBeInTheDocument();

    // class is still on body.
    expect(document.body.classList.contains(NOSCROLL_CLASS)).toBeTruthy();

    // Close modal 3.
    await user.click(closeButtons[2]);
    expect(screen.queryByText("Modal 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal 3")).not.toBeInTheDocument();

    // class is removed from body.
    expect(document.body.classList.contains(NOSCROLL_CLASS)).toBeFalsy();
  });
});

const testTabs: ModalTab[] = [
  {
    id: "tab1",
    label: "General",
    title: "General",
    subtitle: "General settings",
    content: <div>General content</div>,
  },
  {
    id: "tab2",
    label: "Privacy",
    title: "Privacy",
    subtitle: "Privacy settings",
    content: <div>Privacy content</div>,
  },
  {
    id: "tab3",
    label: "Notifications",
    title: "Notifications",
    content: <div>Notifications content</div>,
  },
];

describe("<Modal variant='tab' />", () => {
  it("renders tab modal with sidebar and content", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal
            variant="tab"
            size={ModalSize.MEDIUM}
            tabs={testTabs}
            sidebarTitle="Settings"
            {...modal}
          />
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    // Sidebar title is displayed
    expect(await screen.findByText("Settings")).toBeInTheDocument();

    // All tab labels are displayed
    expect(screen.getByRole("tab", { name: "General" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Privacy" })).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: "Notifications" }),
    ).toBeInTheDocument();

    // First tab content is displayed by default
    expect(screen.getByText("General content")).toBeInTheDocument();
    expect(screen.getByText("General settings")).toBeInTheDocument();

    // Other tab contents are not displayed
    expect(screen.queryByText("Privacy content")).not.toBeInTheDocument();
    expect(screen.queryByText("Notifications content")).not.toBeInTheDocument();
  });

  it("switches tabs when clicking on a tab", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal
            variant="tab"
            size={ModalSize.MEDIUM}
            tabs={testTabs}
            sidebarTitle="Settings"
            {...modal}
          />
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);
    const user = userEvent.setup();

    // First tab is active
    expect(await screen.findByText("General content")).toBeInTheDocument();

    // Click on second tab
    await user.click(screen.getByRole("tab", { name: "Privacy" }));

    // Second tab content is displayed
    expect(screen.getByText("Privacy content")).toBeInTheDocument();
    expect(screen.getByText("Privacy settings")).toBeInTheDocument();

    // First tab content is no longer displayed
    expect(screen.queryByText("General content")).not.toBeInTheDocument();
  });

  it("supports defaultActiveTab", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal
            variant="tab"
            size={ModalSize.MEDIUM}
            tabs={testTabs}
            sidebarTitle="Settings"
            defaultActiveTab="tab2"
            {...modal}
          />
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    // Second tab content is displayed by default
    expect(await screen.findByText("Privacy content")).toBeInTheDocument();
    expect(screen.queryByText("General content")).not.toBeInTheDocument();
  });

  it("supports controlled activeTab + onTabChange", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      const [activeTab, setActiveTab] = useState("tab1");
      return (
        <CunninghamProvider>
          <Modal
            variant="tab"
            size={ModalSize.MEDIUM}
            tabs={testTabs}
            sidebarTitle="Settings"
            activeTab={activeTab}
            onTabChange={setActiveTab}
            {...modal}
          />
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);
    const user = userEvent.setup();

    expect(await screen.findByText("General content")).toBeInTheDocument();

    // Click on third tab
    await user.click(screen.getByRole("tab", { name: "Notifications" }));

    // Third tab content is displayed
    expect(screen.getByText("Notifications content")).toBeInTheDocument();
    expect(screen.queryByText("General content")).not.toBeInTheDocument();
  });

  it("has correct accessibility attributes", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal
            variant="tab"
            size={ModalSize.MEDIUM}
            tabs={testTabs}
            sidebarTitle="Settings"
            {...modal}
          />
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    // Tab list exists
    expect(await screen.findByRole("tablist")).toBeInTheDocument();

    // Tab panel exists
    expect(screen.getByRole("tabpanel")).toBeInTheDocument();

    // First tab is selected
    const firstTab = screen.getByRole("tab", { name: "General" });
    expect(firstTab).toHaveAttribute("aria-selected", "true");

    // Other tabs are not selected
    const secondTab = screen.getByRole("tab", { name: "Privacy" });
    expect(secondTab).toHaveAttribute("aria-selected", "false");

    // Dialog is labelled by the sidebar title heading
    const dialog = screen.getByRole("dialog");
    const sidebarHeading = screen.getByRole("heading", { name: "Settings" });
    expect(sidebarHeading.tagName).toBe("H2");
    expect(dialog).toHaveAttribute("aria-labelledby", sidebarHeading.id);
  });

  it("closes the tab modal when clicking the close button", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal
            variant="tab"
            size={ModalSize.MEDIUM}
            tabs={testTabs}
            sidebarTitle="Settings"
            {...modal}
          />
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();

    await user.click(screen.getByText("Open Modal"));
    expect(screen.getByText("General content")).toBeInTheDocument();

    const closeButton = document.querySelector(
      ".c__modal__close .c__button",
    ) as HTMLElement;
    await user.click(closeButton);
    expect(screen.queryByText("General content")).not.toBeInTheDocument();
  });

  it("renders footer actions", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal
            variant="tab"
            size={ModalSize.MEDIUM}
            tabs={testTabs}
            sidebarTitle="Settings"
            leftActions={<button>Reset</button>}
            rightActions={
              <>
                <button>Cancel</button>
                <button>OK</button>
              </>
            }
            {...modal}
          />
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    expect(await screen.findByText("Reset")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("OK")).toBeInTheDocument();
  });
});

describe("Modal constraints", () => {
  it("applies height constraints as inline styles", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal
            size={ModalSize.MEDIUM}
            constraints={{
              preferredHeight: "500px",
              minHeight: "300px",
              maxHeight: "700px",
            }}
            {...modal}
          >
            <div>Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    const dialog = await screen.findByRole("dialog");
    expect(dialog.style.height).toBe("500px");
    expect(dialog.style.minHeight).toBe("300px");
    expect(dialog.style.maxHeight).toBe("700px");
  });

  it("does not apply inline styles when constraints is not set", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal size={ModalSize.MEDIUM} {...modal}>
            <div>Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    const dialog = await screen.findByRole("dialog");
    expect(dialog.style.height).toBe("");
    expect(dialog.style.minHeight).toBe("");
    expect(dialog.style.maxHeight).toBe("");
  });
});

describe("<Modal titleVariant='compact' />", () => {
  it("renders compact header with title and close button inline", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal
            size={ModalSize.MEDIUM}
            titleVariant="compact"
            title="Compact Title"
            {...modal}
          >
            <div>Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    expect(await screen.findByText("Compact Title")).toBeInTheDocument();

    const header = document.querySelector(".c__modal__header--compact");
    expect(header).toBeInTheDocument();

    const title = document.querySelector(".c__modal__title--compact");
    expect(title).toBeInTheDocument();
  });

  it("renders compact header with icon", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal
            size={ModalSize.MEDIUM}
            titleVariant="compact"
            title="Settings"
            titleIcon={<span data-testid="icon">icon</span>}
            {...modal}
          >
            <div>Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    expect(await screen.findByText("Settings")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("does not render subtitle in compact mode", async () => {
    const Wrapper = () => {
      const modal = useModal({ isOpenDefault: true });
      return (
        <CunninghamProvider>
          <Modal
            size={ModalSize.MEDIUM}
            titleVariant="compact"
            title="Title"
            subtitle="Should not appear"
            {...modal}
          >
            <div>Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    expect(await screen.findByText("Title")).toBeInTheDocument();
    expect(screen.queryByText("Should not appear")).not.toBeInTheDocument();
  });
});
