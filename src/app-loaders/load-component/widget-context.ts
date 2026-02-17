import React, { createContext, useRef } from 'react';

export type WidgetContextType = {
  token: string;
  host: string;
  locationId: string;
  widgetId: string;
};

export type TransporterContext<T> = React.Context<T> & { _instanceData?: T };
export const createTransporterWidgetContext = <T>(value: T): TransporterContext<T> => {
  const ctx: TransporterContext<T> = createContext<T>(value);
  ctx._instanceData = value;
  return ctx;
};
export const WidgetContext = createTransporterWidgetContext<WidgetContextType>({
  host: '',
  locationId: '',
  token: '',
  widgetId: '',
});

export const useWidgetContext = (data?: WidgetContextType) => {
  return useRef<WidgetContextType>(
    data ?? {
      host: '',
      locationId: '',
      token: '',
      widgetId: '',
    },
  );
};
