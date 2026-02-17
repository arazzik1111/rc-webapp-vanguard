import { render } from '@test-utils/test-utils';
import React from 'react';

import { DateRangePickerBase } from './DateRangePickerBase';

describe('DateRangePickerBase component tests', () => {
  test('should render', async () => {
    render(<DateRangePickerBase view={'calendar'} condition={true} />);
  });
});
