import React, { useState } from "react";
import { within, userEvent, expect } from "storybook/test";
import { Story, defaultProps, DETAILS_TEXT } from "./_Accordion.default";
import { Accordion } from "../Accordion";

export const WithOnExpandedChange: Story = {
  render: (args) => {
    const [expanded, setExpanded] = useState(false);
    const [callbackCalled, setCallbackCalled] = useState(false);

    return (
      <div>
        <Accordion
          {...args}
          expanded={expanded}
          onExpandedChange={(newExpanded) => {
            setExpanded(newExpanded);
            setCallbackCalled(true);
          }}
        />
        <div data-testid="callback-indicator">{callbackCalled ? "Callback called" : "Callback not called"}</div>
      </div>
    );
  },
  args: {
    ...defaultProps,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const action = canvas.getByRole("button");
    const indicator = canvas.getByTestId("callback-indicator");

    // 👇 Assert callback is not called initially
    await expect(indicator).toHaveTextContent("Callback not called");

    await userEvent.click(action);

    // 👇 Assert callback is called after click
    await expect(indicator).toHaveTextContent("Callback called");
    await expect(canvas.getByText(DETAILS_TEXT)).toBeVisible();
  },
};