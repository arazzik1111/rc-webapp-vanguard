import { ReviewsTypesCheckboxGroup, ReviewsTypesCheckboxGroupProps } from "./ReviewsTypesCheckboxGroup";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/ReviewsTypesCheckboxGroup",
  component: ReviewsTypesCheckboxGroup,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: ReviewsTypesCheckboxGroupProps = {};

export const ReviewsTypesCheckboxGroupStory = (props: ReviewsTypesCheckboxGroupProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <ReviewsTypesCheckboxGroup {...props}>ImplementME</ReviewsTypesCheckboxGroup>
    </div>
  );
};
