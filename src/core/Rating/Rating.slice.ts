import { ReduxGenerator } from '@helpers/redux-common';
import { createSlice } from '@reduxjs/toolkit';

export type RatingState = {};

const initialState: RatingState = {};

const G = new ReduxGenerator<RatingState>();

const ratingSlice = createSlice({
  name: 'ratingSlice',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

export const RatingSlice = ratingSlice.actions;
export const RatingReducer = ratingSlice.reducer;
