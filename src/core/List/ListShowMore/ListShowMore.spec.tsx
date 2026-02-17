import { render } from '@test-utils/test-utils';
import { Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

import { ListShowMore } from './ListShowMore';

describe('ListShowMore component tests', () => {
  test('should render', async () => {
    render(
      <ListShowMore
        listElements={[
          {
            content: <Text type={TextTypes.textCaption}>This is the life</Text>,
            selected: true,
          },
        ]}
        type={'numerical'}
      />,
    );
  });
});
