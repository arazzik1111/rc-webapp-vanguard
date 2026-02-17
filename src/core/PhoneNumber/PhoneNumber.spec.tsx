import { render, screen } from '@test-utils/test-utils';
import React from 'react';

import { PhoneNumber } from './PhoneNumber';

describe('PhoneNumber component tests', () => {
  test('should render', async () => {
    render(<PhoneNumber phoneNumberBase="0724336642" countryCode="DE" />);

    const component = screen.getByTestId('phoneNumberComponent');
    const phonePrefix = component.getElementsByTagName('input')[0];
    const phoneBase = component.getElementsByTagName('input')[1];
    expect(phonePrefix).toHaveValue('+49');
    expect(phoneBase).toHaveValue('0724336642');
  });
});
