import { VerificationPinInput, VerificationPinInputProps } from "./VerificationPinInput";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { classNames } from "@helpers/classNames";
import { alignItemsCenter, dFlex, dFlexRow, pb3, pl3, pt3 } from "@globalStyles";
import { Icon, IconSize } from "@vanguard/Icon/Icon";
import { IconNames } from "@vanguard/Icon/IconNames";

export default SbDecorator({
  title: "BuildingBlocks/VerificationPinInput",
  component: VerificationPinInput,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: VerificationPinInputProps = {
  adornment: undefined,
  pinMask: "",
};

export const VerificationPinInputStory = (props: VerificationPinInputProps) => {
  /**
   * Here we can add story specific props
   * */
  let adornment = (
    <div className={classNames(dFlex, dFlexRow, alignItemsCenter, pt3, pb3, pl3)}>
      <Icon color={"var(--fn-fg-light)"} type={IconSize.large} forceSize={30}>
        {IconNames.google}
      </Icon>
      <Icon color={"var(--fn-fg-light)"} type={IconSize.small}>
        {IconNames.dash}
      </Icon>
    </div>
  );
  return (
    <div>
      <VerificationPinInput {...props} adornment={adornment} pinMask={"000000"} />
    </div>
  );
};
