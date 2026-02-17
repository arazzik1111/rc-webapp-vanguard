
import { PhoneNumberPrefix, PhoneNumberPrefixProps } from "./PhoneNumberPrefix";
import React from "react";
import {SbDecorator} from "@test-utils/get-storybook-decorator";


export default SbDecorator({
  title: "Vanguard/PhoneNumber/PhoneNumberPrefix",
  component: PhoneNumberPrefix,
});

export const PhoneNumberPrefixStory = (props:PhoneNumberPrefixProps) => {
  return (
    <div >
        <PhoneNumberPrefix {...props}></PhoneNumberPrefix>
    </div>
  );
};

