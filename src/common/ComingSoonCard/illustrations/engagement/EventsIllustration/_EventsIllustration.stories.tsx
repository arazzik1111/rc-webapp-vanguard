import { EventsIllustration, EventsIllustrationProps } from "./EventsIllustration";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/ComingSoonCard/EventsIllustration",
  component: EventsIllustration,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: EventsIllustrationProps = {};

export const EventsIllustrationStory = (props: EventsIllustrationProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <EventsIllustration {...props}>ImplementME</EventsIllustration>
    </div>
  );
};
