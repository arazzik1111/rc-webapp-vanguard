import React, { useState } from "react";
import { AutocompleteWithAnchor } from "../AutocompleteWithAnchor";
import { Input } from "@vanguard/Input/Input";
import { Icon } from "@vanguard/Icon/Icon";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story, createMockOnOpenChange, testOptions } from "./_AutocompleteWithAnchor.default";

export const WithInput: Story = {
  args: {
    onOpenChange: createMockOnOpenChange(),
    autocompleteProps: {
      options: testOptions,
      open: true,
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <AutocompleteWithAnchor
          {...args}
          onOpenChange={(isOpenPopover: boolean) => {
            setIsOpen(isOpenPopover);
            args.onOpenChange?.(isOpenPopover);
          }}
        >
          <Input
            textFieldProps={{
              defaultValue: "Test",
              InputProps: {
                endAdornment: isOpen ? <Icon>{IconNames.caretUp}</Icon> : <Icon>{IconNames.caretDown}</Icon>,
                readOnly: true,
              },
            }}
          />
        </AutocompleteWithAnchor>
      </div>
    );
  },
  play: async ({ canvasElement, args }) => {
    // Add play function if needed for testing
  },
};