import { DateRangePickerFormatter } from '@vanguard/DateRangePicker/DateRangePicker.formatter';
import moment from 'moment';

describe('DateRangeFormatter tests', () => {
  it('should parse the date string and return the 2 dates', () => {
    const formatter = new DateRangePickerFormatter();
    const string = '12 Aug - 25 Sep';
    const dates = formatter.formatStringToDates(string);

    expect(dates?.startDate?.day).toBe(12);
    expect(dates?.startDate?.month).toBe(8);

    expect(dates?.endDate?.day).toBe(25);
    expect(dates?.endDate?.month).toBe(9);
  });

  it('should format dates to selected input', () => {
    const formatter = new DateRangePickerFormatter();
    const d1 = moment('12 Nov', 'D MMM').toDate();
    const d2 = moment('7 Dec', 'D MMM').toDate();

    const formatted = formatter.formatDateRangePickerInput(d1, d2);
    expect(formatted).toBe('12 Nov-07 Dec');
  });
});
