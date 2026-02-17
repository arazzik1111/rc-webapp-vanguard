import React from "react";
import { BigLegend } from "../BigLegend";
import { within, expect } from "storybook/test";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story } from "./_BigLegend.default";

export const Loading: Story = {
  args: {
    showBadge: true,
    showPercentage: false,
    showPreviousNumber: true,
    previousNumberText: "previously",
    roundNumbers: true,
    maxWidth: "400px",
    isLoading: true,
    testId: "loading-big-legend",
    bigLegendData: [
      {
        currentNumber: 110,
        previousNumber: 105,
        iconName: IconNames.notification,
        iconFillColor: "--p400",
        title: "Website",
        description: "Website clicks made from our Business Profile",
      },
    ],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that the component is rendered
    const component = canvas.getByTestId("loading-big-legend");
    await expect(component).toBeInTheDocument();

    // Test that items are not rendered when loading
    await expect(canvas.queryByText("Website")).toBeNull();
  },
};