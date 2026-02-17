import { StepStatus } from '@custom-hooks/use-stepper/helpers/types';

export type StepperSliceState<AllSteps extends string, InitialStep extends AllSteps> = {
  step: AllSteps;
  modalId: string | null;
  isValid: boolean;
  initialStep: InitialStep;
  stepStatus: StepStatus;
};
