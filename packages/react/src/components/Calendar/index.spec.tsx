import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { expect, vi } from "vitest";
import { CalendarDate, DateValue } from "@internationalized/date";
import { CunninghamProvider } from ":/components/Provider";
import { Calendar, CalendarRange } from ":/components/Calendar";

vi.mock("@internationalized/date", async () => {
  const mod = await vi.importActual<typeof import("@internationalized/date")>(
    "@internationalized/date",
  );
  return {
    ...mod,
    getLocalTimeZone: vi.fn().mockReturnValue("Europe/Paris"),
  };
});

describe("<Calendar/>", () => {
  it("renders standalone", () => {
    render(
      <CunninghamProvider>
        <Calendar />
      </CunninghamProvider>,
    );
    expect(screen.getByRole("application")).toBeDefined();
    expect(screen.getByRole("grid")).toBeDefined();
  });

  it("renders with footer when callbacks are provided", () => {
    render(
      <CunninghamProvider>
        <Calendar
          onOk={vi.fn()}
          onCancel={vi.fn()}
          onReset={vi.fn()}
        />
      </CunninghamProvider>,
    );
    expect(screen.getByText("Reset")).toBeDefined();
    expect(screen.getByText("Cancel")).toBeDefined();
    expect(screen.getByText("OK")).toBeDefined();
  });

  it("hides footer when hideFooter is true", () => {
    render(
      <CunninghamProvider>
        <Calendar
          onOk={vi.fn()}
          onCancel={vi.fn()}
          onReset={vi.fn()}
          hideFooter
        />
      </CunninghamProvider>,
    );
    expect(screen.queryByText("Reset")).toBeNull();
    expect(screen.queryByText("Cancel")).toBeNull();
    expect(screen.queryByText("OK")).toBeNull();
  });

  it("fires onCancel callback", async () => {
    const user = userEvent.setup();
    const onCancel = vi.fn();
    render(
      <CunninghamProvider>
        <Calendar onCancel={onCancel} />
      </CunninghamProvider>,
    );
    await user.click(screen.getByText("Cancel"));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("fires onReset callback", async () => {
    const user = userEvent.setup();
    const onReset = vi.fn();
    render(
      <CunninghamProvider>
        <Calendar onReset={onReset} />
      </CunninghamProvider>,
    );
    await user.click(screen.getByText("Reset"));
    expect(onReset).toHaveBeenCalledTimes(1);
  });

  it("fires onOk callback with selected value", async () => {
    const user = userEvent.setup();
    const onOk = vi.fn();

    const Wrapper = () => {
      const [value, setValue] = useState<DateValue | null>(
        new CalendarDate(2024, 3, 15),
      );
      return (
        <CunninghamProvider>
          <Calendar value={value} onChange={setValue} onOk={onOk} />
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);
    await user.click(screen.getByText("OK"));
    expect(onOk).toHaveBeenCalledTimes(1);
  });

  it("allows day selection", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <CunninghamProvider>
        <Calendar onChange={onChange} />
      </CunninghamProvider>,
    );

    const buttons = screen.getAllByRole("button");
    const dayButton = buttons.find(
      (btn) => btn.textContent === "15" && !btn.closest("[hidden]"),
    );
    expect(dayButton).toBeDefined();
    await user.click(dayButton!);
    expect(onChange).toHaveBeenCalled();
  });

  it("navigates months via dropdown", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <Calendar defaultValue={new CalendarDate(2024, 6, 15)} />
      </CunninghamProvider>,
    );

    // Find the month select button
    const monthButton = screen.getByRole("combobox", {
      name: "Select a month",
    });
    expect(monthButton).toBeDefined();
    await user.click(monthButton);

    // Select January
    const janOption = screen.getByText("January");
    expect(janOption).toBeDefined();
    await user.click(janOption);
  });

  it("navigates months via prev/next buttons", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <Calendar defaultValue={new CalendarDate(2024, 6, 15)} />
      </CunninghamProvider>,
    );

    const prevButton = screen.getByRole("button", { name: "Previous month" });
    await user.click(prevButton);

    const nextButton = screen.getByRole("button", { name: "Next month" });
    await user.click(nextButton);
  });
});

describe("<CalendarRange/>", () => {
  it("renders standalone range calendar", () => {
    render(
      <CunninghamProvider>
        <CalendarRange />
      </CunninghamProvider>,
    );
    expect(screen.getByRole("application")).toBeDefined();
    expect(screen.getByRole("grid")).toBeDefined();
  });

  it("renders with footer when callbacks are provided", () => {
    render(
      <CunninghamProvider>
        <CalendarRange
          onOk={vi.fn()}
          onCancel={vi.fn()}
          onReset={vi.fn()}
        />
      </CunninghamProvider>,
    );
    expect(screen.getByText("Reset")).toBeDefined();
    expect(screen.getByText("Cancel")).toBeDefined();
    expect(screen.getByText("OK")).toBeDefined();
  });
});
