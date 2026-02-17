import { ListItem, ListItemProps, ListItemType } from "./ListItem";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { mapStorybookActionToProps } from "@test-utils/map-storybook-action-to-props";
import { ListItemsMock } from "@vanguard/ListItems/ListItems.mock";

export default SbDecorator({
  title: "Vanguard/ListItems/ListItem",
  component: ListItem,
  extra: {
    ...disableControls([""]),
  },
});

const mockData: ListItemType<any> = ListItemsMock()[0];

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: ListItemProps<any> = {
  item: mockData,
  hideLeft: false,
  hideRight: false,
};

export const ListItemStory = (props: ListItemProps<any>) => {
  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div>
      <ListItem {...propsMock}>ImplementME</ListItem>
    </div>
  );
};
