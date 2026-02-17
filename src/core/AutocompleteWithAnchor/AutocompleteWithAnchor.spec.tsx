import { render } from '@test-utils/test-utils';
import { Icon } from '@vanguard/Icon/Icon';
import { IconNames } from '@vanguard/Icon/IconNames';
import React from 'react';

import { AutocompleteWithAnchor } from './AutocompleteWithAnchor';

describe('AutocompleteWithAnchor component tests', () => {
  test('should render', async () => {
    render(
      <div>
        <AutocompleteWithAnchor
          autocompleteProps={{
            options: ['1', '2', '3'],
            open: true,
          }}
        >
          <div style={{ padding: 20 }}>
            <Icon>{IconNames.settings}</Icon>
          </div>
        </AutocompleteWithAnchor>
      </div>,
    );
  });
});
