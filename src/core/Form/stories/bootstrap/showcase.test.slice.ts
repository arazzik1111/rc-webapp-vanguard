import { ReduxGenerator } from '@helpers/redux-common';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { MiddleWareConfig } from '../../../../main.store.ts';

type ShowcaseState = {
  colorValue: string;
  datePickerValue: number;
  inputEmailValue: string;
  inputNumberValue: number;
  inputPasswordValue: string;
  inputTextValue: string;
  phoneNumberValue: string;
  // Add new form element states here in alphabetical order
};

const initialState: ShowcaseState = {
  colorValue: '#3366cc',
  datePickerValue: 1705276800, // Unix timestamp for 2024-01-15
  inputEmailValue: 'user@example.com',
  inputNumberValue: 42,
  inputPasswordValue: 'secretPassword123',
  inputTextValue: 'Sample text input',
  phoneNumberValue: '9876543210',
  // Add new form element initial values here
};

const G = new ReduxGenerator<ShowcaseState>();
export const showcaseSlice = createSlice({
  name: 'showcase',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

const RootReducer = combineReducers({
  showcase: showcaseSlice.reducer,
});

export const showcaseStore = configureStore({
  reducer: RootReducer,
  middleware: MiddleWareConfig,
});

export type ShowcaseRootState = ReturnType<typeof RootReducer>;
export const ShowcaseSlice = showcaseSlice.actions;
