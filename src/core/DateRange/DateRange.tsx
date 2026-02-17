import 'react-date-range/src/theme/default.scss'; // main css file // theme css file
import './DateRange.scss';
import 'react-date-range/src/styles.scss';

import { classNames } from '@helpers/classNames';
import { datesAreDifferent } from '@helpers/date-helpers';
import moment, { Moment } from 'moment';
import React, { useEffect, useState } from 'react';
import {
  CalendarProps,
  DateRangePicker,
  DateRangePickerProps,
  Range,
  RangeKeyDict as RangeKeyDictBase,
} from 'react-date-range';

import { ComponentContainer } from '../ComponentContainer/ComponentContainer';

export type DateRangeView = 'all' | 'predefined' | 'calendar';

export type DateRangeInitialProps = {
  startDate?: Date | Moment | null;
  endDate?: Date | Moment | null;
};
type Props = { initialValue?: DateRangeInitialProps } & Omit<DateRangePickerProps, 'onChange'> &
  DateRangeInitialProps & {
    onChange?: (e: DateRangePickerResp) => void;
    view?: DateRangeView;
    navigatorRenderer?:
      | ((
          currFocusedDate: Date,
          changeShownDate: (
            value: Date | number | string,
            mode?: 'set' | 'setYear' | 'setMonth' | 'monthOffset',
          ) => void,
          props: CalendarProps,
        ) => React.JSX.Element)
      | undefined;
  };

export type RcDateRangePickerProps = Props;
type Selection = Record<'selection', { startDate?: Date; endDate?: Date; key: 'selection' }>;

export interface DateRangePickerResp {
  selection: Range;
}

export const DateRange = (props: Props) => {
  const { initialValue, view = 'all', navigatorRenderer } = props;

  const [state, setState] = useState<Selection>({
    selection: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  });

  const updateStateAndNotify = (newVal: Selection) => {
    //TODO @Delia // look into all variants
    const newSelectionUndefinedAndCurrentSelectionExists =
      !newVal.selection.startDate &&
      !newVal.selection.endDate &&
      !!state.selection.startDate &&
      !!state.selection.endDate;
    if (
      // fo a notification if the dates are different no need to notify for each update if they are the same
      datesAreDifferent(newVal.selection.startDate, state.selection.startDate) ||
      datesAreDifferent(newVal.selection.endDate, state.selection.endDate) ||
      // There is another case where we want selection to be undefined
      // In this case we still want to notify all the listeners
      newSelectionUndefinedAndCurrentSelectionExists
    ) {
      setState(newVal);
      props.onChange && props.onChange(newVal);
    }
  };

  useEffect(() => {
    updateStateAndNotify({ ...state });
  }, []);
  useEffect(() => {
    const { startDate, endDate } = initialValue ?? {};
    const newVal: Selection = {
      selection: {
        startDate: startDate ? moment(startDate).toDate() : undefined,
        endDate: endDate ? moment(endDate).toDate() : undefined,
        key: 'selection',
      },
    };
    updateStateAndNotify(newVal);
  }, [initialValue]);

  return (
    <ComponentContainer
      className={classNames('DateRange-container', `date-range-view-${view}`)}
      testId="date-range-container"
    >
      <DateRangePicker
        ranges={[state.selection]}
        {...props}
        onChange={(item: RangeKeyDictBase) => {
          const newVal = { ...state, ...item };
          updateStateAndNotify(newVal);
        }}
      />
    </ComponentContainer>
  );
};
