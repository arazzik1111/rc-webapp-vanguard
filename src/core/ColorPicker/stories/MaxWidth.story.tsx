import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_ColorPicker.default";

export const MaxWidthPx: Story = {
  render: () => (
    <ColorPicker
      label="Color with 300px max width"
      color="#3366cc"
      maxWidth="300px"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ensure label rendered
    const label = canvas.getByText("Color with 300px max width");
    await expect(label).toBeInTheDocument();

    // find container by inline CSS var presence
    const colorInput = canvasElement.querySelector(selectors.colorInput) as HTMLInputElement;
    await expect(colorInput).toBeInTheDocument();

    const container = colorInput.closest("div[style*='--colorPickerMaxWidth']") as HTMLElement | null;
    await expect(container).toBeInTheDocument();

    // assert CSS variable value
    const cssVar = container!.style.getPropertyValue("--colorPickerMaxWidth").trim();
    await expect(cssVar).toBe("300px");

    // assert computed max-width respects the variable
    const computed = getComputedStyle(container!);
    await expect(computed.maxWidth).toBe("300px");
  },
};

export const MaxWidthPercent: Story = {
  render: () => (
    <div style={{ width: "400px", border: "0" }}>
      <ColorPicker
        label="Color with 50% max width"
        color="#3366cc"
        maxWidth="50%"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText("Color with 50% max width");
    await expect(label).toBeInTheDocument();

    const colorInput = canvasElement.querySelector(selectors.colorInput) as HTMLInputElement;
    await expect(colorInput).toBeInTheDocument();

    const container = colorInput.closest("div[style*='--colorPickerMaxWidth']") as HTMLElement | null;
    await expect(container).toBeInTheDocument();

    const cssVar = container!.style.getPropertyValue("--colorPickerMaxWidth").trim();
    await expect(cssVar).toBe("50%");
  },
};

export const MaxWidthDefault: Story = {
  render: () => (
    <ColorPicker
      label="Color with default max width"
      color="#3366cc"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText("Color with default max width");
    await expect(label).toBeInTheDocument();

    const colorInput = canvasElement.querySelector(selectors.colorInput) as HTMLInputElement;
    await expect(colorInput).toBeInTheDocument();

    // container is parent of input container
    const inputContainer = colorInput.closest("div") as HTMLElement | null;
    await expect(inputContainer).toBeInTheDocument();
    const container = inputContainer!.parentElement as HTMLElement | null;
    await expect(container).toBeInTheDocument();

    // No inline var set by default
    const cssVar = container!.style.getPropertyValue("--colorPickerMaxWidth").trim();
    await expect(cssVar).toBe("");

    // Should fallback to 258px per SCSS
    const computed = getComputedStyle(container!);
    await expect(computed.maxWidth).toBe("258px");
  },
};