import { ChangePasswordModal, ChangePasswordModalProps } from "./ChangePasswordModal";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { ModalResponse } from "@vanguard/Modal/ModalResponse";

export default SbDecorator({
  title: "BuildingBlocks/ChangePasswordModal",
  component: ChangePasswordModal,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: ChangePasswordModalProps = {
  close: function (r: ModalResponse<boolean>): void {
    throw new Error("Function not implemented.");
  },
};

export const ChangePasswordModalStory = (props: ChangePasswordModalProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <ChangePasswordModal {...props}>ImplementME</ChangePasswordModal>
    </div>
  );
};
