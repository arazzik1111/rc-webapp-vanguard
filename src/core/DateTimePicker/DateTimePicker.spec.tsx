import { appScreen, render } from '@test-utils/test-utils';
import { fireEvent } from '@testing-library/react';
import moment from 'moment';
import React from 'react';

import { DateTimePicker } from './DateTimePicker';

describe('DateTimePicker', () => {
  test('renders date and time pickers', () => {
    render(<DateTimePicker />);

    const datePicker = appScreen.getByLabelText('Date Picker');
    expect(datePicker).toBeInTheDocument();

    const timePicker = appScreen.getByLabelText('Time Picker');
    expect(timePicker).toBeInTheDocument();
  });

  test('calls onChange prop when date or time changes', () => {
    const handleChange = jest.fn();
    render(<DateTimePicker onChange={handleChange} />);

    const dateValue = moment();
    const timeValue = '12:00';

    const datePicker = appScreen.getByLabelText('Date Picker');
    fireEvent.change(datePicker, { target: { value: dateValue } });

    const timePicker = appScreen.getByLabelText('Time Picker');
    fireEvent.change(timePicker, { target: { value: timeValue } });

    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith({
      date: dateValue.valueOf(),
      time: timeValue,
    });
  });
});
