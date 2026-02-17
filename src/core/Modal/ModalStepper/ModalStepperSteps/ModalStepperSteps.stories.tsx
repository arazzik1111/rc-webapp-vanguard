import React from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import {ModalStepperSteps, ModalStepperStepsProps} from "./ModalStepperSteps";

export default SbDecorator({
  title: "Vanguard/Modal/ModalStepper/ModalStepper",
  component: ModalStepperSteps,
});

export const BigAssModalStepperStepsStory = (props: ModalStepperStepsProps) => {
  const count = props.stepsCount ?? 5;
  const activeIndex = props.activeIndex ?? 2;
  return <ModalStepperSteps stepsCount={count} activeIndex={activeIndex} />;
};
