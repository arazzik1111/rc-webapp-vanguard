import { StepOrFn } from '@custom-hooks/use-stepper/types/StepOrFn';
import { StepperSliceState } from '@custom-hooks/use-stepper/types/StepperSliceState';
import { ReduxGenerator } from '@helpers/redux-common';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export type StepperSteps = 'step1' | 'step2' | 'step3' | 'step4';
export type StepperStepsOrFN<T = any> = StepOrFn<StepperSteps, T>;
type State = {} & StepperSliceState<StepperSteps, 'step1'>;
const initialState: State = {
  step: 'step1',
  initialStep: 'step1',
  isValid: true,
  stepStatus: 'clean',
  modalId: null,
};

const G = new ReduxGenerator<State>();
export const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

const RootReducer = combineReducers({
  Stepper: stepperSlice.reducer,
});

export const stepperStore = configureStore({
  reducer: RootReducer,
});

export type StepperRootState = ReturnType<typeof RootReducer>;

export const StepperSLice = stepperSlice.actions;
