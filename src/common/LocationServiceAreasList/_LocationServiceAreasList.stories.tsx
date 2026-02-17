import { LocationServiceAreasList, LocationServiceAreasListProps } from "./LocationServiceAreasList";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/LocationServiceAreasList",
  component: LocationServiceAreasList,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: LocationServiceAreasListProps = {};

export const LocationServiceAreasListStory = (props: LocationServiceAreasListProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <LocationServiceAreasList {...props}>ImplementME</LocationServiceAreasList>
    </div>
  );
};
