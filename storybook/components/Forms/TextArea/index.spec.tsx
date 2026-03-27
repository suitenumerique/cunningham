import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { expect } from "vitest";
import React, { useRef } from "react";
import { TextArea } from ":/components/Forms/TextArea/index";
import { Button } from ":/components/Button";

describe("<TextArea/>", () => {
  it("renders and can type", async () => {
    const user = userEvent.setup();
    render(<TextArea label="Describe your job" />);
    const textarea: HTMLTextAreaElement = screen.getByRole("textbox", {
      name: "Describe your job",
    });
    expect(textarea.value).toEqual("");
    await user.type(textarea, "Developer");
    expect(textarea.value).toEqual("Developer");
  });

  it("renders with default value and can type", async () => {
    const user = userEvent.setup();
    render(<TextArea label="Describe your job" defaultValue="Developer" />);
    const textarea: HTMLTextAreaElement = screen.getByRole("textbox", {
      name: "Describe your job",
    });

    expect(textarea.value).toEqual("Developer");
    await user.clear(textarea);
    expect(textarea.value).toEqual("");
    await user.type(textarea, "Developer");
    expect(textarea.value).toEqual("Developer");
  });

  it("renders with moving label", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <TextArea label="Describe your job" />
        <TextArea label="Describe your hobbies" />
      </div>,
    );

    const textarea: HTMLTextAreaElement = screen.getByRole("textbox", {
      name: "Describe your job",
    });
    const textarea2: HTMLTextAreaElement = screen.getByRole("textbox", {
      name: "Describe your hobbies",
    });
    const label = screen.getByText("Describe your job")!.parentElement!;
    expect(Array.from(label.classList)).toContain("placeholder");

    // Clicking on the textarea should remove the placeholder class.
    await user.click(textarea);

    expect(Array.from(label.classList)).not.toContain("placeholder");

    // Writing something should remove the placeholder class too.
    await user.type(textarea, "Developer");

    expect(Array.from(label.classList)).not.toContain("placeholder");

    // Clearing the textarea and focus out should add the placeholder class
    await user.clear(textarea);
    await user.click(textarea2);

    expect(Array.from(label.classList)).toContain("placeholder");
  });

  it("renders with state=success", async () => {
    render(<TextArea label="First name" state="success" />);
    expect(document.querySelector(".c__field--success")).toBeInTheDocument();
    expect(document.querySelector(".c__field--success")).toBeInTheDocument();
  });

  it("renders with state=error", async () => {
    render(<TextArea label="First name" state="error" />);
    expect(document.querySelector(".c__field--error")).toBeInTheDocument();
    expect(document.querySelector(".c__field--error")).toBeInTheDocument();
  });

  it("renders disabled", async () => {
    const user = userEvent.setup();
    render(<TextArea label="Describe your job" disabled={true} />);
    const textarea: HTMLTextAreaElement = screen.getByRole("textbox", {
      name: "Describe your job",
    });
    expect(
      document.querySelector(".c__textarea__wrapper--disabled"),
    ).toBeInTheDocument();
    expect(textarea.value).toEqual("");
    // Disabled textareas should not be able to type.
    await user.type(textarea, "Developer");
    expect(textarea.value).toEqual("");
  });

  it("renders with text", async () => {
    render(<TextArea label="Describe your job" text="Some text" />);
    screen.getByText("Some text");
  });

  it("renders with text items", async () => {
    render(
      <TextArea
        label="Describe your job"
        textItems={[
          "Text too long",
          "Wrong choice",
          "Must contain at least 9 characters, uppercase and digits",
        ]}
      />,
    );
    expect(
      screen.getAllByRole("listitem").map((item) => item.textContent),
    ).toEqual([
      "Text too long",
      "Wrong choice",
      "Must contain at least 9 characters, uppercase and digits",
    ]);
  });

  it("renders with text and text right", async () => {
    render(<TextArea label="Describe your job" rightText="Some text right" />);
    const text = screen.getByText("Some text right");
    expect(text).toHaveClass("c__field__text__right");
  });

  it("renders with char counter", async () => {
    const user = userEvent.setup();
    render(
      <TextArea
        label="Describe your job"
        charCounter={true}
        charCounterMax={15}
      />,
    );
    const textarea: HTMLTextAreaElement = screen.getByRole("textbox", {
      name: "Describe your job",
    });
    screen.getByText("0/15");
    await user.type(textarea, "De");
    screen.getByText("2/15");
    await user.type(textarea, "ve");
    screen.getByText("4/15");
    await user.clear(textarea);
    screen.getByText("0/15");
  });

  it("forwards ref", async () => {
    const user = userEvent.setup();
    const Wrapper = () => {
      const ref = useRef<HTMLTextAreaElement>(null);
      return (
        <div>
          <TextArea label="Describe your job" ref={ref} />
          <Button onClick={() => ref.current?.focus()}>Focus</Button>
        </div>
      );
    };
    render(<Wrapper />);
    const textarea: HTMLTextAreaElement = screen.getByRole("textbox", {
      name: "Describe your job",
    });
    expect(textarea).not.toHaveFocus();
    await user.click(screen.getByRole("button", { name: "Focus" }));
    waitFor(() => expect(textarea).toHaveFocus());
  });

  it("works controlled", async () => {
    const Wrapper = () => {
      const [value, setValue] = React.useState("I am controlled");
      return (
        <div>
          <div>Value: {value}.</div>
          <TextArea
            label="Describe your job"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={() => setValue("")}>Reset</Button>
        </div>
      );
    };
    const user = userEvent.setup();
    render(<Wrapper />);
    const textarea: HTMLTextAreaElement = screen.getByRole("textbox", {
      name: "Describe your job",
    });
    screen.getByText("Value: I am controlled.");
    await user.type(textarea, "John");
    screen.getByText("Value: I am controlledJohn.");
    await user.clear(textarea);
    screen.getByText("Value: .");
  });

  it("renders with className", async () => {
    render(<TextArea className="my-custom-class" />);

    expect(
      document.querySelector(".c__field--textarea.my-custom-class"),
    ).toBeInTheDocument();
  });

  describe("classic variant", () => {
    it("renders with classic variant", () => {
      render(<TextArea label="Description" variant="classic" />);
      // In classic mode, label is rendered outside the wrapper with its own class
      expect(document.querySelector(".c__textarea__label")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
    });

    it("label is always static in classic variant", async () => {
      const user = userEvent.setup();
      render(
        <div>
          <TextArea label="Description" variant="classic" />
          <TextArea label="Notes" variant="classic" />
        </div>,
      );

      const textarea: HTMLTextAreaElement = screen.getByRole("textbox", {
        name: "Description",
      });
      const label = screen.getByText("Description");

      // In classic variant, label is outside the wrapper and has c__textarea__label class
      expect(label.classList.contains("c__textarea__label")).toBe(true);

      // Focusing should not change anything
      await user.click(textarea);
      expect(label.classList.contains("c__textarea__label")).toBe(true);

      // Typing should not change anything
      await user.type(textarea, "Some text");
      expect(label.classList.contains("c__textarea__label")).toBe(true);
    });

    it("shows placeholder in classic variant", () => {
      render(
        <TextArea
          label="Description"
          variant="classic"
          placeholder="Enter a description"
        />,
      );
      const textarea: HTMLTextAreaElement = screen.getByRole("textbox", {
        name: "Description",
      });
      expect(textarea.placeholder).toEqual("Enter a description");
    });

    it("ignores placeholder in floating variant", () => {
      render(
        <TextArea
          label="Description"
          variant="floating"
          placeholder="Enter a description"
        />,
      );
      const textarea: HTMLTextAreaElement = screen.getByRole("textbox", {
        name: "Description",
      });
      expect(textarea.placeholder).toEqual("");
    });

    it("defaults to floating variant (placeholder ignored)", () => {
      render(
        <TextArea label="Description" placeholder="Enter a description" />,
      );
      const textarea: HTMLTextAreaElement = screen.getByRole("textbox", {
        name: "Description",
      });
      expect(textarea.placeholder).toEqual("");
      expect(
        document.querySelector(".c__textarea__label"),
      ).not.toBeInTheDocument();
    });
  });

  describe("hideLabel", () => {
    it("hides label visually but keeps it accessible in floating variant", () => {
      render(<TextArea label="Description" hideLabel />);
      const textarea = screen.getByRole("textbox", { name: "Description" });
      expect(textarea).toBeInTheDocument();
      // Label should be visually hidden via LabelledBox
      const label = screen.getByText("Description");
      expect(label.closest("label")).toHaveClass("c__offscreen");
    });

    it("hides label visually but keeps it accessible in classic variant", () => {
      render(<TextArea label="Description" variant="classic" hideLabel />);
      const textarea = screen.getByRole("textbox", { name: "Description" });
      expect(textarea).toBeInTheDocument();
      // Label should be visually hidden with c__offscreen class
      const label = screen.getByText("Description");
      expect(label).toHaveClass("c__offscreen");
      // The visible label class should not be present
      expect(
        document.querySelector(".c__textarea__label"),
      ).not.toBeInTheDocument();
    });
  });
});
