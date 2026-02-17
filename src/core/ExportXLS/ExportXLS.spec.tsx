import { render } from '@test-utils/test-utils';
import React from 'react';

import { ExportXLS } from './ExportXLS';

describe('ExportXLS component tests', () => {
  test('should render', async () => {
    render(<ExportXLS />);
  });
});
