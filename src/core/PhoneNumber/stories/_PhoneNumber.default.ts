import { StoryObj } from '@storybook/react';
import { PhoneNumber } from '../PhoneNumber';
import { CountryCode } from 'libphonenumber-js';

export type Story = StoryObj<typeof PhoneNumber>;

export const testPhoneNumbers = {
  romanian: '0724336642',
  american: '5551234567',
  british: '07123456789',
  indian: '9876543210',
} as const;

export const testCountryCodes = {
  RO: 'RO' as CountryCode,
  US: 'US' as CountryCode,
  GB: 'GB' as CountryCode,
  IN: 'IN' as CountryCode,
} as const;