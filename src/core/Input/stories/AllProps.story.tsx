import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testLabels, testValues, testPlaceholders, createMockOnChange } from "./_Input.default";

export const AllProps: Story = {
  args: {
    className: "custom-input-class",
    inputClassName: "custom-input-element-class",
    testId: "all-props-input",
    readonly: false,
    type: "text",
    size: "medium",
    isLoading: false,
    loadingText: "Loading...",
    textFieldProps: { variant: "outlined" },
    value: testValues.text,
    placeholder: testPlaceholders.default,
    required: true,
    disabled: false,
    infoText: "This is info text",
    id: "all-props-input-id",
    replacements: {},
    triggerChangeOnStateFieldChange: false,
    autoFocus: false,
    label: testLabels.simple,
    labelType: "floating",
    labelStyle: { fontWeight: "bold" },
    counter: true,
    maxLength: 100,
    highlightWords: ["highlight"],
    prohibitedWords: ["prohibited"],
    highlightUrl: true,
    highlightUrlType: "negative",
    highlightLengthExceeded: true,
    onFocus: () => {},
    onBlur: () => {},
    onKeyUp: () => {},
    onKeyDown: () => {},
    onInput: () => {},
    onChange: createMockOnChange(),
    onClick: () => {},
    onStepUpNumericClick: () => {},
    onStepDownNumericClick: () => {},
    adornment: <span>Start</span>,
    endAdornment: <span>End</span>,
    roundedNumericCTAType: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("all-props-input");
    await expect(input).toBeInTheDocument();
  },
};