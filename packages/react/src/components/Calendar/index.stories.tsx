import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { CalendarDate, DateValue } from "@internationalized/date";
import { CunninghamProvider } from ":/components/Provider";
import { Calendar, CalendarRange } from ":/components/Calendar";
import { Modal, ModalSize, useModal } from ":/components/Modal";
import { Button } from ":/components/Button";

export default {
  title: "Components/Calendar",
  component: Calendar,
} as Meta<typeof Calendar>;

export const Default: StoryFn<typeof Calendar> = () => (
  <CunninghamProvider>
    <Calendar />
  </CunninghamProvider>
);

export const Controlled: StoryFn<typeof Calendar> = () => {
  const [value, setValue] = useState<DateValue | null>(null);
  return (
    <CunninghamProvider>
      <Calendar value={value} onChange={setValue} />
      <p>Selected: {value?.toString() ?? "none"}</p>
    </CunninghamProvider>
  );
};

export const WithFooter: StoryFn<typeof Calendar> = () => {
  const [value, setValue] = useState<DateValue | null>(null);
  const [confirmed, setConfirmed] = useState<string>("none");
  return (
    <CunninghamProvider>
      <Calendar
        value={value}
        onChange={setValue}
        onOk={(val) => setConfirmed(val?.toString() ?? "none")}
        onCancel={() => setValue(null)}
        onReset={() => setValue(null)}
      />
      <p>Confirmed: {confirmed}</p>
    </CunninghamProvider>
  );
};

export const WithMinMax: StoryFn<typeof Calendar> = () => (
  <CunninghamProvider>
    <Calendar
      minValue={new CalendarDate(2024, 1, 1)}
      maxValue={new CalendarDate(2024, 12, 31)}
    />
  </CunninghamProvider>
);

export const RangeDefault: StoryFn<typeof CalendarRange> = () => (
  <CunninghamProvider>
    <CalendarRange />
  </CunninghamProvider>
);

export const RangeWithFooter: StoryFn<typeof CalendarRange> = () => (
  <CunninghamProvider>
    <CalendarRange
      onOk={() => alert("OK")}
      onCancel={() => alert("Cancel")}
      onReset={() => alert("Reset")}
    />
  </CunninghamProvider>
);

export const InModal: StoryFn<typeof Calendar> = () => {
  const modal = useModal();
  const [value, setValue] = useState<DateValue | null>(null);
  return (
    <CunninghamProvider>
      <Button onClick={modal.open}>Open Calendar in Modal</Button>
      <Modal {...modal} title="Select a date" size={ModalSize.SMALL}>
        <Calendar
          value={value}
          onChange={setValue}
          onOk={() => modal.close()}
          onCancel={() => modal.close()}
          onReset={() => setValue(null)}
        />
      </Modal>
    </CunninghamProvider>
  );
};
