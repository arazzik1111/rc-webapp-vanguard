import { render } from '@test-utils/test-utils';
import { CreditCard, CreditCardType } from '@vanguard/CreditCard/CreditCard';
import React from 'react';

describe('CreditCard component tests', () => {
  test('should render components', async () => {
    render(<CreditCard type={CreditCardType.Visa} small={true} disabled={true} />);
  });
});
