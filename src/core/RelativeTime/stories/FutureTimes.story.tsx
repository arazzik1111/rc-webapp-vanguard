import React from 'react';
import { RelativeTime } from '../RelativeTime';
import { Text, TextTypes } from '@vanguard/Text/Text';
import { Story, testDates } from './_RelativeTime.default';

export const FutureTimes: Story = {
  render: () => (
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Text type={TextTypes.heading3}>Future Times</Text>
      <div>
        <strong>In a few seconds:</strong> <RelativeTime>{testDates.future.fewSeconds}</RelativeTime>
      </div>
      <div>
        <strong>In a minute:</strong> <RelativeTime>{testDates.future.minute}</RelativeTime>
      </div>
      <div>
        <strong>In 5 minutes:</strong> <RelativeTime>{testDates.future.minutes}</RelativeTime>
      </div>
      <div>
        <strong>In an hour:</strong> <RelativeTime>{testDates.future.hour}</RelativeTime>
      </div>
      <div>
        <strong>In 3 hours:</strong> <RelativeTime>{testDates.future.hours}</RelativeTime>
      </div>
      <div>
        <strong>In a day:</strong> <RelativeTime>{testDates.future.day}</RelativeTime>
      </div>
      <div>
        <strong>In 5 days:</strong> <RelativeTime>{testDates.future.days}</RelativeTime>
      </div>
      <div>
        <strong>In a week:</strong> <RelativeTime>{testDates.future.week}</RelativeTime>
      </div>
      <div>
        <strong>In 2 weeks:</strong> <RelativeTime>{testDates.future.weeks}</RelativeTime>
      </div>
      <div>
        <strong>In a month:</strong> <RelativeTime>{testDates.future.month}</RelativeTime>
      </div>
      <div>
        <strong>In 3 months:</strong> <RelativeTime>{testDates.future.months}</RelativeTime>
      </div>
      <div>
        <strong>In a year:</strong> <RelativeTime>{testDates.future.year}</RelativeTime>
      </div>
      <div>
        <strong>In 2 years:</strong> <RelativeTime>{testDates.future.years}</RelativeTime>
      </div>
    </div>
  ),
};
