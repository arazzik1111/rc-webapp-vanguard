import { render } from '@test-utils/test-utils';
import React from 'react';

import { FullScreenModalContainer } from './FullScreenModalContainer';

describe('FullScreenModalContainer component tests', () => {
  test('should render', async () => {
    render(
      <FullScreenModalContainer>
        <div>TEST child</div>
      </FullScreenModalContainer>,
    );
  });
});
