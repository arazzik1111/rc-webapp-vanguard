import {
  StepperRootState,
  StepperSteps,
  StepperStepsOrFN,
} from '@custom-hooks/use-stepper/stories/bootstrap/stepper.slice';
import { useStepperGoToStepAfterRequest } from '@custom-hooks/use-stepper/stories/bootstrap/use-stepper-go-to-step-after-request';
import { Step } from '@vanguard/Modal/ModalStepper/ModalStepper';
import React from 'react';
import { useSelector } from 'react-redux';

export const useStep1Stepper = (): Step<StepperSteps> => {
  const {} = useSelector((state: StepperRootState) => state.Stepper);
  const CURRENT_STEP: StepperStepsOrFN<any> = 'step1';
  const NEXT_STEP: StepperStepsOrFN = 'step2';

  const [loading, goToStep] = useStepperGoToStepAfterRequest(
    CURRENT_STEP,
    NEXT_STEP,
    [[1, 1]],
    async () => {
      return () => {};
    },
    false,
  );

  return {
    name: CURRENT_STEP,
    component: <div>Step1</div>,
    footerOptions: {
      positive: {
        isLoading: loading,
        text: 'Continue',
        cta: () => {
          goToStep();
        },
      },
    },
  };
};

export const useStep2Stepper = (): Step<StepperSteps> => {
  const { modalId, step } = useSelector((state: StepperRootState) => state.Stepper);

  const CURRENT_STEP: StepperStepsOrFN<any> = 'step2';
  const NEXT_STEP: StepperStepsOrFN = 'step3';

  const [loading, goToStep] = useStepperGoToStepAfterRequest(
    CURRENT_STEP,
    NEXT_STEP,
    [[1, 1]],
    async () => {
      return () => {};
    },
    false,
  );

  return {
    name: CURRENT_STEP,
    component: <div>Step2</div>,
    footerOptions: {
      positive: {
        isLoading: loading,
        text: 'Continue',
        cta: () => {
          goToStep();
        },
      },
    },
  };
};
