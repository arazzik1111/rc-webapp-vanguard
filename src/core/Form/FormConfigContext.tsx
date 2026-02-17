import React, { createContext, useContext } from 'react';

import { FormStatus } from './Form';

type ConfigWithInternal<T> = T & any;

interface FormConfigContextType<T = any> {
  formConfig: ConfigWithInternal<T> | null;
  parentOnChange?: (status: FormStatus<T>) => void;
}

const FormConfigContext = createContext<FormConfigContextType | null>(null);

interface FormConfigProviderProps<T = any> {
  children: React.ReactNode;
  formConfig: ConfigWithInternal<T> | null;
  parentOnChange?: (status: FormStatus<T>) => void;
}

export const FormConfigProvider = <T,>({ children, formConfig, parentOnChange }: FormConfigProviderProps<T>) => {
  return <FormConfigContext.Provider value={{ formConfig, parentOnChange }}>{children}</FormConfigContext.Provider>;
};

export const useFormConfigContext = <T = any,>(): FormConfigContextType<T> | null => {
  const context = useContext(FormConfigContext);
  return context as FormConfigContextType<T> | null;
};
