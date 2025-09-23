import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { tokens } from ":/cunningham-tokens";

const meta: Meta = {
  title: "Misc/Spacings",
};

export default meta;
type Story = StoryObj<{}>;

export const Default: Story = {
  render: () => {
    // Trier les espacements par valeur croissante avant de les afficher
    // Sort spacings by value before rendering
    const sortedSpacings = Object.entries(
      tokens.themes.default.globals.spacings
    ).sort((a, b) => {
      // On retire les éventuelles unités pour comparer numériquement
      const parse = (v: any) =>
        parseFloat(typeof v === "string" ? v : String(v));
      return parse(a[1]) - parse(b[1]);
    });
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {sortedSpacings.map(([key, value]) => {
          return (
            <div
              key={key}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <div
                className="fw-bold clr-content-semantic-neutral-primary"
                style={{ width: "50px" }}
              >
                -{key}
              </div>
              <div
                className="fw-medium fs-m clr-content-semantic-neutral-primary"
                style={{ width: "100px" }}
              >
                {value}
              </div>
              <div
                className={"bg-semantic-error-tertiary pl-" + key}
                style={{ height: "48px", width: 0 }}
              />
            </div>
          );
        })}
      </div>
    );
  },
};

export const Example: Story = {
  render: () => {
    return (
      <div className="clr-content-semantic-neutral-primary bg-yellow-500">
        <div className="clr-content-semantic-neutral-primary bg-purple-500  fw-medium p-t mb-l">
          Tiny padding + Large margin bottom
        </div>
        <div className="content-neutral-primary bg-pink-500 fw-medium p-l ml-b">
          Large padding + Base margin left
        </div>
      </div>
    );
  },
};
