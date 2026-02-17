import React, { useState } from "react";
import { within, userEvent, expect, waitFor } from "storybook/test";
import { Story, defaultProps, DETAILS_TEXT } from "./_Accordion.default";
import { Accordion } from "../Accordion";

export const ExpandedEffect: Story = {
  render: (args) => {
    const [expanded, setExpanded] = useState(true);

    return (
      <div>
        <button data-testid="external-toggle" onClick={() => setExpanded(!expanded)}>
          Toggle Externally
        </button>
        <Accordion {...args} expanded={expanded} />
        <div data-testid="expanded-state">State: {expanded ? "expanded" : "collapsed"}</div>
      </div>
    );
  },
  args: {
    ...defaultProps,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const externalToggle = canvas.getByTestId("external-toggle");
    const stateIndicator = canvas.getByTestId("expanded-state");

    // 👇 Wait for component to render and assert accordion starts expanded
    await waitFor(() => {
      expect(stateIndicator).toHaveTextContent("State: expanded");
      expect(canvas.getByText(DETAILS_TEXT)).toBeVisible();
    });

    // 👇 Toggle externally to test useEffect
    await userEvent.click(externalToggle);

    // 👇 Wait for accordion to collapse via external control
    await waitFor(() => {
      expect(stateIndicator).toHaveTextContent("State: collapsed");
    });

    // 👇 Toggle externally again
    await userEvent.click(externalToggle);

    // 👇 Wait for accordion to expand via external control
    await waitFor(() => {
      expect(stateIndicator).toHaveTextContent("State: expanded");
      expect(canvas.getByText(DETAILS_TEXT)).toBeVisible();
    });
  },
};