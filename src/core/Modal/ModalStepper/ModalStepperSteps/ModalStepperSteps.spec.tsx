import { render } from '@test-utils/test-utils';
import React from 'react';

import { ModalStepperSteps } from './ModalStepperSteps';

describe('BigAssModalStepperSteps component tests', () => {
  test('should render', async () => {
    render(<ModalStepperSteps stepsCount={5} activeIndex={4} />);
  });
});
