import { PopoverModal, PopoverModalProps } from "./PopoverModal";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { mapStorybookActionToProps } from "@test-utils/map-storybook-action-to-props";

export default SbDecorator({
  title: "vanguard/PopoverModal",
  component: PopoverModal,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: PopoverModalProps = {
  content: "",
  isOpen: false,
};

export const PopoverModalStory = (props: PopoverModalProps) => {
  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div>
      <PopoverModal {...propsMock}>ImplementME</PopoverModal>
    </div>
  );
};
