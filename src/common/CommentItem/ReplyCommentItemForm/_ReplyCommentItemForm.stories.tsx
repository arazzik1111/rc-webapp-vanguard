import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { ReplyCommentItemForm, ReplyCommentItemFormProps } from "./ReplyCommentItemForm";

export default SbDecorator({
  title: "BuildingBlocks/CommentItem/ReplyCommentItemForm",
  component: ReplyCommentItemForm,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: ReplyCommentItemFormProps = {};

export const ReplyCommentItemFormStory = (props: ReplyCommentItemFormProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <ReplyCommentItemForm {...props}>ImplementME</ReplyCommentItemForm>
    </div>
  );
};
