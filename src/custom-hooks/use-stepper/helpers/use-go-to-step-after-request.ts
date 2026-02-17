// import { useSetupGoToStep } from "./use-step-status";
import { useAppDispatch } from '@custom-hooks/use-app-dispatch';
import { SetupSelector, SetupSliceType, StepsOrFN, UseStepStatusPairs } from '@custom-hooks/use-stepper/helpers/types';
import { useGoToStep } from '@custom-hooks/use-stepper/helpers/use-go-to-step';
import { useStepStatus } from '@custom-hooks/use-stepper/helpers/use-step-status';
import { StepperFn } from '@custom-hooks/use-stepper/types/StepOrFn';
import { ModalService } from '@vanguard/Modal/ModalService';
import { useState } from 'react';

export type StepperDoRequestFn<Steps = unknown> = (skipCheck: boolean, step: Steps) => Promise<void>;
export const ALWAYS_REQUEST_ON_STEP_CHANGE: [number, number] = [1, 2];
/**
 *In this hook we merge the general logic we use in all steps from BPSetup
 * If the step is not dirty and we started the request we do the request
 * and when loading is done we move to nextstep
 *
 * The user also has to possibility to move to the next step without loading
 * */
export const useGoToStepAfterRequest = <T, Steps, RootState>(
  currentStep: Steps,
  nextStep: StepsOrFN<Steps>,
  slice: SetupSliceType<Steps>,
  selector: SetupSelector<RootState>,
  source: string,
  dependency?: UseStepStatusPairs,
  saveFn?: () => Promise<T>,
  showErrorModal: boolean = true,
  passThroughError: boolean = false,
): [boolean, (skipCheck?: boolean, step?: Steps) => void] => {
  dependency = dependency ?? [];
  saveFn = saveFn; // ?? (async () => true);
  const [loading, setLoading] = useState<boolean>(false);
  const [nextStepLoading, setNextStepLoading] = useState<boolean>(false);
  const goToNextStep = useGoToStep<StepsOrFN<Steps>>(slice);
  const [stepStatus, setStepStatus] = useStepStatus(currentStep, dependency, slice, selector);
  const dispatch = useAppDispatch();
  const goToNextStepLogic = async (step: Steps, value?: T) => {
    const stepToGoTo: StepsOrFN<Steps, T> = step ? step : nextStep;
    if (typeof stepToGoTo === 'string') {
      goToNextStep(stepToGoTo);
    } else if (typeof stepToGoTo === 'function') {
      setNextStepLoading(true);
      await (stepToGoTo as StepperFn<Steps>)(value, doRequestAndGoToNextStep);
      setNextStepLoading(false);
    }
  };

  const doRequestAndGoToNextStep: StepperDoRequestFn<Steps> = async (skipCheck: boolean, step: Steps) => {
    if (skipCheck || stepStatus === 'clean') {
      await goToNextStepLogic(step);
      return;
    }
    setLoading(true);

    let result: T | undefined = undefined;
    let hasErr = false;
    let err = null;

    if (saveFn) {
      try {
        result = await saveFn();
        if ((result as any).error) {
          hasErr = true;
          err = result as any;
          setLoading(false);
        }
      } catch {
        setLoading(false);
      }
    }

    if (hasErr && showErrorModal) {
      // show modal error
      hasErr = true;
      err = result as any;
      ModalService.openErrorModal({ err, source: source });
    }

    if (!hasErr) {
      await dispatch(setStepStatus('clean'));
      await goToNextStepLogic(step, result);
      setLoading(false);
    }

    if (passThroughError) {
      await goToNextStepLogic(step, result);
      setLoading(false);
    }
  };
  return [loading, doRequestAndGoToNextStep];
};
