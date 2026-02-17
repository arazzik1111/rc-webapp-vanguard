import { StoryObj } from '@storybook/react';

import { CreditCard, CreditCardType } from '../CreditCard';

export type Story = StoryObj<typeof CreditCard>;

export const testTypes = {
  visa: CreditCardType.Visa,
  masterCard: CreditCardType.MasterCard,
  americanExpress: CreditCardType.AmericanExpress,
  discover: CreditCardType.Discover,
  carteBleue: CreditCardType.CarteBleue,
  placeholder: CreditCardType.Placeholder,
} as const;

export const testIds = {
  creditCard: 'credit-card',
} as const;
