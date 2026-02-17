import { render } from '@test-utils/test-utils';
import React from 'react';

import { PhoneNumberPrefix } from './PhoneNumberPrefix';

describe('PhoneNumberPrefix component tests', () => {
  test('should render', async () => {
    render(<PhoneNumberPrefix label={''} countryCode={'DE'} />);
  });
});
