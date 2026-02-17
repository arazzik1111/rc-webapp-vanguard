import { ReduxGenerator } from '@helpers/redux-common';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { MiddleWareConfig } from '../../../../main.store.ts';

type State = {
  selectedColor: string;
  color: string;
};

const initialState: State = {
  selectedColor: '#3366cc',
  color: '#ff0000',
};

const G = new ReduxGenerator<State>();
export const colorPickerSlice = createSlice({
  name: 'colorPicker',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

const RootReducer = combineReducers({
  colorPicker: colorPickerSlice.reducer,
});

export const colorPickerStore = configureStore({
  reducer: RootReducer,
  middleware: MiddleWareConfig,
});

export type ColorPickerRootState = ReturnType<typeof RootReducer>;

export const ColorPickerSlice = colorPickerSlice.actions;
