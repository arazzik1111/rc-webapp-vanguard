import { ReduxGenerator } from '@helpers/redux-common';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { MiddleWareConfig } from '../../../../main.store.ts';

type State = {
  textValue: string;
  colorValue: string;
};
const initialState: State = {
  textValue: '',
  colorValue: '#3366cc',
};

const G = new ReduxGenerator<State>();
export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

const RootReducer = combineReducers({
  form: formSlice.reducer,
});

export const formStore = configureStore({
  reducer: RootReducer,
  middleware: MiddleWareConfig,
});

export type FormRootState = ReturnType<typeof RootReducer>;

export const FormSLice = formSlice.actions;
