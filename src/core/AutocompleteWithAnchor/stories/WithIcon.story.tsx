import React from "react";
import { AutocompleteWithAnchor } from "../AutocompleteWithAnchor";
import { Icon } from "@vanguard/Icon/Icon";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story, testOptions } from "./_AutocompleteWithAnchor.default";

export const WithIcon: Story = {
  args: {
    autocompleteProps: {
      options: testOptions,
      open: true,
    },
  },
  render: (args) => (
    <div>
      <AutocompleteWithAnchor {...args}>
        <div style={{ padding: 20 }}>
          <Icon>{IconNames.settings}</Icon>
        </div>
      </AutocompleteWithAnchor>
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    // Add play function if needed for testing
  },
};