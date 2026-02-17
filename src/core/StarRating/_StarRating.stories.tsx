import React, { useState } from "react";
import { StarRating, StarRatingProps } from "@vanguard/StarRating/StarRating";
import { StoryObj } from "@storybook/react/*";
import { expect, fireEvent, within } from "storybook/test";
import { SbDecorator } from "@test-utils/get-storybook-decorator.tsx";

export default {
  ...SbDecorator({
    title: "Vanguard/StarRating",
    component: StarRating,
  }),
};

type Story = StoryObj<typeof StarRating>;

export const StarRatingStory: Story = {
  args: {
    size: 32,
    color: "--p800",
    value: 3.2,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const findStar = async (index: number) => {
      return await canvas.findByTestId(`star-${index}`);
    };

    for (let i = 0; i < 5; i++) {
      const star = await findStar(i);
      expect(star).toBeInTheDocument();
      if (i < 3) expect(star).toBeChecked();
      else if (i === 3) expect(star).toBePartiallyChecked();
      else expect(star).not.toBeChecked();
    }
  },
};

export const StarRatingEnabledStory: Story = {
  args: {
    size: 32,
    value: 0,
    readonly: false,
    step: 1,
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);

    function onChange({ value }: { value: number }) {
      setValue(value);
    }

    return <StarRating {...args} onChange={onChange} value={value} />;
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const findStar = async (index: number) => {
      return await canvas.findByTestId(`star-${index}`);
    };

    const star3 = await findStar(2);
    await fireEvent.click(star3, {
      clientX: 105,
      currentTarget: star3,
    });

    expect(canvas.getByTestId("star-rating").getAttribute("data-rating")).toBe("3");

    for (let i = 0; i < 5; i++) {
      const star = await findStar(i);
      expect(star).toBeInTheDocument();
      if (i < 3) expect(star).toBeChecked();
      else expect(star).not.toBeChecked();
    }
  },
};
