import moment from 'moment';

export const MOMENT_DAY_OF_WEEK_START = 1;
export const initMoment = () => {
  moment().locale('de-DE');
  moment.updateLocale('en', {
    week: {
      dow: MOMENT_DAY_OF_WEEK_START, // First day of week is Sunday
    },
  });
};
