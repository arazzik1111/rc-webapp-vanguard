import { uuidv4 } from '@helpers/generate-uid';
import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type DispatchObj<T> = [T | undefined, Dispatch<SetStateAction<T | undefined>>];

const map = new Map<string, DispatchObj<unknown>>();

function setState<T>(key: string): DispatchObj<T> {
  if (!key) key = uuidv4();
  const state = React.useState<T>();
  map.set(key, state);
  return state;
}

function getState<T>(key: string): DispatchObj<T> {
  if (!key) key = uuidv4();
  return map.get(key) as DispatchObj<T>;
}

function useDynamicStateFn<T>(): [(key: string) => DispatchObj<T>, (key: string) => DispatchObj<T>] {
  return [setState, getState];
}

export const useDynamicState = useDynamicStateFn;
