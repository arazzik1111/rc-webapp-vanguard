import React from 'react';
import { RelativeTime } from '../RelativeTime';
import { Text, TextTypes } from '@vanguard/Text/Text';
import { Story, testDates } from './_RelativeTime.default';

export const PastTimes: Story = {
  render: () => (
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Text type={TextTypes.heading3}>Past Times</Text>
      <div>
        <strong>Few seconds ago:</strong> <RelativeTime>{testDates.past.fewSeconds}</RelativeTime>
      </div>
      <div>
        <strong>A minute ago:</strong> <RelativeTime>{testDates.past.minute}</RelativeTime>
      </div>
      <div>
        <strong>5 minutes ago:</strong> <RelativeTime>{testDates.past.minutes}</RelativeTime>
      </div>
      <div>
        <strong>An hour ago:</strong> <RelativeTime>{testDates.past.hour}</RelativeTime>
      </div>
      <div>
        <strong>3 hours ago:</strong> <RelativeTime>{testDates.past.hours}</RelativeTime>
      </div>
      <div>
        <strong>A day ago:</strong> <RelativeTime>{testDates.past.day}</RelativeTime>
      </div>
      <div>
        <strong>5 days ago:</strong> <RelativeTime>{testDates.past.days}</RelativeTime>
      </div>
      <div>
        <strong>A week ago:</strong> <RelativeTime>{testDates.past.week}</RelativeTime>
      </div>
      <div>
        <strong>2 weeks ago:</strong> <RelativeTime>{testDates.past.weeks}</RelativeTime>
      </div>
      <div>
        <strong>A month ago:</strong> <RelativeTime>{testDates.past.month}</RelativeTime>
      </div>
      <div>
        <strong>3 months ago:</strong> <RelativeTime>{testDates.past.months}</RelativeTime>
      </div>
      <div>
        <strong>A year ago:</strong> <RelativeTime>{testDates.past.year}</RelativeTime>
      </div>
      <div>
        <strong>2 years ago:</strong> <RelativeTime>{testDates.past.years}</RelativeTime>
      </div>
    </div>
  ),
};
