// Corrected function to properly handle underscores in parent keys and ensure correct query formation

import { ListPageCheckboxes } from '@common/ListPage/ListPage';
import { LinkBetweenQueryParamAndReduxState } from '@custom-hooks/use-bind-query-param-to-redux-state';
import moment from 'moment';

const findFilter = (
  checkBoxFilters: LinkBetweenQueryParamAndReduxState[] | { 0: Record<number, LinkBetweenQueryParamAndReduxState> },
  parent: string,
  filterKey: string,
) => {
  if (Array.isArray(checkBoxFilters)) {
    return checkBoxFilters.find((x) => x.reducerKey === `filters.${parent}.${filterKey}`);
  } else {
    for (const keyZero in checkBoxFilters) {
      //@ts-ignore
      const checkBoxFiltersZero = checkBoxFilters[keyZero];

      for (const key in checkBoxFiltersZero) {
        const value: LinkBetweenQueryParamAndReduxState = checkBoxFiltersZero[key];
        if (value && value.reducerKey === `filters.${parent}.${filterKey}`) {
          return value;
        }
      }
    }
    // return values.find((x) => x.reducerKey === `filters.${parent}.${key}`);
  }
};

export const odataOperators: string[] = [
  'eq', // equals
  'ne', // not equal
  'gt', // greater than
  'ge', // greater than or equal to
  'lt', // less than
  'le', // less than or equal to
  'and', // logical and
  'or', // logical or
  'not', // logical negation
  'add', // addition
  'sub', // subtraction
  'mul', // multiplication
  'div', // division
  'mod', // modulo
  'contains', // substring of
  'startswith', // starts with
  'endswith', // ends with
  'length', // string length
  'indexof', // index of string
  'substring', // substring
  'tolower', // to lower case
  'toupper', // to upper case
  'trim', // trim whitespace
  'concat', // concatenate
  'year', // year part of a date
  'month', // month part of a date
  'day', // day part of a date
  'hour', // hour part of a time
  'minute', // minute part of a time
  'second', // second part of a time
  'fractionalseconds', // fractional seconds of a time
  'date', // date part of a datetime
  'time', // time part of a datetime
  'totaloffsetminutes', // timezone offset in minutes
  'now', // current date and time
  'maxdatetime', // maximum datetime value
  'mindatetime', // minimum datetime value
  'totalseconds', // total seconds
  'round', // round to nearest number
  'floor', // round down to nearest number
  'ceiling', // round up to nearest number
];

interface InputData {
  [key: string]: boolean | string | InputData | { [key: string]: boolean };
}

const wrapKey = (key?: string | boolean): string => {
  if (!key) {
    return '';
  }
  if (key !== 'true' && key !== 'false') {
    key = `'${key}'`;
  }

  return key;
};

const lookupInFilters = (
  parent: string,
  key: string,
  value: string | boolean,
  checkBoxFilters?: LinkBetweenQueryParamAndReduxState[],
) => {
  if (!checkBoxFilters) {
    return value;
  }
  const filter = findFilter(checkBoxFilters, parent, key);

  return filter?.queryValue ?? value;
};
const isParentKeyExcluded = (
  parentKey?: string,
  key?: string,
  operator: string = ' eq',
  value: string | boolean = 'true',
) => {
  let spacer = ' ';
  const validParentKey = parentKey && !parentKey.startsWith('_');
  value = wrapKey(value);
  key = wrapKey(key);

  if ((value === 'true' || value === 'false') && validParentKey) {
    value = '';
    spacer = '';
  }
  return `${validParentKey ? `${parentKey}${operator} ${key}${spacer}${value}` : `${key}${operator} ${value}`}`;
};
export const convertToODataQuery = (input: InputData, checkBoxFilters?: ListPageCheckboxes[]): string => {
  function convertNested(obj: InputData, parentKey?: string): string[] {
    if (!obj) {
      return [];
    }

    return Object.entries(obj).flatMap(([key, value]) => {
      if (typeof value === 'boolean' && value) {
        // Exclude parent key if it starts with an underscore
        // @ts-ignore
        value = lookupInFilters(parentKey ?? '', key, value, checkBoxFilters);
        if (value && value !== 'true') {
          // @ts-ignore
          key = value;
          value = '';
        }
        return [isParentKeyExcluded(parentKey, key, ' eq', value as any)];
      } else if (typeof value === 'string') {
        const momentValue = moment(value);
        if (momentValue.isValid()) {
          if (key === 'le') {
            value = momentValue.add(1, 'day').format('YYYY-MM-DD');
            key = 'lt';
          }
        }
        let operator = ' eq';
        if (odataOperators.includes(key ?? '')) {
          operator = '';
        }
        // Corrected to include eq for string comparison
        // return [`${parentKey ? `${parentKey} ` : ""}${key}${operator} '${value}'`];
        return [isParentKeyExcluded(parentKey, key, operator, value)];
      } else if (typeof value === 'object') {
        if (key === 'and' || key === 'or') {
          const subQueries = convertNested(value, parentKey);
          return subQueries.length > 1 ? [`(${subQueries.join(` ${key} `)})`] : subQueries;
        } else {
          const subQueries = convertNested(value, key);
          return subQueries.length > 1 ? [`(${subQueries.join(' or ')})`] : subQueries;
        }
      }
      return [];
    });
  }

  const queries = convertNested(input);
  return queries.join(' and ');
};
