import { ReduxGenerator } from '@helpers/redux-common';
import { createSlice } from '@reduxjs/toolkit';

export type DrawerRootState = {};

const initialState: DrawerRootState = {};

const G = new ReduxGenerator<DrawerRootState>();

const drawerRootSlice = createSlice({
  name: 'drawerRootSlice',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

export const DrawerRootSlice = drawerRootSlice.actions;
export const DrawerRootReducer = drawerRootSlice.reducer;
