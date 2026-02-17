import { dateIsBefore } from '@helpers/date-helpers';
import moment from 'moment';
import { describe, expect, it } from 'vitest';

describe('DateHelpers', () => {
  it('Should be able to calculate what date is before what(Moment format)', () => {
    const d1 = moment();
    const d2 = moment().add(1, 'day');
    const isBefore = dateIsBefore(d1, d2);
    expect(isBefore).toBe(true);
  });
  it('Should be able to calculate what date is before what(String format)', () => {
    const d1 = moment().toISOString();
    const d2 = moment().add(1, 'day').toISOString();
    const isBefore = dateIsBefore(d1, d2);
    expect(isBefore).toBe(true);
  });
  it('Should be able to calculate what date is before what(Date format)', () => {
    const d1 = moment().toDate();
    const d2 = moment().add(1, 'day').toDate();
    const isBefore = dateIsBefore(d1, d2);
    expect(isBefore).toBe(true);
  });
  it('Should be able to calculate what date is before what(Second undefined )', () => {
    const d1 = moment().toDate();
    const d2 = moment().add(1, 'day').toDate();
    const isBefore = dateIsBefore(d1, undefined);
    expect(isBefore).toBe(false);
  });

  it('Should be able to calculate what date is before what(First undefined )', () => {
    const d1 = moment().toDate();
    const d2 = moment().add(1, 'day').toDate();
    const isBefore = dateIsBefore(undefined, d2);
    expect(isBefore).toBe(true);
  });
});
