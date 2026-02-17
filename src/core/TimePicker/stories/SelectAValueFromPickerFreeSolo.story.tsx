import { Story, testOnChange, createMockOnChange } from "./_TimePicker.default";
import { SelectOptionProp } from "@vanguard/Select/Select";

export const SelectAValueFromPickerFreeSolo: Story = {
  args: {
    hourListType: "quarter",
    onChange: createMockOnChange(),
    testId: "time-picker-test-id",
    value: "03:09",
    freeSolo: true,
  },
  play: async ({ canvasElement, args }) => {
    // Define the expected selected value
    const expectedSelectedValue: SelectOptionProp = {
      disabled: false,
      key: 8,
      value: "02:00",
      title: "02:00",
    };
    await testOnChange(canvasElement, args, {
      expectedSelectedValue,
      clickOn: "02:00",
    });
  },
};