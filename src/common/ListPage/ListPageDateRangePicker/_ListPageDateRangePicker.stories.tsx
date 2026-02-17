import { ListPageDateRangePicker, ListPageDateRangePickerProps } from "./ListPageDateRangePicker";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/ListPage/ListPageDateRangePicker",
  component: ListPageDateRangePicker,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: ListPageDateRangePickerProps = {};

export const ListPageDateRangePickerStory = (props: ListPageDateRangePickerProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <ListPageDateRangePicker {...props}>ImplementME</ListPageDateRangePicker>
    </div>
  );
};
