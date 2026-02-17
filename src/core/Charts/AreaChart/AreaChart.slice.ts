import { ReduxGenerator } from '@helpers/redux-common';
import { createSlice } from '@reduxjs/toolkit';

export type AreaChartState = {};

const initialState: AreaChartState = {};

const G = new ReduxGenerator<AreaChartState>();

const areaChartSlice = createSlice({
  name: 'areaChartSlice',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

export const AreaChartSlice = areaChartSlice.actions;
export const AreaChartReducer = areaChartSlice.reducer;
