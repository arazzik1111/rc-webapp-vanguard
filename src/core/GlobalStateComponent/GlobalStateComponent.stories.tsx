
import { GlobalStateComponent, GlobalStateComponentProps } from "./GlobalStateComponent";
import React from "react";
import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import { StoryObj } from "@storybook/react";
import { expect ,waitFor, within} from "@storybook/test";

export default {
  ...SbDecorator({
  title: "vanguard/GlobalStateComponent",
  component: GlobalStateComponent,
    extra: {
      argTypes:{
    ...disableControls([""])
      }
  }
})
};


type Story = StoryObj<typeof GlobalStateComponent>;
export const GlobalStateComponentStory: Story = {
  render: (props:GlobalStateComponentProps) => {
  return (
    <div >
        <GlobalStateComponent {...props}/>
    </div>
  )},
  args: {
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  }

}

