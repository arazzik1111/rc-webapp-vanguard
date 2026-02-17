import { createDatePickerRange } from '@vanguard/DateRangePicker/date-range-picker-utils/date-range-picker-utils';
import moment from 'moment';

export const DEFAULT_LIST_PAGE_HEADER_RANGES = [
  createDatePickerRange({
    startDate: moment().subtract(14, 'day').toDate(),
    endDate: moment().toDate(),
    label: 'Last %day_value% days',
    replacements: {
      day_value: 14,
    },
  }),
  createDatePickerRange({
    startDate: moment().subtract(30, 'day').toDate(),
    endDate: moment().toDate(),
    label: 'Last %day_value% days',
    replacements: {
      day_value: 30,
    },
  }),
  createDatePickerRange({
    startDate: moment().subtract(6, 'month').toDate(),
    endDate: moment().toDate(),
    label: 'Last %month_value% months',
    replacements: {
      month_value: 6,
    },
  }),
  createDatePickerRange({
    startDate: moment().subtract(12, 'month').toDate(),
    endDate: moment().toDate(),
    label: 'Last %month_value% months',
    replacements: {
      month_value: 12,
    },
  }),
  createDatePickerRange({
    startDate: moment().subtract(18, 'month').toDate(),
    endDate: moment().toDate(),
    label: 'Last %month_value% months',
    replacements: {
      month_value: 18,
    },
  }),
  createDatePickerRange({
    startDate: undefined, //moment().subtract(5, "year").toDate(),
    endDate: undefined, //moment().toDate(),
    label: 'Full timeline',
    isSelected: (range) => {
      return !range.startDate || !range.endDate;
    },
    isDefault: true,
  }),
];
