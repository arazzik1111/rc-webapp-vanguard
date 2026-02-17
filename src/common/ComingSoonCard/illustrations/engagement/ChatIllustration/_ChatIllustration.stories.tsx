import { ChatIllustration, ChatIllustrationProps } from "./ChatIllustration";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/ComingSoonCard/ChatIllustration",
  component: ChatIllustration,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: ChatIllustrationProps = {};

export const ChatIllustrationStory = (props: ChatIllustrationProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <ChatIllustration {...props}>ImplementME</ChatIllustration>
    </div>
  );
};
