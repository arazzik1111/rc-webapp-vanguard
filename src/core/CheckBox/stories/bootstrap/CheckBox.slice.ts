import { ReduxGenerator, WithInitialState } from '@helpers/redux-common';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { baseReducersConfig } from "@redux-stores/base.store";

type BaseState = { checkbox: boolean };
type State = BaseState & WithInitialState<BaseState>;
const initialState: State = {
  checkbox: false,
  initialState: {},
  requestInProgress: false,
};

const G = new ReduxGenerator<State>();
export const checkBoxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

const RootReducer = combineReducers({
  // ...baseReducersConfig,
  CheckBox: checkBoxSlice.reducer,
});

export const checkBoxStore = configureStore({
  reducer: RootReducer,
});

export type CheckBoxRootState = ReturnType<typeof RootReducer>;

export const CheckBoxSlice = checkBoxSlice.actions;
