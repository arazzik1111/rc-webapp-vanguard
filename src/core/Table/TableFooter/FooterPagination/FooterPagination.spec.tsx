import { render } from '@test-utils/test-utils';
import React from 'react';

import { FooterPagination } from './FooterPagination';

describe('FooterPagination component tests', () => {
  test('should render', async () => {
    render(<FooterPagination />);
  });
});
