import { GBPStatus, LocationCard, LocationCardProps } from "./LocationCard";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/LocationCard",
  component: LocationCard,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: LocationCardProps = {
  showImage: false,
  showOnMap: false,
  googleLocation: {
    objectType: "",
  },
  cta: undefined,
};

export const LocationCardStory = (props: LocationCardProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <LocationCard {...props}>ImplementME</LocationCard>
    </div>
  );
};

export const LocationCardStoryAllProps = (props: LocationCardProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <LocationCard {...props} showOnMap={true} showImage={true} />
    </div>
  );
};

export const LocationCardStoryMandatoryProps = (props: LocationCardProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <LocationCard {...props} />
    </div>
  );
};
