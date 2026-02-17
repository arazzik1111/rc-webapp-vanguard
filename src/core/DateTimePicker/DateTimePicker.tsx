import { DatePicker } from '@vanguard/DatePicker/DatePicker';
import { SelectOnChange, SelectOptionProp } from '@vanguard/Select/Select';
import { TimePicker } from '@vanguard/TimePicker/TimePicker';
import moment, { Moment } from 'moment';
import React, { ChangeEvent, MutableRefObject, useEffect, useState } from 'react';

import styles from './DateTimePicker.module.scss';

export interface DateTimePickerProps {
  date?: number;
  time?: string;
  onChange?: (date?: number, time?: string, dateTime?: Moment | null | undefined) => void;
  minDate?: number;
  maxDate?: number;
  minTime?: string;
  maxTime?: string;
  pickerRef?: MutableRefObject<HTMLDivElement | null>;
  disablePast?: boolean;
  labelDate?: string;
  labelTime?: string;
  freeSolo?: boolean;
  showAmPm?: boolean;
  locale: string;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = (props) => {
  const {
    date,
    time,
    onChange,
    minDate,
    maxDate,
    minTime,
    maxTime,
    pickerRef,
    disablePast,
    labelDate,
    freeSolo,
    labelTime,
    showAmPm,
    locale,
  } = props;

  const [innerDate, setInnerDate] = useState<Moment | undefined>(
    date !== undefined ? moment.unix(date).startOf('day') : undefined,
  ); // "YYYY-MM-DD"

  const [innerTime, setInnerTime] = useState<Moment | undefined>(
    time !== undefined ? moment(time, 'HH:mm') : undefined,
  ); // "HH:mm"

  useEffect(() => {
    if (onChange) {
      const momentDate = innerDate?.clone().unix().valueOf();
      const momentTime = innerTime?.clone().format('HH:mm');

      let dateTime: undefined | Moment = undefined;
      if (momentDate && momentTime) {
        dateTime = innerDate?.clone().set({ hour: innerTime?.hour(), minute: innerTime?.minute() });
      }

      onChange(momentDate, momentTime, dateTime);
    }
  }, [innerDate, innerTime]);

  const handleDateChange = (newDate?: number) => {
    if (newDate) {
      setInnerDate(moment(newDate).startOf('day'));
    }
  };

  const handleTimeChange: SelectOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    selectedOpt: SelectOptionProp,
  ) => {
    const newTime = selectedOpt?.value;
    if (typeof newTime === 'string') {
      if (newTime.includes('AM') || newTime.includes('PM')) {
        setInnerTime(moment(newTime, 'hh:mm A'));
      } else {
        setInnerTime(moment(newTime, 'HH:mm'));
      }
    }
  };

  /**
   * Return view
   * ---
   */
  return (
    <div ref={pickerRef} className={styles.container}>
      <DatePicker
        label={labelDate ?? 'Start date'}
        locale={locale}
        disablePast={disablePast}
        onChange={handleDateChange}
        value={innerDate?.valueOf()}
        minDate={minDate}
        maxDate={maxDate}
        required={true}
      />
      <TimePicker
        value={innerTime?.format('HH:mm') ?? ''}
        label={labelTime ?? 'Start time'}
        showAmPm={!!showAmPm}
        hourListType={'half'}
        onChange={handleTimeChange}
        min={minTime}
        freeSolo={freeSolo}
        max={maxTime}
      />
    </div>
  );
};
