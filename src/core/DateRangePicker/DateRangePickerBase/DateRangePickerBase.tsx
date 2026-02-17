import { classNames } from '@helpers/classNames';
import { AnimatedConditional } from '@vanguard/AnimatedConditional/AnimatedConditional';
import { DateRange, DateRangePickerResp, DateRangeView } from '@vanguard/DateRange/DateRange';
import { ensureIsRealDate } from '@vanguard/DateRangePicker/date-range-picker-utils/date-range-picker-utils';
import { StaticRangeWithDefault } from '@vanguard/DateRangePicker/DateRangePicker.config';
import { DateRangePickerNavigator } from '@vanguard/DateRangePicker/DateRangePickerBase/DateRangePickerNavigator';
import { Text, TextTypes } from '@vanguard/Text/Text';
import React, { useEffect, useMemo, useState } from 'react';
import { InputRange, StaticRange } from 'react-date-range';

import { MOMENT_DAY_OF_WEEK_START } from '../../../app-loaders/load-component/moment.config';

export interface DateRangePickerBaseProps {
  condition: boolean;
  view: DateRangeView;
  staticRanges?: StaticRange[];
  initialDate?: { startDate: Date | undefined; endDate: Date | undefined };
  date?: { startDate: Date | undefined; endDate: Date | undefined };
  onChange?: (e: DateRangePickerResp) => void;
  onSelectionComplete?: (e: DateRangePickerResp) => void;
  minDate?: Date;
  maxDate?: Date;
  inputRange?: InputRange;
  onDateClick?: (startDate: Date | undefined, endDate: Date | undefined, source: 'single' | 'range') => void;
}

export const DateRangePickerBase = (props: DateRangePickerBaseProps) => {
  const { condition, view, staticRanges, onChange, initialDate, onSelectionComplete, date, onDateClick } = props;
  const [selectionCount, setSelectionCount] = useState(0);
  const { maxDate, minDate } = props;
  const [value, setValue] = useState<{ startDate: Date | undefined; endDate: Date | undefined }>({
    startDate: initialDate?.startDate,
    endDate: initialDate?.endDate,
  });

  const validatedValue = useMemo(() => {
    let start = value.startDate;
    let end = value.endDate;
    const isInvalidDate = (date: Date | undefined) => date instanceof Date && isNaN(date.getTime());
    if (isInvalidDate(start) || isInvalidDate(end)) {
      start = new Date();
      end = new Date();
    }
    return { startDate: start, endDate: end };
  }, [value.startDate, value.endDate]);

  const { startDate, endDate } = validatedValue;

  /**
   * Make sure it is always in date format
   * */
  const maxDateAsDate = useMemo(() => ensureIsRealDate(maxDate), [maxDate]);
  const minDateAsDate = useMemo(() => ensureIsRealDate(minDate), [minDate]);

  useEffect(() => {
    if (date && date.startDate && date.endDate) {
      setValue({
        startDate: date.startDate,
        endDate: date.endDate,
      });
    }
  }, [date]);

  const resetSelectionAndNotify = () => {
    onSelectionComplete && onSelectionComplete({ selection: { startDate, endDate } });
    setSelectionCount(0);
  };

  useEffect(() => {
    if (selectionCount >= 2) {
      setTimeout(() => {
        resetSelectionAndNotify();
      }, 0);
    }
  }, [selectionCount]);

  // Determine if this is a startDate or endDate selection based on selection count
  const handleDateClick = (date: Date) => {
    const currentSelectionType = selectionCount === 0 ? 'startDate' : 'endDate';
    // Call parent onDateClick handler if provided
    if (onDateClick && condition) {
      if (currentSelectionType === 'startDate') {
        onDateClick && onDateClick(date, undefined, 'single');
      } else {
        // previousSelectionRef.current.endDate = date;
        onDateClick && onDateClick(undefined, date, 'single');
      }
    }

    setSelectionCount((prev) => prev + 1);
  };

  return (
    <AnimatedConditional animation={'none'} condition={condition}>
      <DateRange
        navigatorRenderer={DateRangePickerNavigator}
        dayContentRenderer={(date) => {
          return (
            <span
              className={classNames('notranslate', 'rdr-day-number-rc-btn')}
              onClick={() => {
                handleDateClick(date);
              }}
              style={{ display: 'block', width: 150 }}
            >
              {date.getDate()}
            </span>
          );
        }}
        dragSelectionEnabled={false}
        weekStartsOn={MOMENT_DAY_OF_WEEK_START}
        view={view}
        maxDate={maxDateAsDate}
        minDate={minDateAsDate}
        inputRanges={[]}
        initialValue={validatedValue}
        staticRanges={staticRanges}
        showDateDisplay={false}
        calendarFocus={'backwards'}
        preventSnapRefocus={true}
        showPreview={false}
        fixedHeight={true}
        renderStaticRangeLabel={(val: StaticRangeWithDefault) => {
          const { startDate, endDate } = validatedValue;
          const isRangeSelected = val.isSelected({
            endDate,
            startDate,
          });
          return (
            <div onClick={() => resetSelectionAndNotify()}>
              <Text
                replacements={val.replacements}
                color={isRangeSelected ? '--p500' : undefined}
                type={TextTypes.textHelp}
              >
                {val.label}
              </Text>
            </div>
          );
        }}
        onChange={(e) => {
          const { startDate, endDate } = e.selection;
          setValue({
            startDate,
            endDate,
          });
          onDateClick && onDateClick(startDate, endDate, 'range');
          onChange &&
            onChange({
              selection: {
                startDate: startDate,
                endDate: endDate,
              },
            });
          // save the absolute data
        }}
      />
    </AnimatedConditional>
  );
};
