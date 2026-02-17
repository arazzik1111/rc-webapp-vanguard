import moment from 'moment';

/**
 *
 * BACKEND ---> FRONTEND
 *
 * Backend provides date in format: YYYY-MM-DD HH:mm:ss (php: Y-m-d H:s:i)
 * Our DateTimePicker component requires format:
 *  - date: unix timestamp (seconds)
 *  - time: HH:mm (24h format)
 */
export const mapBackendDateToDateTimePicker = (date: string) => {
  // Parse the input date string as UTC
  const momentDateTime = moment.utc(date, 'YYYY-MM-DD HH:mm:ss').local();

  return {
    // Start of the day in local time, in milliseconds
    date: momentDateTime.clone().startOf('day').unix().valueOf(),

    // Time in "HH:mm" format in local time
    time: momentDateTime.format('HH:mm'),

    // Date and time in "YYYY-MM-DD HH:mm" format in local time
    dateTime: momentDateTime.format('YYYY-MM-DD HH:mm'),
  };
};

export const isBackendDateAfterNow = (date: string) => {
  const momentDateTime = moment(date, 'YYYY-MM-DD HH:mm:ss');
  return momentDateTime.isAfter(moment());
};

export const mapToBackendDate = (date: number, time: string = '00:00') => {
  const momentDate = moment.utc(String(date).length === 10 ? date * 1000 : date);
  const momentTime = moment.utc(time, 'HH:mm');
  return momentDate
    .clone()
    .local()
    .hour(momentTime.hour())
    .minute(momentTime.minute())
    .second(0)
    .format('YYYY-MM-DD HH:mm:ss');
};

/**
 * FRONTEND ---> BACKEND
 */
export const mapDateTimePickerToBackendDate = (date: number, time: string = '00:00') => {
  const momentDate = moment(String(date).length === 10 ? date * 1000 : date);
  const momentTime = moment(time, 'HH:mm');
  return momentDate
    .clone()
    .local()
    .hour(momentTime.hour())
    .minute(momentTime.minute())
    .second(0)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss');
};

/**
 * FRONTEND ---> BACKEND + 1 DAY
 */
export const mapDateTimePickerToBackendDatePlusOneDay = (date: number, time: string = '00:00') => {
  const momentDate = moment(String(date).length === 10 ? date * 1000 : date);
  const momentTime = moment(time, 'HH:mm');
  return momentDate
    .clone()
    .local()
    .hour(momentTime.hour())
    .minute(momentTime.minute())
    .second(0)
    .add(1, 'day')
    .utc()
    .format('YYYY-MM-DD HH:mm:ss');
};

/**
 * FRONTEND ---> UNIX
 *
 * Useful for comparisons
 */
export const mapDateTimePickerToUnix = (date: number, time: string = '00:00') => {
  const momentDate = moment(date * 1000);
  const momentTime = moment(time, 'HH:mm');
  return momentDate.clone().local().hour(momentTime.hour()).minute(momentTime.minute()).second(0).unix();
};

/**
 * FRONTEND ---> toLocaleString()
 */
export const mapDateTimePickerToLocaleString = (date: string) => {
  return new Date(date).toLocaleString();
};

export const isDateTimePickerAfterNow = (date: number, time: string = '00:00') => {
  const momentDate = moment(date * 1000);
  const momentTime = moment(time, 'HH:mm');
  const momentDateTime = momentDate
    .clone()
    .local()
    .hour(momentTime.hour())
    .minute(momentTime.minute())
    .second(0)
    .format();
  return moment(momentDateTime).isAfter(moment());
};
