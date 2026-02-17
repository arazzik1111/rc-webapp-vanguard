import { ModalStepper, ModalStepperProps, Step } from "./ModalStepper";
import React, { useState } from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ComponentContainer } from "@vanguard/ComponentContainer/ComponentContainer";
import { Modal } from "@vanguard/Modal/Modal";

export default SbDecorator({
  title: "Vanguard/Modal/ModalStepper",
  component: ModalStepper,
});

export const ModalStepperStory = (props: ModalStepperProps) => {
  return (
    <div>
      <ModalStepper {...props}>ImplementME</ModalStepper>
    </div>
  );
};

export const ModalStepperBasicStory = (props: ModalStepperProps) => {
  const steps: Step[] = [
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

  return <ModalStepper steps={steps} />;
};

export const WithHiddenSteps = () => {
  const [currentStep, setCurrentStep] = useState<string | undefined>(undefined);
  const steps: Step[] = [
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
};

export const WithAMixOfVisibleAndHidden = () => {
  const steps: Step[] = [
    {
      name: "hidden1",
      component: <ComponentContainer>Hidden1</ComponentContainer>,
      isHidden: true,
    },
    {
      name: "visible1",
      component: <ComponentContainer>Visible1</ComponentContainer>,
    },
    {
      name: "visible2",
      component: <ComponentContainer>Visible2</ComponentContainer>,
    },
    {
      name: "hidden2",
      component: <ComponentContainer>Hidden2</ComponentContainer>,
      isHidden: true,
    },
    {
      name: "visible3",
      component: <ComponentContainer>Visible3</ComponentContainer>,
    },
    {
      name: "hidden3",
      component: <ComponentContainer>Hidden3</ComponentContainer>,
      isHidden: true,
    },
    {
      name: "visible4",
      component: <ComponentContainer>Visible4</ComponentContainer>,
    },
    {
      name: "visible5",
      component: <ComponentContainer>Visible5</ComponentContainer>,
    },
    {
      name: "hidden4",
      component: <ComponentContainer>Hidden4</ComponentContainer>,
      isHidden: true,
    },
    {
      name: "hidden5",
      component: <ComponentContainer>Hidden5</ComponentContainer>,
      isHidden: true,
    },
    {
      name: "hidden6",
      component: <ComponentContainer>Hidden6</ComponentContainer>,
      isHidden: true,
    },
  ];
  return <ModalStepper steps={steps} />;
};

export const ModalStepperWithFirstHidden = () => {
  const steps: Step[] = [
    {
      name: "hidden1",
      component: <ComponentContainer>Hidden1</ComponentContainer>,
      isHidden: true,
    },
    {
      name: "visible1",
      component: <ComponentContainer>Visible1</ComponentContainer>,
      isHidden: true,
    },
    {
      name: "visible2",
      component: <ComponentContainer>Visible2</ComponentContainer>,
    },
    {
      name: "hidden2",
      component: <ComponentContainer>Hidden2</ComponentContainer>,
      isHidden: true,
    },
    {
      name: "visible3",
      component: <ComponentContainer>Visible3</ComponentContainer>,
    },
    {
      name: "hidden3",
      component: <ComponentContainer>Hidden3</ComponentContainer>,
      isHidden: true,
    },
    {
      name: "visible4",
      component: <ComponentContainer>Visible4</ComponentContainer>,
    },
    {
      name: "visible5",
      component: <ComponentContainer>Visible5</ComponentContainer>,
    },
    {
      name: "hidden4",
      component: <ComponentContainer>Hidden4</ComponentContainer>,
      isHidden: true,
    },
    {
      name: "hidden5",
      component: <ComponentContainer>Hidden5</ComponentContainer>,
      isHidden: true,
    },
    {
      name: "hidden6",
      component: <ComponentContainer>Hidden6</ComponentContainer>,
      isHidden: true,
    },
  ];

  return (
    <ModalStepper
      steps={steps}
      onStepChange={(value, name) => {
        console.log("Value", value, name);
      }}
    />
  );
};

export const ModalStepperBottomVariant = () => {
  const commponentStyle = {
    width: 400,
    height: 400,
    border: "1px solid black",
  }

  const steps: Step[] = [
    {
      name: "visible1",
      component: <ComponentContainer style={commponentStyle}>Visible1</ComponentContainer>,
    },
    {
      name: "visible2",
      component: <ComponentContainer style={commponentStyle}>Visible2</ComponentContainer>,
    },
    {
      name: "visible3",
      component: <ComponentContainer style={commponentStyle}>Visible3</ComponentContainer>,
    }
  ];

  return (
      <Modal>
        <ModalStepper
            steps={steps}
            variant={"bottom"}
            onStepChange={(value, name) => {
              console.log("Value", value, name);
            }}
        />
      </Modal>
  );
}
