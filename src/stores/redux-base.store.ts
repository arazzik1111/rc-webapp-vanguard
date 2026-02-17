import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { GlobalReducer } from '../global.slice';
import { MiddleWareConfig } from '../main.store';

export const baseReducersConfig = {
  GlobalReducer: GlobalReducer,
};

const baseReducer = combineReducers(baseReducersConfig);

/**
 * Exports
 */
export type BaseState = ReturnType<typeof baseReducer>;
export const baseStore = configureStore({
  reducer: baseReducer,
  middleware: MiddleWareConfig,
});
