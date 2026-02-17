import { render } from '@test-utils/test-utils';
import React from 'react';

import { Tabs } from './Tabs';

describe('TabList component tests', () => {
  const tabs = [
    {
      name: 'General keywords',
      component: <h2>General keywords tab</h2>,
    },
    {
      name: 'Negative keywords',
      component: <h2>Negative keywords tab</h2>,
    },
    {
      name: 'Brand keywords',
      component: <h2>Brand keywords tab</h2>,
    },
  ];

  test('should render', async () => {
    render(<Tabs tabs={tabs} />);
  });
});
