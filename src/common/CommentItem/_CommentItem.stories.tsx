import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { CommentItem, CommentItemProps } from "./CommentItem";

export default SbDecorator({
  title: "BuildingBlocks/CommentItem",
  component: CommentItem,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: CommentItemProps = {
  comment: { objectType: "" },
};

export const CommentItemStory = (props: CommentItemProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <CommentItem {...props}>ImplementME</CommentItem>
    </div>
  );
};
