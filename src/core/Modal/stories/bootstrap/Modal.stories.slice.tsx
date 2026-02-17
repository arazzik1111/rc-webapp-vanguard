import { ReduxGenerator } from '@helpers/redux-common';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { baseReducersConfig } from "@redux-stores/base.store";

type State = {};
const initialState: State = {};

const G = new ReduxGenerator<State>();
export const modalStoriesSlice = createSlice({
  name: 'modalStoriess',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

const RootReducer = combineReducers({
  // ...baseReducersConfig,
  ModalStories: modalStoriesSlice.reducer,
});

export const modalStoriesStore = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type ModalStoriesRootState = ReturnType<typeof RootReducer>;

export const ModalStoriesSlice = modalStoriesSlice.actions;
