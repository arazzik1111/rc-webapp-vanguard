import { render } from '@test-utils/test-utils';
import React from 'react';

import { ActionCardBody } from './ActionCardBody';

describe('ActionCardBody component tests', () => {
  test('should render', async () => {
    render(<ActionCardBody>Render me</ActionCardBody>);
  });
});
