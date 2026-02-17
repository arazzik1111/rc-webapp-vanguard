import { render } from '@test-utils/test-utils';
import React from 'react';

import { PhoneNumberBase } from './PhoneNumberBase';

describe('PhoneNumberBase component tests', () => {
  test('should render', async () => {
    render(<PhoneNumberBase label={''} countryCode={'US'} />);
  });
});
