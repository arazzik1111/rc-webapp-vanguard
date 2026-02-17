import { VerificationPinInputIMask, VerificationPinInputIMaskProps } from "./VerificationPinInputIMask";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/VerificationPinInput/VerificationPinInputIMask",
  component: VerificationPinInputIMask,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: VerificationPinInputIMaskProps = {};

export const VerificationPinInputIMaskStory = (props: VerificationPinInputIMaskProps) => {
  /**
   * Here we can add story specific props
   * */

  return (
    <div>
      <VerificationPinInputIMask {...props}>ImplementME</VerificationPinInputIMask>
    </div>
  );
};
