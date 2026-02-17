import { render } from '@test-utils/test-utils';
import React from 'react';

import { ModalSplitView } from './ModalSplitView';

describe('ModalSplitView component tests', () => {
  test('should render', async () => {
    render(<ModalSplitView isContracted={true} elements={[null, null]} />);
  });
});
