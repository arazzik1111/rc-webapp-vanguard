import { ListItems, ListItemsProps } from "./ListItems";
import React, { ReactNode } from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { mapStorybookActionToProps } from "@test-utils/map-storybook-action-to-props";
import { ListItemType } from "@vanguard/ListItems/ListItem/ListItem";
import { ListItemsMock } from "@vanguard/ListItems/ListItems.mock";

export default SbDecorator({
  title: "Vanguard/ListItems",
  component: ListItems,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: ListItemsProps<any> = {
  items: [...ListItemsMock()],
};

export const ListItemsStory = (props: ListItemsProps<any>) => {
  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div>
      <ListItems {...propsMock}>ImplementME</ListItems>
    </div>
  );
};
