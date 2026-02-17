import React from "react";
import { InfoBox } from "../InfoBox";
import { Story, createMockAction, selectors } from "./_InfoBox.default";
import { within, expect, userEvent } from "storybook/test";
import { ButtonTypes } from "@vanguard/Button/Button";
import { IconNames } from "@vanguard/Icon/IconNames";

export const AllProps: Story = {
  args: {
    type: "info",
    title: "Complete InfoBox Example",
    description: "This InfoBox demonstrates all available props.",
    maxWidth: "600px",
    width: "500px",
    dismissible: true,
    dismissCallback: createMockAction(),
    testId: "all-props-infobox",
    position: "center",
    positive: {
      cta: createMockAction(),
      text: "Accept",
      icon: IconNames.check,
      type: ButtonTypes.primary,
    },
    negative: {
      cta: createMockAction(),
      text: "Decline",
      icon: IconNames.close,
      type: ButtonTypes.default,
    },
    className: "custom-class",
    borderRadius: 12,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Complete InfoBox Example")).toBeInTheDocument();
    await expect(canvas.getByText("This InfoBox demonstrates all available props.")).toBeInTheDocument();
    const acceptButton = canvas.getByRole("button", { name: "Accept" });
    const declineButton = canvas.getByRole("button", { name: "Decline" });
    const closeButton = canvas.getByTestId("info-box-cta");
    await expect(acceptButton).toBeInTheDocument();
    await expect(declineButton).toBeInTheDocument();
    await expect(closeButton).toBeInTheDocument();
    await userEvent.click(acceptButton);
    await expect(args.positive.cta).toHaveBeenCalled();
    await userEvent.click(declineButton);
    await expect(args.negative.cta).toHaveBeenCalled();
    await userEvent.click(closeButton);
    await expect(args.dismissCallback).toHaveBeenCalled();
  },
};