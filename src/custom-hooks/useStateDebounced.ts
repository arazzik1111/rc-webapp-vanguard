import { debounce } from '@helpers/debounce';
import { Dispatch, SetStateAction, useState } from 'react';

export const useStateDebounce = <S>(
  initialState: S | (() => S),
  debounceTimeout = 100,
): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState<S>(initialState);

  return [state, debounce(setState, debounceTimeout)];
};
