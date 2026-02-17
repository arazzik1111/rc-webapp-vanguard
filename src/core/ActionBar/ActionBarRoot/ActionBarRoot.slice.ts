import { ReduxGenerator } from '@helpers/redux-common';
import { createSlice } from '@reduxjs/toolkit';

/**
 * Types
 */
export type ActionBarRootSliceState = {};

/**
 * Initial State
 */
const initialState: ActionBarRootSliceState = {};

/**
 * Slice
 * ---------------------------------------------------------------------------------------------------------------------
 */
const G = new ReduxGenerator<ActionBarRootSliceState>();
export const actionBarRootSlice = createSlice({
  name: 'ActionBarRootSlice',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

export const ActionBarRootSlice = actionBarRootSlice.actions;
export const ActionBarRootReducer = actionBarRootSlice.reducer;
