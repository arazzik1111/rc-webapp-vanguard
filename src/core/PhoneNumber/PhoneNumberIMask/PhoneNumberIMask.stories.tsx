
import { PhoneNumberIMask, PhoneNumberIMaskProps } from "./PhoneNumberIMask";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { mapStorybookActionToProps } from "@test-utils/map-storybook-action-to-props";

export default SbDecorator({
  title: "Vanguard/PhoneNumber/PhoneNumberIMask",
  component: PhoneNumberIMask,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories 
 * If the storybook user did not add anything this will be chosen 
 * */
const defaultProps: PhoneNumberIMaskProps = {
  // onChange: () => { },
  name: ""
};


export const PhoneNumberIMaskStory = (props: PhoneNumberIMaskProps) => {

  /**
  * Here we can add story specific props
  * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div >
      <PhoneNumberIMask {...propsMock}>ImplementME</PhoneNumberIMask>
    </div>
  );
};

