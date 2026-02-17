
import { LottieBase, LottieBaseProps } from "./LottieBase";
import React from "react";
import {SbDecorator} from "@test-utils/get-storybook-decorator";


export default SbDecorator({
  title: "Vanguard/LottieAnimationLoader/LottieBase",
  component: LottieBase,
});

export const LottieBaseStory = (props:LottieBaseProps) => {
  return (
    <div >
        <LottieBase {...props}>ImplementME</LottieBase>
    </div>
  );
};

