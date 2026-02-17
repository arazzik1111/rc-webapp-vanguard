import { render } from '@test-utils/test-utils';
import React from 'react';

import { DragAndDropFile } from './DragAndDropFile';

describe('DragAndDropFile component tests', () => {
  test('should render', async () => {
    render(<DragAndDropFile onFileDrop={() => {}} />);
  });
});
