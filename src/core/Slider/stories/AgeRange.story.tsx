import React, { useState } from "react";
import { userEvent, within, expect } from "storybook/test";
import { Slider } from "../Slider";
import { Story, Story as SliderStory } from "./_Slider.default";

export const AgeRange: SliderStory = {
  args: {
    value: [18, 65],
    min: 13,
    max: 100,
    step: 1,
    type: "primary",
  },
  render: (args) => {
    const [range, setRange] = useState(args.value as number[]);

    const handleChange = (_: Event | null, newValue: number | number[]) => {
      setRange(newValue as number[]);
    };

    return (
      <div style={{ padding: "20px", width: "400px" }}>
        <div style={{ marginBottom: "16px", fontSize: "14px", color: "#666" }}>
          Age Range: {range[0]} - {range[1]} years
        </div>
        <Slider {...args} value={range} onChange={handleChange} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that range slider renders
    const sliders = canvas.getAllByRole("slider");
    await expect(sliders).toHaveLength(2); // Two thumbs for range

    // Check that display shows initial range
    const display = canvas.getByText(/Age Range:/);
    await expect(display).toBeInTheDocument();

    // Check that initial values are correct
    await expect(display).toHaveTextContent("18");
    await expect(display).toHaveTextContent("65");
  },
};