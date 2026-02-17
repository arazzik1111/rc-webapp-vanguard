import { render } from '@test-utils/test-utils';
import React from 'react';

import { FormElement } from './FormElement';

describe('FormElement component tests', () => {
  test('should render', async () => {
    render(
      <FormElement onBlur={() => {}} onChange={() => {}} formConfig={{}} childConfig={{}}>
        AICI
      </FormElement>,
    );
  });
});
