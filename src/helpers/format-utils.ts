import moment, { Moment } from 'moment';

export const formatHours = (value: string | unknown, showAmPm = false): string => {
  if (typeof value !== 'string') {
    throw new Error('Argument must be a string');
  }

  if (value.trim() === '') {
    return '';
  }

  const splitHours = value.split(' ');
  const meridian = splitHours[1];
  let fromFormat = getHourFormat(false);

  if (meridian && (meridian.toLowerCase() === 'am' || meridian.toLowerCase() === 'pm')) {
    fromFormat = getHourFormat(true);
  }
  const toFormat = getHourFormat(showAmPm);
  const valueMoment = moment(value, fromFormat);
  //console.log("valueMoment", valueMoment);

  return valueMoment.format(toFormat);
};

export const getHourFormat = (showAmPm = false) => {
  return showAmPm ? 'hh:mm A' : 'HH:mm';
};

export const formatDate = (value: string | Moment | unknown, showAmPm: boolean): string => {
  return formatDateAndTime(value, showAmPm, false);
};

export const formatDateAndTime = (value: string | unknown | Moment, showAmPm = false, showHours?: boolean): string => {
  const format = `MM/DD/yyyy ${showHours ? 'h:mm a' : ''}`;
  if (moment.isMoment(value)) {
    return value.format(format);
  }
  if (typeof value !== 'string') {
    throw new Error('Argument must be a string');
  }

  if (value.trim() === '') {
    return '';
  }
  return moment(value).format(format);
};
