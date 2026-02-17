import { render } from '@test-utils/test-utils';
import React from 'react';

import { ProgressBar } from './ProgressBar';

describe('ProgressBar component tests', () => {
  test('should render', async () => {
    render(<ProgressBar height={'12px'} progressValue={50} />);
  });
});
