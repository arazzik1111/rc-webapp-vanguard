import { ReduxGenerator } from '@helpers/redux-common';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

type State = { avatarCheckbox: boolean };
const initialState: State = {
  avatarCheckbox: false,
};

const G = new ReduxGenerator<State>();
export const avatarCheckBoxSlice = createSlice({
  name: 'avatar-checkbox',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

const RootReducer = combineReducers({
  AvatarCheckBox: avatarCheckBoxSlice.reducer,
});

export const avatarCheckBoxStore = configureStore({
  reducer: RootReducer,
});

export type AvatarCheckBoxRootState = ReturnType<typeof RootReducer>;

export const AvatarCheckBoxSlice = avatarCheckBoxSlice.actions;
