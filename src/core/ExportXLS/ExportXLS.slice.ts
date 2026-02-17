import { ReduxGenerator } from '@helpers/redux-common';
import { createSlice } from '@reduxjs/toolkit';

export type ExportXLSState = {};

const initialState: ExportXLSState = {};

const G = new ReduxGenerator<ExportXLSState>();

const exportXLSSlice = createSlice({
  name: 'exportXLSSlice',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

export const ExportXLSSlice = exportXLSSlice.actions;
export const ExportXLSReducer = exportXLSSlice.reducer;
