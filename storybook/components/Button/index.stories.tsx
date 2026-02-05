import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

type AllButtonsProps = ButtonProps & {
  color: ButtonProps["color"];
};

const AllButtons = ({ color = "brand" }: AllButtonsProps) => {
  return (
    <div
      style={{
        display: "flex",

        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <h4 className={`clr-content-semantic-${color}-primary`}>Primary</h4>
        <Button {...Primary.args} color={color} />
        <Button {...PrimaryDisabled.args} color={color} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4 className={`clr-content-semantic-${color}-primary`}>Secondary</h4>
        <Button {...Secondary.args} color={color} />
        <Button {...SecondaryDisabled.args} color={color} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4 className={`clr-content-semantic-${color}-primary`}>Tertiary</h4>
        <Button {...BrandTertiary.args} color={color} />
        <Button {...TertiaryDisabled.args} color={color} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4 className={`clr-content-semantic-${color}-primary`}>Bordered</h4>
        <Button {...Bordered.args} color={color} />
        <Button {...BrandBorderedDisabled.args} color={color} />
      </div>
    </div>
  );
};

export const AllBrands: Story = {
  render: () => {
    return <AllButtons color="brand" />;
  },
};

export const AllNeutrals: Story = {
  render: () => {
    return <AllButtons color="neutral" />;
  },
};

export const AllWarnings: Story = {
  render: () => {
    return <AllButtons color="warning" />;
  },
};

export const AllErrors: Story = {
  render: () => {
    return <AllButtons color="error" />;
  },
};

export const AllSuccesses: Story = {
  render: () => {
    return <AllButtons color="success" />;
  },
};

export const AllInfos: Story = {
  render: () => {
    return <AllButtons color="info" />;
  },
};

const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
    icon: <span className="material-icons">bolt</span>,
  },
};

const PrimaryDisabled: Story = {
  args: {
    children: "Disabled",
    variant: "primary",
    disabled: true,
    icon: <span className="material-icons">bolt</span>,
  },
};

const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
    icon: <span className="material-icons">bolt</span>,
  },
};

const SecondaryDisabled: Story = {
  args: {
    children: "Disabled",
    variant: "secondary",
    disabled: true,
    icon: <span className="material-icons">bolt</span>,
  },
};

const BrandTertiary: Story = {
  args: {
    children: "Tertiary",
    variant: "tertiary",
    icon: <span className="material-icons">bolt</span>,
  },
};

const TertiaryDisabled: Story = {
  args: {
    children: "Disabled",
    variant: "tertiary",
    disabled: true,
    icon: <span className="material-icons">bolt</span>,
  },
};

const Bordered: Story = {
  args: {
    children: "Bordered",
    variant: "bordered",
    icon: <span className="material-icons">bolt</span>,
  },
};

const BrandBorderedDisabled: Story = {
  args: {
    children: " Disabled",
    variant: "bordered",
    disabled: true,
    icon: <span className="material-icons">bolt</span>,
  },
};

export const Medium: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Small: Story = {
  args: {
    children: "Primary",
    variant: "primary",
    size: "small",
  },
};

export const Nano: Story = {
  args: {
    children: "Primary",
    variant: "primary",
    size: "nano",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Primary",
    variant: "primary",
    fullWidth: true,
  },
};

export const FullWidthWithIcon: Story = {
  args: {
    children: "Primary",
    variant: "primary",
    fullWidth: true,
    icon: <span className="material-icons">bolt</span>,
  },
};

export const IconLeft: Story = {
  args: {
    children: "Icon",
    icon: <span className="material-icons">bolt</span>,
    variant: "primary",
  },
};

export const IconRight: Story = {
  args: {
    children: "Icon",
    iconPosition: "right",
    icon: <span className="material-icons">bolt</span>,
    variant: "primary",
  },
};

export const IconOnly: Story = {
  args: {
    "aria-label": "Button with only an icon",
    icon: <span className="material-icons">bolt</span>,
    variant: "primary",
  },
};

export const AsLink: Story = {
  args: {
    children: "Go to fun-mooc.fr",
    icon: <span className="material-icons">link</span>,
    variant: "primary",
    href: "https://www.fun-mooc.fr/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};
