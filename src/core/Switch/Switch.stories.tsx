import { Switch, SwitchProps } from "./Switch";
import React, { useState } from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "Vanguard/Switch",
  component: Switch,
  extra: {
    argTypes: {
      ...disableControls([
        "labelClassName",
        "onChange",
        "value",
      ]),
      children: {
        name: "Label",
        defaultValue: "Switch example",
      },
      size: {
        defaultValue: "big",
      },
      labelPos: {
        defaultValue: "right",
      },
    },
  },
});

export const CheckBoxStory = (props: SwitchProps) => {
  return <Switch {...props} />;
};

export const LoadingSwitchStory = (props: SwitchProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  return <Switch
    {...props}
    size={"big"}
    loading={loading}
    onChange={() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 12000);
    }}
  />;
};
