import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import { RadioButtonGroup, RadioButtonGroupProps } from "@vanguard/RadioButtonGroup/RadioButtonGroup";
import React from "react";

const opts = [
  {
    labelClassName: "",
    labelText: "Option 1",
    value: "opt-1",
  },
  {
    labelClassName: "",
    labelText: "Option 2",
    value: "opt-2",
  },
];

export default SbDecorator({
  title: "Vanguard/RadioButtonGroup",
  component: RadioButtonGroup,
  extra: {
    argTypes: {
      ...disableControls([
        "formconfig",
        "testId",
        "value",
        "setRadioValueFn",
        "formClassName",
        "name",
      ]),
      options: {
        defaultValue: opts,
      },
      direction: {
        defaultValue: "row",
      },
    },
  },
});

export const RadioButtonGroupStory = (props: RadioButtonGroupProps) => {
  return <RadioButtonGroup {...props} />;
};