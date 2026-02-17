import { InfoIcon, InfoIconProps } from "./InfoIcon";
import React from "react";
import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import {IconSize} from "@vanguard/Icon/Icon";

export default SbDecorator({
  title: "BuildingBlocks/InfoIcon",
  component: InfoIcon,
  extra: {
    argTypes: {
      message: {
        name: 'message',
        type: {name: 'string', required: true},
        defaultValue: 'InfoIcon example',
      },
      size: {
        defaultValue: IconSize.small
      }
    },
  },
});

export const InfoIconStory = (props: InfoIconProps) => {
  return (
    <div>
        <InfoIcon {...props} />
    </div>
  );
};

