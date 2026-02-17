import { getQueryParam, setQueryParam } from '@helpers/url-params';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useBindQueryParamToState = <T extends string | boolean | number>(
  queryParam: string,
  defaultValue?: T,
): [T | undefined, Dispatch<SetStateAction<T>>] => {
  let typeOfT: 'string' | 'boolean' | 'number' | undefined = undefined;

  const [value, setValue] = useState<T | undefined>(defaultValue);
  const [wasInitialSet, setWasInitialSet] = useState(false);

  switch (typeof value) {
    case 'string':
      typeOfT = 'string';
      break;
    case 'boolean':
      typeOfT = 'boolean';
      break;
    case 'number':
      typeOfT = 'number';
      break;
    default:
      typeOfT = undefined;
  }

  useEffect(() => {
    // Query params are string
    const qp = getQueryParam(queryParam);
    // console.log("qp", typeof value, value);
    if (qp !== undefined) {
      switch (typeof value) {
        case 'string':
          setValue(`${qp}` as T);
          break;
        case 'boolean':
          console.log();
          const isTrue = qp.toLowerCase() === 'true';
          setValue(isTrue as T);

          break;
        case 'number':
          setValue(Number.parseInt(qp) as T);
          break;
        default:
          typeOfT = undefined;
      }
    }
    setWasInitialSet(true);
  }, []);

  useEffect(() => {
    if (value !== undefined && wasInitialSet) {
      setQueryParam(queryParam, `${value}`, 'replace');
    }
  }, [value]);
  return [value, setValue];
};
