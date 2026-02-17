import { UseStepStatusPairs } from '@custom-hooks/use-stepper/helpers/types';
import { useGoToStepAfterRequest } from '@custom-hooks/use-stepper/helpers/use-go-to-step-after-request';
import {
  StepperRootState,
  StepperSLice,
  StepperSteps,
  StepperStepsOrFN,
} from '@custom-hooks/use-stepper/stories/bootstrap/stepper.slice';

export const useStepperGoToStepAfterRequest = <T>(
  currentStep: StepperSteps,
  nextStep: StepperStepsOrFN<T>,
  dependency?: UseStepStatusPairs,
  saveFn?: () => Promise<T>,
  showErrorModal: boolean = true,
): [boolean, (skipCheck?: boolean, step?: StepperStepsOrFN<T>) => void] => {
  return useGoToStepAfterRequest(
    currentStep,
    nextStep,
    StepperSLice,
    (state: StepperRootState) => state.Stepper,
    'STEPPER_STORY_SLICE',
    dependency,
    saveFn,
    showErrorModal,
  );
};
