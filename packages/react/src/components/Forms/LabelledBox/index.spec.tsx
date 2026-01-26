import { render, screen } from "@testing-library/react";
import React from "react";
import { expect } from "vitest";
import { LabelledBox } from "./index";

describe("<LabelledBox/>", () => {
  describe("floating variant (default)", () => {
    it("renders with floating variant by default", () => {
      render(
        <LabelledBox label="Test Label">
          <input type="text" />
        </LabelledBox>,
      );
      const container = document.querySelector(".labelled-box");
      expect(container).not.toHaveClass("labelled-box--classic");
    });

    it("applies placeholder class when labelAsPlaceholder is true", () => {
      render(
        <LabelledBox label="Test Label" labelAsPlaceholder={true}>
          <input type="text" />
        </LabelledBox>,
      );
      const label = screen.getByText("Test Label");
      expect(label.closest("label")).toHaveClass("placeholder");
    });

    it("does not apply placeholder class when labelAsPlaceholder is false", () => {
      render(
        <LabelledBox label="Test Label" labelAsPlaceholder={false}>
          <input type="text" />
        </LabelledBox>,
      );
      const label = screen.getByText("Test Label");
      expect(label.closest("label")).not.toHaveClass("placeholder");
    });
  });

  describe("classic variant", () => {
    it("renders with classic variant class", () => {
      render(
        <LabelledBox label="Test Label" variant="classic">
          <input type="text" />
        </LabelledBox>,
      );
      const container = document.querySelector(".labelled-box");
      expect(container).toHaveClass("labelled-box--classic");
    });

    it("ignores labelAsPlaceholder in classic variant", () => {
      render(
        <LabelledBox
          label="Test Label"
          variant="classic"
          labelAsPlaceholder={true}
        >
          <input type="text" />
        </LabelledBox>,
      );
      const label = screen.getByText("Test Label");
      // In classic variant, placeholder class should NOT be applied even if labelAsPlaceholder is true
      expect(label.closest("label")).not.toHaveClass("placeholder");
    });

    it("label is always static in classic variant regardless of labelAsPlaceholder", () => {
      const { rerender } = render(
        <LabelledBox
          label="Test Label"
          variant="classic"
          labelAsPlaceholder={false}
        >
          <input type="text" />
        </LabelledBox>,
      );
      let label = screen.getByText("Test Label");
      expect(label.closest("label")).not.toHaveClass("placeholder");

      rerender(
        <LabelledBox
          label="Test Label"
          variant="classic"
          labelAsPlaceholder={true}
        >
          <input type="text" />
        </LabelledBox>,
      );
      label = screen.getByText("Test Label");
      expect(label.closest("label")).not.toHaveClass("placeholder");
    });
  });

  describe("other props work with both variants", () => {
    it("applies disabled class in floating variant", () => {
      render(
        <LabelledBox label="Test Label" disabled>
          <input type="text" />
        </LabelledBox>,
      );
      const container = document.querySelector(".labelled-box");
      expect(container).toHaveClass("labelled-box--disabled");
    });

    it("applies disabled class in classic variant", () => {
      render(
        <LabelledBox label="Test Label" variant="classic" disabled>
          <input type="text" />
        </LabelledBox>,
      );
      const container = document.querySelector(".labelled-box");
      expect(container).toHaveClass("labelled-box--classic");
      expect(container).toHaveClass("labelled-box--disabled");
    });

    it("applies hideLabel in classic variant", () => {
      render(
        <LabelledBox label="Test Label" variant="classic" hideLabel>
          <input type="text" />
        </LabelledBox>,
      );
      const label = screen.getByText("Test Label");
      expect(label.closest("label")).toHaveClass("c__offscreen");
    });
  });
});
