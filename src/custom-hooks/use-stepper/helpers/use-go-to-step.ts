import { useAppDispatch } from '@custom-hooks/use-app-dispatch';
import { SetupSliceType } from '@custom-hooks/use-stepper/helpers/types';

export const useGoToStep = <Steps>(slice: SetupSliceType<Steps>) => {
  const dispatch = useAppDispatch();
  const { setStep } = slice;

  return (step: Steps) => {
    if (typeof step === 'string') {
      dispatch(setStep(step));
    } else {
      console.warn('A function step has beep passed to useGoToStep hook this has no effect anf could be a bug', step);
    }
  };
};
