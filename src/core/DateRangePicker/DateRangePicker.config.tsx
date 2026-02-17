import { createDatePickerRange } from '@vanguard/DateRangePicker/date-range-picker-utils/date-range-picker-utils';
import { TextReplacements } from '@vanguard/Text/Text';
import moment from 'moment';
import { StaticRange } from 'react-date-range';

export type StaticRangeWithDefault = StaticRange & {
  id?: string | number;
  isDefault?: boolean;
  replacements?: TextReplacements;
  startDate?: Date;
  endDate?: Date;
};
/**
 * Default config for the Date range picker
 * This can be overwritten by developers by prop
 * */
export const useDateRangePickerStaticRanges = () => {
  return [
    createDatePickerRange({
      id: 'last-14-days',
      startDate: moment().subtract(14, 'day').toDate(),
      endDate: moment().toDate(),
      label: 'Last %day_value% days',
      replacements: {
        day_value: 14,
      },
      isDefault: true,
    }),
    createDatePickerRange({
      id: 'last-30-days',
      startDate: moment().subtract(30, 'day').toDate(),
      endDate: moment().toDate(),
      label: 'Last %day_value% days',
      replacements: {
        day_value: 30,
      },
    }),
    createDatePickerRange({
      id: 'last-6-months',
      startDate: moment().subtract(6, 'month').toDate(),
      endDate: moment().toDate(),
      label: 'Last %month_value% months',
      replacements: {
        month_value: 6,
      },
    }),
    createDatePickerRange({
      id: 'last-12-months',
      startDate: moment().subtract(12, 'month').toDate(),
      endDate: moment().toDate(),
      label: 'Last %month_value% months',
      replacements: {
        month_value: 12,
      },
    }),
    createDatePickerRange({
      id: 'last-18-months',
      startDate: moment().subtract(18, 'month').toDate(),
      endDate: moment().toDate(),
      label: 'Last %month_value% months',
      replacements: {
        month_value: 18,
      },
    }),
    createDatePickerRange({
      id: 'all-time',
      startDate: undefined, //moment().subtract(5, "year").toDate(),
      endDate: undefined, //moment().toDate(),
      label: 'Full timeline',
      isSelected: (range) => {
        return !range.startDate || !range.endDate;
      },
    }),
  ];
};
