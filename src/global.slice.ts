import { ReduxGenerator } from '@helpers/redux-common';
import { createSlice } from '@reduxjs/toolkit';

export type GlobalState = {
  id?: string;
  jwt?: string;
  languageCode?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  currency?: string;
  locale?: string;
  isFreeUser?: boolean;
  subscriptionsProducts?: string;
  hasPaidSubscription?: boolean;
  supportSystem?: string;
  apiUserId?: string;
  isLoaded: boolean;
};

const initialState: GlobalState = {
  id: undefined,
  jwt: undefined,
  languageCode: undefined,
  username: undefined,
  firstname: undefined,
  lastname: undefined,
  currency: 'EUR',
  locale: 'de-DE',
  isFreeUser: undefined,
  subscriptionsProducts: undefined,
  hasPaidSubscription: undefined,
  supportSystem: undefined,
  apiUserId: undefined,
  isLoaded: false,
};

const G = new ReduxGenerator<GlobalState>();
export const globalSlice = createSlice({
  name: 'GlobalSlice',
  initialState,
  reducers: {
    ...G.genAll(initialState),
  },
});

export const GlobalSlice = globalSlice.actions;
export const GlobalReducer = globalSlice.reducer;
