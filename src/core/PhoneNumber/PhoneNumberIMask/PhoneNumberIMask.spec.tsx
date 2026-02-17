import { render } from '@test-utils/test-utils';
import React from 'react';

import { PhoneNumberIMask } from './PhoneNumberIMask';

describe('PhoneNumberIMask component tests', () => {
  test('should render', async () => {
    render(
      <PhoneNumberIMask
        // onChange={() => { }}
        name=""
      />,
    );
  });
});
