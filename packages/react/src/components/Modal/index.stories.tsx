import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import { Modal, ModalSize, useModal } from ":/components/Modal/index";
import { Button } from ":/components/Button";
import { CunninghamProvider } from ":/components/Provider";
import longLorem from ":/components/Modal/resources/longLorem.json";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  args: {
    children: "Description",
    title: "Title",
  },
  decorators: [
    (Story, context) => {
      const modal = useModal();

      useEffect(() => {
        modal.open();
      }, []);

      return (
        <>
          <Button onClick={() => modal.open()}>Open Modal</Button>
          <Story args={{ ...context.args, ...modal }} />
        </>
      );
    },
  ],
  parameters: {
    docs: {
      story: {
        height: "250px",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Small: Story = {
  args: {
    size: ModalSize.SMALL,
  },
};
export const Medium: Story = {
  args: {
    size: ModalSize.MEDIUM,
  },
};

export const Large: Story = {
  args: {
    size: ModalSize.LARGE,
  },
};
export const ExtraLarge: Story = {
  args: {
    size: ModalSize.EXTRA_LARGE,
  },
};
export const Full: Story = {
  args: {
    size: ModalSize.FULL,
  },
};

export const HideCloseButton: Story = {
  args: {
    size: ModalSize.MEDIUM,
    hideCloseButton: true,
  },
};
export const CloseOnClickOutside: Story = {
  args: {
    size: ModalSize.MEDIUM,
    hideCloseButton: true,
    closeOnClickOutside: true,
  },
};
export const DontCloseOnEsc: Story = {
  args: {
    size: ModalSize.MEDIUM,
    closeOnEsc: false,
  },
};
export const PreventClose: Story = {
  args: {
    size: ModalSize.MEDIUM,
    preventClose: true,
  },
};

export const PrimaryButton: Story = {
  args: {
    size: ModalSize.MEDIUM,
    rightActions: (
      <Button variant="primary" fullWidth={true}>
        Primary
      </Button>
    ),
  },
};

export const SecondaryButton: Story = {
  args: {
    size: ModalSize.MEDIUM,
    rightActions: (
      <Button variant="secondary" fullWidth={true}>
        Secondary
      </Button>
    ),
  },
};

export const TwoButtons: Story = {
  args: {
    size: ModalSize.MEDIUM,
    leftActions: (
      <Button variant="secondary" fullWidth={true}>
        Secondary
      </Button>
    ),
    rightActions: (
      <Button variant="primary" fullWidth={true}>
        Primary
      </Button>
    ),
  },
};

export const ThreeButtons: Story = {
  args: {
    size: ModalSize.MEDIUM,
    leftActions: (
      <Button variant="tertiary" fullWidth={true}>
        Tertiary
      </Button>
    ),
    rightActions: (
      <>
        <Button variant="secondary" fullWidth={true}>
          Secondary
        </Button>
        <Button variant="primary" fullWidth={true}>
          Primary
        </Button>
      </>
    ),
  },
};

export const LeftAndRightButtons: Story = {
  args: {
    size: ModalSize.MEDIUM,
    leftActions: <Button variant="secondary">Secondary</Button>,
    rightActions: <Button variant="primary">Primary</Button>,
  },
};

export const WithSubtitle: Story = {
  args: {
    size: ModalSize.MEDIUM,
    title: "Create a new project",
    subtitle: "Fill in the details below to get started.",
    children: "",
    rightActions: <Button variant="primary">Create</Button>,
  },
};

export const WithTitleIcon: Story = {
  args: {
    size: ModalSize.MEDIUM,
    title: "Settings",
    titleIcon: <span className="material-icons">settings</span>,
    children: "Settings content goes here...",
  },
};

export const WithTitleIconAndSubtitle: Story = {
  args: {
    size: ModalSize.MEDIUM,
    title: "Delete item",
    subtitle: "This action cannot be undone.",
    titleIcon: <span className="material-icons">warning</span>,
    children: "Are you sure you want to delete this item?",
    leftActions: <Button variant="secondary">Cancel</Button>,
    rightActions: <Button variant="primary">Delete</Button>,
  },
};

export const SubtitleOnly: Story = {
  args: {
    size: ModalSize.MEDIUM,
    subtitle: "A modal with only a subtitle and no title.",
    children: "Content goes here...",
  },
};

export const ExampleApplication: Story = {
  args: {
    size: ModalSize.LARGE,
    title: "Application successful",
    titleIcon: <span className="material-icons clr-success-600">done</span>,
    children: (
      <>
        Thank you for submitting your application! Your information has been
        received successfully. <br />
        <br />
        You will receive a confirmation email shortly with the details of your
        submission. If there are any further steps required our team will be in
        touch.
      </>
    ),
    rightActions: <Button variant="primary">I understand</Button>,
  },
  parameters: {
    docs: {
      story: {
        height: "500px",
      },
    },
  },
};

export const FullWithContent: Story = {
  args: {
    size: ModalSize.FULL,
    leftActions: <Button variant="tertiary">Tertiary</Button>,
    rightActions: (
      <>
        <Button variant="secondary">Secondary</Button>
        <Button variant="primary">Primary</Button>
      </>
    ),
    children: longLorem.text,
  },
};

export const StickyFooterFull: Story = {
  args: {
    size: ModalSize.FULL,
    stickyFooter: true,
    leftActions: <Button variant="tertiary">Tertiary</Button>,
    rightActions: (
      <>
        <Button variant="secondary">Secondary</Button>
        <Button variant="primary">Primary</Button>
      </>
    ),
    children: longLorem.text,
  },
};

export const CustomParentSelect: Story = {
  render: () => {
    return (
      <CunninghamProvider
        modalParentSelector={() =>
          document.querySelector("#my-custom-modal-parent")!
        }
      >
        <Modal isOpen={true} onClose={() => {}} size={ModalSize.MEDIUM}>
          I am rendered inside #my-custom-modal-parent
        </Modal>
        <div id="my-custom-modal-parent" />
      </CunninghamProvider>
    );
  },
};
