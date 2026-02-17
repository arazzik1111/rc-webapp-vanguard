import { formatDate } from '@helpers/format-utils';
import moment from 'moment';

export const datePickerValueParser = (value: unknown): string | undefined => {
  switch (typeof value) {
    case 'undefined':
      return undefined;
    case 'object':
      //TODO DATE OBJECT
      // console.log("value", value);
      if (value === null) {
        return undefined;
      }

      if (moment.isMoment(value)) {
        return formatDate(value, false);
      }

      throw new Error('Object detected');
      return undefined;
    case 'boolean':
      return `${value}`;
    case 'number':
      return `${value}`;
    case 'string':
      return value;
    case 'function':
      return undefined;
    case 'symbol':
      return undefined;
    case 'bigint':
      return `${value}`;
  }
};
