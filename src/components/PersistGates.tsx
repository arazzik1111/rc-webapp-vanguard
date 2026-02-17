import { EnhancedStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { baseStore } from '../stores/redux-base.store';
import { getPersistorFromStore } from './get-persistor-from-store';

export const PersistGates = ({
  children,
  customStore,
  shouldPersist,
}: {
  children: React.ReactNode;
  customStore?: EnhancedStore;
  shouldPersist?: boolean;
}) => {
  const persistor = customStore ? getPersistorFromStore(customStore) : null;
  if (persistor && customStore && shouldPersist) {
    return (
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={baseStore}>
          <Provider store={customStore}>{children}</Provider>
        </Provider>
      </PersistGate>
    );
  } else if (customStore) {
    return <Provider store={customStore}>{children}</Provider>;
  }
  return (
    <Provider store={baseStore}>
      <PersistGate loading={null} persistor={getPersistorFromStore(baseStore)}>
        {children}
      </PersistGate>
    </Provider>
  );
};
