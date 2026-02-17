import { persistStore } from 'redux-persist';

const persistors = {};

export const getPersistorFromStore = (store: any) => {
  if (!store) {
    return null;
  }
  // cache the store in memory
  // if we request it again for example in storybook return the same one
  const keys = Object.keys(store.getState()).join('');
  //@ts-ignore
  if (persistors[keys]) {
    //@ts-ignore
    return persistors[keys];
  }
  //@ts-ignore
  persistors[keys] = persistStore(store);
  //@ts-ignore
  return persistors[keys];
};
