import { render } from '@test-utils/test-utils';
import React from 'react';

import { ActionCardHeader } from './ActionCardHeader';

describe('ActionCardHeader component tests', () => {
  test('should render', async () => {
    render(<ActionCardHeader>Render me</ActionCardHeader>);
  });
});
