import { ActionCardAction, ActionCardActionProps } from "./ActionCardAction";
import React from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { StoryObj } from "@storybook/react";
import { IconNames } from "@vanguard/Icon/IconNames";
import { userEvent, within, expect } from "storybook/test";
import { wait } from "@helpers/wait";

export default {
  ...SbDecorator({
    title: "Vanguard/ActionCard/ActionCardActions/ActionCardAction",
    component: ActionCardAction,
    extra: {
      args: {
        testId: "action",
      },
    },
  }),
};

type STORY = StoryObj<typeof ActionCardAction>;

export const Basic: STORY = {
  args: {
    label: "Test label",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const labelText = canvas.getByText("Test label");
    await expect(labelText).toBeVisible();
  },
};

export const WithIconRight: STORY = {
  args: {
    label: "Test label",
    iconRight: IconNames.add,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const iconRight = await canvas.findByTestId("action_iconRight");
    await expect(iconRight).toBeVisible();
  },
};

export const WithIconRightAndLoading: STORY = {
  args: {
    label: "Test label",
    loading: true,
    iconRight: IconNames.add,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loader = canvas.getByRole("spinbutton"); // Adjust testId for loader spinner
    await expect(loader).toBeVisible();
  },
};

export const WithIconLeft: STORY = {
  args: {
    label: "Test label",
    iconLeft: IconNames.add,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const iconLeft = await canvas.findByTestId("action_iconLeft");
    await expect(iconLeft).toBeVisible();
  },
};

export const WithIconLeftLoading: STORY = {
  args: {
    label: "Test label",
    iconLeft: IconNames.add,
    loading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loader = canvas.getByRole("spinbutton");
    await expect(loader).toBeVisible();
  },
};

export const WithBothIcons: STORY = {
  args: {
    label: "Test label",
    iconRight: IconNames.add,
    iconLeft: IconNames.add,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const iconRight = await canvas.findByTestId("action_iconRight");
    const iconLeft = await canvas.findByTestId("action_iconLeft");
    await expect(iconRight).toBeVisible();
    await expect(iconLeft).toBeVisible();
  },
};

export const WithBothIconsAndLoading: STORY = {
  args: {
    label: "Test label",
    iconRight: IconNames.add,
    iconLeft: IconNames.add,
    loading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loader = canvas.getByRole("spinbutton");
    const iconRight = canvas.queryByTestId("action_iconRight");
    const iconLeft = await canvas.findByTestId("action_iconLeft");
    await expect(loader).toBeVisible();
    await expect(iconRight).toBeNull();
    await expect(iconLeft).toBeVisible();
  },
};
