import moment, { Duration, DurationInputObject, FromTo, unitOfTime } from 'moment';

class DateService {
  now(): string {
    return new Date().toISOString().split('T')[0];
  }

  subtract(
    amount: Duration | number | string | FromTo | DurationInputObject | null | undefined,
    unit: unitOfTime.DurationConstructor,
  ): string {
    return moment().subtract(amount, unit).toDate().toISOString().split('T')[0];
  }

  serverFormat(date: Date): string {
    return moment(date?.toISOString()).format('YYYY-MM-DD');
  }

  dateFormat(date: Date): string {
    return moment(date?.toISOString()).format('MM/DD/YYYY');
  }
  dateAndTimeFormat(date: Date): string {
    return moment(date?.toISOString()).format('DD MMM, HH:MM');
  }
  dayAndMonthFormat(date: Date): string {
    return moment(date?.toISOString()).format('DD MMM');
  }
}

export const dateService = new DateService();
