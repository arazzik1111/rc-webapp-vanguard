
import { PhoneNumberBase, PhoneNumberBaseProps } from "./PhoneNumberBase";
import React from "react";
import {SbDecorator} from "@test-utils/get-storybook-decorator";


export default SbDecorator({
  title: "Vanguard/PhoneNumber/PhoneNumberBase",
  component: PhoneNumberBase,
});

export const PhoneNumberBaseStory = (props:PhoneNumberBaseProps) => {
  return (
    <div >
        <PhoneNumberBase {...props}>ImplementME</PhoneNumberBase>
    </div>
  );
};

