import { ComingSoonCard, ComingSoonCardProps } from "./ComingSoonCard";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/ComingSoonCard",
  component: ComingSoonCard,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: ComingSoonCardProps = {};

export const ComingSoonCardStory = (props: ComingSoonCardProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <ComingSoonCard {...props}>ImplementME</ComingSoonCard>
    </div>
  );
};
