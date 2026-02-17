import React from "react";
import { ComponentContainer } from "@vanguard/ComponentContainer/ComponentContainer";
import { Story } from "./_ModalStepper.default";

const steps = [
  {
    name: "step1",
    component: <ComponentContainer testId={"step1"}>Step1</ComponentContainer>,
  },
  {
    name: "step2",
    component: <ComponentContainer testId={"step2"}>Step2</ComponentContainer>,
  },
  {
    name: "step3",
    component: <ComponentContainer testId={"step3"}>Step3</ComponentContainer>,
  },
];

export const ModalStepperBasicStory: Story = {
  args: {
    steps,
  },
};