import { StaticRangeWithDefault } from '@vanguard/DateRangePicker/DateRangePicker.config';
import { TextReplacements } from '@vanguard/Text/Text';
import moment, { Moment } from 'moment';
import { DefinedRangeProps, Range } from 'react-date-range';

export type CreateRange = {
  id?: string | number;
  label: string;
  startDate?: Date;
  endDate?: Date;
  isDefault?: boolean;
  isSelected?: (range: Range) => boolean;
  replacements?: TextReplacements;
  adjustStartDate?: boolean; // This is to make sure that the start date is always one day ahead (considers today)
};

export const formatDateForComparison = (date?: Date | Moment): string => {
  if (!date) {
    return '';
  }
  return moment(date).format('DD-MMM-YY');
};

export const areDatesEqual = (date?: Date, date2?: Date): boolean => {
  if (!date || !date2) {
    return false;
  }
  return formatDateForComparison(date) === formatDateForComparison(date2);
};

/**
 * Make sure that the return type is a function
 * */
export const ensureIsRealDate = (date?: string | number | Date): Date | undefined => {
  if (typeof date === 'string' || typeof date === 'number') {
    return moment(date).toDate();
  }

  return date;
};
export const createDatePickerRange = (createInput: CreateRange): StaticRangeWithDefault => {
  const { startDate, endDate, label, isSelected, isDefault, replacements, id, adjustStartDate = true } = createInput;

  return {
    id: id,
    label: label,
    hasCustomRendering: true,
    startDate: startDate,
    endDate: endDate,
    isDefault,
    replacements,
    range: (props?: DefinedRangeProps) => {
      return {
        color: 'var(--p400)',
        startDate: startDate
          ? adjustStartDate
            ? moment(startDate).add(1, 'day').toDate()
            : moment(startDate).toDate()
          : startDate,
        endDate: endDate,
      };
    },
    isSelected: isSelected
      ? isSelected
      : (range: Range) => {
          return (
            formatDateForComparison(startDate) === formatDateForComparison(range.startDate) &&
            formatDateForComparison(endDate) === formatDateForComparison(range.endDate)
          );
        },
  };
};
