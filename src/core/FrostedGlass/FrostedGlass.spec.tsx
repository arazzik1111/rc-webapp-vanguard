import { render, screen } from '@test-utils/test-utils';
import { FontWeights, Text } from '@vanguard/Text/Text';
import React from 'react';

import { FrostedGlass } from './FrostedGlass';

describe('FrostedGlass component tests', () => {
  test('should render a text', async () => {
    const text = 'This is a unit test for rendering the frosted glass background';

    render(
      <FrostedGlass>
        <Text textTight={true} fontWeight={FontWeights.medium} testId={'FrostedGlassChildren'}>
          {text}
        </Text>
      </FrostedGlass>,
    );

    const children = await screen.findByTestId('FrostedGlassChildren');
    expect(children).toHaveTextContent(text);
  });
});
