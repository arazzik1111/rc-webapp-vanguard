import { LocationCategoriesList, LocationCategoriesListProps } from "./LocationCategoriesList";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/LocationCategoriesList",
  component: LocationCategoriesList,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: LocationCategoriesListProps = {
  categories: { objectType: "" },
};

export const LocationCategoriesListStory = (props: LocationCategoriesListProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <LocationCategoriesList {...props}>ImplementME</LocationCategoriesList>
    </div>
  );
};
