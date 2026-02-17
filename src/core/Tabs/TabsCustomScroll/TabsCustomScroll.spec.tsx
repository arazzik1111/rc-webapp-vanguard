import { render } from '@test-utils/test-utils';
import React from 'react';

import { TabsCustomScroll } from './TabsCustomScroll';

describe('TabsCustomScroll component tests', () => {
  test('should render', async () => {
    render(<TabsCustomScroll direction={''} onClick={() => {}} disabled={false} />);
  });
});
