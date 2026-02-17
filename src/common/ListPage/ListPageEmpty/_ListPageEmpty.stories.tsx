import { ListPageEmpty, ListPageEmptyProps } from "./ListPageEmpty";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/ListPage/ListPageEmpty",
  component: ListPageEmpty,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: ListPageEmptyProps<any> = {} as any;

export const ListPageEmptyStory = (props: ListPageEmptyProps<any>) => {
  /**
   * Here we can add story specific props
   * */

  return (
    <div>
      <ListPageEmpty {...props}>ImplementME</ListPageEmpty>
    </div>
  );
};
