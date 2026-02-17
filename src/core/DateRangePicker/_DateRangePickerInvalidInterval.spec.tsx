import { describe, it, expect } from 'vitest';
import { eachDayOfInterval } from 'date-fns';

describe('DateRangePicker Invalid Interval Reproduction', () => {
  it('should throw "Invalid interval" error when end date is before start date', () => {
    const startDate = new Date('2023-12-15');
    const endDate = new Date('2023-12-10');

    expect(() => {
      eachDayOfInterval({ start: startDate, end: endDate });
    }).toThrow('Invalid interval');
  });

  it('should work with valid interval', () => {
    const startDate = new Date('2023-12-10');
    const endDate = new Date('2023-12-15');

    const result = eachDayOfInterval({ start: startDate, end: endDate });
    expect(result).toHaveLength(6); // 10th to 15th inclusive
  });
});