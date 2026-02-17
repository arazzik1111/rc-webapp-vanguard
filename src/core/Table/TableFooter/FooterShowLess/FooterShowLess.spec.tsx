import { render } from '@test-utils/test-utils';
import React from 'react';

import { FooterShowLess } from './FooterShowLess';

describe('FooterShowLess component tests', () => {
  test('should render', async () => {
    render(<FooterShowLess />);
  });
});
