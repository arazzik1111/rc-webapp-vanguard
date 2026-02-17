import { useAppDispatch } from '@custom-hooks/use-app-dispatch';
import { SetupSelector, SetupSliceType, StepStatus, UseStepStatusPairs } from '@custom-hooks/use-stepper/helpers/types';
import { objectsAreDifferent } from '@helpers/objects-are-different';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

// This is used to force the request to be made, even if there are no changes/depencencies on the page
export const FORCE_DIRTY_STATE = [1, 2] as any;

/**
 * The idea of this hook is to receive an array of pairs
 * When any of the elements in that array changes we use an useEffect to detect that
 * WE then check if there is any difference between the element pairs if there is we set the status to dirty
 * if not we set it to clean
 * EG:
 * [[11],[22]] -> clean status
 * [[11],[23]] -> dirty status
 * */
export const useStepStatus = <Steps = '', Selector = null>(
  currentStep: Steps,
  pairs: UseStepStatusPairs,
  slice: SetupSliceType<Steps>,
  selector: SetupSelector<Selector>,
): ['clean' | 'dirty', ActionCreatorWithPayload<any>] => {
  const dispatch = useAppDispatch();
  const { stepStatus, step } = useSelector(selector);
  const { setStepStatus } = slice;

  const deeps = useMemo(() => pairs.flat(), [pairs]);

  const checkStep = () => {
    // This being registered inside the main stepper
    // would want to activate on every step so we restrict it to current one only
    if (step !== currentStep) {
      return false;
    }
    // Nothing set we consider the state clean
    if (!pairs || pairs.length === 0) {
      dispatch(setStepStatus('clean'));
    }

    let status: StepStatus = 'clean';

    // pairs must me 2 no more no less if that is not the case we skip over invalid data
    for (const pair of pairs) {
      if (pair.length !== 2) {
        continue;
      }
      if (objectsAreDifferent(pair[0], pair[1])) {
        status = 'dirty';
        break;
      }
    }
    dispatch(setStepStatus(status));
  };

  useEffect(() => {
    checkStep();
  }, [deeps]);

  return [stepStatus, setStepStatus];
};
