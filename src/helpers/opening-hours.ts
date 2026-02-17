import { OpeningHoursDayType } from '@common/OpeningTimes/OpeningTimes';

export const generateOpeningHoursDaysArray = (firstDayOfWeek: string = 'mon'): OpeningHoursDayType[] => {
  let daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  if (firstDayOfWeek === 'sun') {
    daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  }

  return daysOfWeek.map((item) => {
    const day: OpeningHoursDayType = {
      dayOfWeek: item,
      open: true,
      openAllDay: false,
      intervals: [{ from: '08:00', to: '18:00' }],
    };
    return day;
  });
};
