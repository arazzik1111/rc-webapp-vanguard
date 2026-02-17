import { ReduxGenerator, WithInitialState } from '@helpers/redux-common';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { MiddleWareConfig } from '../../../../../main.store';

type BaseState = { inputBase: string };
type State = BaseState & WithInitialState<BaseState>;
const initialState: State = {
  inputBase: '',
  initialState: {},
  requestInProgress: false,
};

const G = new ReduxGenerator<State>();
export const inputBaseSlice = createSlice({
  name: 'inputBase',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

const RootReducer = combineReducers({
  InputBase: inputBaseSlice.reducer,
});

export const inputBaseStore = configureStore({
  reducer: RootReducer,
  middleware: MiddleWareConfig,
});

export type InputBaseRootState = ReturnType<typeof RootReducer>;

export const InputBaseSlice = inputBaseSlice.actions;
