import { formatDateForComparison } from '@vanguard/DateRangePicker/date-range-picker-utils/date-range-picker-utils';
import moment, { Moment } from 'moment';

export const addDays = function (date: Date, days: number = 0) {
  date.setDate(date.getDate() + days);
  return date;
};

export const datesAreDifferent = (d1?: Date | Moment, d2?: Date | Moment): boolean => {
  if ((!d1 && !!d2) || (!!d2 && !d1)) {
    return false;
  }
  if (!d1 && !d2) {
    return false;
  }

  return formatDateForComparison(d1) !== formatDateForComparison(d2);
};

export const dateIsAfter = (
  d1: Date | Moment | string | undefined,
  d2: Date | Moment | string | undefined,
): boolean => {
  return !dateIsBefore(d1, d2);
};

export const dateIsBefore = (
  d1: Date | Moment | string | undefined,
  d2: Date | Moment | string | undefined,
): boolean => {
  if (!d1 && !!d2) {
    return true;
  }
  if (!!d1 && !d2) {
    return false;
  }
  return moment(d2).isAfter(d1);
};

export const dateIsSameDay = (
  d1: Date | Moment | string | undefined,
  d2: Date | Moment | string | undefined,
): boolean => {
  return moment(d1).format('YYYY-MM-DD') === moment(d2).format('YYYY-MM-DD');
};

export const formatForStore = (date: Date | Moment): string => {
  return moment(date).format('YYYY-MM-DDTHH:mm:ss');
};

export const stringToDate = (date: string): Date => {
  return moment(date).toDate();
};

export const convertToMomentDate = (timestamp: number | undefined): moment.Moment | undefined => {
  if (typeof timestamp === 'undefined') {
    return undefined;
  }

  // Check if the timestamp is in milliseconds or seconds
  const isMilliseconds = timestamp.toString().length > 10;
  return isMilliseconds ? moment(timestamp) : moment.unix(timestamp);
};

export const convertToMomentDateWithTime = (timestamp: number | undefined, time?: string): moment.Moment => {
  const timestampConverted = `${convertToMomentDate(timestamp)?.format('YYYY-MM-DD')} ${time}`;
  return moment(timestampConverted, 'YYYY-MM-DD HH:mm:ss');
};

export const getBackedDateFormat = (date?: string | null | Date | Moment | number) => {
  if (date === null) date = undefined;
  const dateMoment = moment(date);
  return moment(dateMoment).utc().local().second(0).format('YYYY-MM-DD HH:mm:ss');
};

export const getBackedDateFormatUtc = (date?: string | null | Date | Moment | number) => {
  if (date === null) date = undefined;
  const dateMoment = moment(date);
  return moment(dateMoment).utc().second(0).format('YYYY-MM-DD HH:mm:ss');
};

export const isValidDate = (date: Date | string): boolean => {
  if (typeof date === 'string') {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime());
  }
  return date instanceof Date && !isNaN(date.getTime());
};
