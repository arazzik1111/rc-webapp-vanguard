import {Popover, PopoverProps} from "./Popover";
import React from "react";
import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import {Button, ButtonSizes, ButtonTypes} from "@vanguard/Button/Button";
import {IconNames} from "@vanguard/Icon/IconNames";
import {IconSize} from "@vanguard/Icon/Icon";

export default SbDecorator({
  title: "Vanguard/Popover",
  component: Popover,
  extra: {
    argTypes: {
      ...disableControls([
        "children",
      ]),
      message: {
        type: {name: 'string', required: true},
        defaultValue: 'Popover example',
      },
      arrow: {
        defaultValue: true,
      },
      wrapChildren: {
        defaultValue: true,
      },
      position: {
        defaultValue: "bottom"
      },
      interactive: {
        defaultValue: false,
      }
    },
  },
});

export const PopoverStory = (props: PopoverProps) => {
  return (
    <Popover {...props}>
      <Button
        testId={"cta"}
        size={ButtonSizes.small}
        iconLeft={IconNames.edit}
        iconSize={IconSize.small}
        iconColor={"--n500"}
        type={ButtonTypes.default}
      />
    </Popover>
  );
};

