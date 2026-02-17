import { InfoIconModal, InfoIconModalProps } from "./InfoIconModal";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/InfoIcon/InfoIconModal",
  component: InfoIconModal,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: InfoIconModalProps = {};

export const InfoIconModalStory = (props: InfoIconModalProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <InfoIconModal {...props}>ImplementME</InfoIconModal>
    </div>
  );
};
