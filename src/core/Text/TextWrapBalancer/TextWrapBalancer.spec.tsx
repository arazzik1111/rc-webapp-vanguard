import { render } from '@test-utils/test-utils';
import React from 'react';

import { TextWrapBalancer } from './TextWrapBalancer';

describe('TextWrapBalancer component tests', () => {
  test('should render', async () => {
    render(<TextWrapBalancer balanced={false}>TEST</TextWrapBalancer>);
  });
});
