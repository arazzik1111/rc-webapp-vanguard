import React, { useState } from 'react';
import { RelativeTime } from '../RelativeTime';
import { DateTimePicker } from '@vanguard/DateTimePicker/DateTimePicker';
import { Text, TextTypes } from '@vanguard/Text/Text';
import { Story } from './_RelativeTime.default';

export const Interactive: Story = {
  render: () => {
    const [dateTime, setDateTime] = useState<Date | undefined>();

    const handleChange = (date?: number, time?: string, momentDateTime?: any) => {
      if (momentDateTime) {
        setDateTime(momentDateTime.toDate());
      } else {
        setDateTime(undefined);
      }
    };

    return (
      <div style={{ padding: 20, maxWidth: 400, display: 'flex', gap: 10, flexDirection: 'column' }}>
        <Text type={TextTypes.heading3}>RelativeTime Interactive Demo</Text>
        <DateTimePicker locale="en-US" onChange={handleChange} />
        <Text>
          <strong>Selected DateTime:</strong> {dateTime ? dateTime.toISOString() : 'None'}
        </Text>
        {dateTime && (
          <div>
            <strong>Relative Time:</strong> <RelativeTime>{dateTime}</RelativeTime>
          </div>
        )}
      </div>
    );
  },
};
