import { ReduxGenerator } from '@helpers/redux-common';
import { createSlice } from '@reduxjs/toolkit';

/**
 * Setup for slice
 * */

export type StepperState = {
  step: string;
  modalId: string | null;
  isValid: boolean;
  stepStatus: StepStatus;
  [key: string]: any; //TODO: This is causing type problems. Comment it to see how it affects the code
};

const initialState: StepperState = {
  step: '',
  modalId: null,
  isValid: true,
  stepStatus: 'clean',
};
const G = new ReduxGenerator<StepperState>();

const Slice = createSlice({
  name: 'typeGeneratingSliceNotToBeUSedAnywhereElse',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

const SetupSlice = Slice.actions;

/**
 * Other types
 * */
export type UseStepStatusPairs = Array<[unknown, unknown]>;
export type StepStatus = 'dirty' | 'clean';
export type SetupSelector<RootState> = (state: RootState) => any;
export type SetupSliceType<Steps> = typeof SetupSlice;

export type StepsOrFN<Steps, T = unknown> = Steps | ((data?: T) => void);
