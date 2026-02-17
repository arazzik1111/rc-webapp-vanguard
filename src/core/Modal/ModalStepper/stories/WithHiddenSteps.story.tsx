import React, { useState } from "react";
import { ComponentContainer } from "@vanguard/ComponentContainer/ComponentContainer";
import { ModalStepper } from "../ModalStepper";
import { Story } from "./_ModalStepper.default";

export const WithHiddenSteps: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState<string | undefined>(undefined);
    const steps = [
      {
        name: "visible1",
        component: <ComponentContainer>Visible1</ComponentContainer>,
        footerOptions: {
          positive: {
            cta: () => {
              setCurrentStep("hidden2");
            },
            text: "go to hidden 2",
          },
        },
      },
      {
        name: "thisishidden",
        component: <ComponentContainer>Hidden1</ComponentContainer>,
        isHidden: true,
      },
      {
        name: "hidden2",
        component: <ComponentContainer>Hidden2</ComponentContainer>,
        isHidden: true,
      },
    ];
    return (
      <div>
        <div>{currentStep}</div>
        <ModalStepper
          activeStep={currentStep}
          onStepChange={(idx, name) => {
            setCurrentStep(name);
          }}
          steps={steps}
        />
      </div>
    );
  },
};