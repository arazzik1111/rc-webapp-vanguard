import React from "react";
import { Avatar } from "../Avatar";
import { Text, TextTypes } from "@vanguard/Text/Text";
import { Story, testIcon, testImageUrl, testName, sizes } from "./_Avatar.default";

export const SizesAndVariations: Story = {
  args: {
    icon: testIcon,
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      {sizes.map((size) => (
        <div key={size}>
          {[false, true].map((greyScale) => (
            <div key={size + greyScale}>
              <Text type={TextTypes.heading3}>
                {size}
                {greyScale ? " grey scale" : ""}
              </Text>

              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Avatar {...args} size={size} greyScale={greyScale} />
                <Avatar {...args} clearIcon={"true"} size={size} greyScale={greyScale} />
                <Avatar
                  {...args}
                  clearIcon={"true"}
                  icon={undefined}
                  image={testImageUrl}
                  size={size}
                  greyScale={greyScale}
                />
                <Avatar {...args} name={testName} icon={undefined} size={size} greyScale={greyScale} />
                <Avatar {...args} name={`${testName} Longer`} icon={undefined} size={size} greyScale={greyScale} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};