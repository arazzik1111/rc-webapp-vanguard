import { render } from '@test-utils/test-utils';
import React from 'react';

import { CtaWithIcon } from './CtaWithIcon';

describe('CtaWithIcon component tests', () => {
  test('should render', async () => {
    render(<CtaWithIcon />);
  });
});
