import { render } from '@test-utils/test-utils';
import React from 'react';

import { FlagAdornment } from './FlagAdornment';

describe('FlagAdornment component tests', () => {
  test('should render', async () => {
    render(<FlagAdornment countryCode="de" />);
  });
});
