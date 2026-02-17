import React from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ModalStepperStep, ModalStepperStepProps } from "./ModalStepperStep";

export default SbDecorator({
  title: "Vanguard/Modal/ModalStepper/ModalStepperStep",
  component: ModalStepperStep,
});

export const ModalStepperStepActive = (props: ModalStepperStepProps) => {
  return (
    <div>
      <ModalStepperStep isActive={true} {...props} />
    </div>
  );
};

export const ModalStepperStepInactive = (props: ModalStepperStepProps) => {
  return (
    <div>
      <ModalStepperStep isActive={false} {...props} />
    </div>
  );
};
