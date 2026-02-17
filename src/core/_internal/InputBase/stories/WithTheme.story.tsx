import React from "react";
import { InputBase } from "@vanguard/_internal/InputBase/InputBase";
import { Story } from "./_InputBase.default";

export const WithTheme: Story = {
  args: {
    theme: "grey",
  },
  render: () => {
    return (
      <div>
        <InputBase label="Input with Grey Theme" placeholder="Enter text here" theme="grey" />
        <InputBase label="Input with Default Theme" placeholder="Enter text here" theme="default" />
      </div>
    );
  },
};