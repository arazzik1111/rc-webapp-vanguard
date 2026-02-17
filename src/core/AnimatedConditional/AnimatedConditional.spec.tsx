import { appScreen, render, wait } from '@test-utils/test-utils';
import { ANIMATED_CONDITIONAL_DEFAULT } from '@test-utils/timings';
import { waitFor } from '@testing-library/react';
import { AnimatedConditional } from '@vanguard/AnimatedConditional/AnimatedConditional';
import React from 'react';

describe('AnimatedConditional component tests', () => {
  test('should render animation', async () => {
    render(
      <AnimatedConditional testId={'animated-conditional'} animation={'none'} condition={true}>
        <div>test</div>
      </AnimatedConditional>,
    );
    // await appScreen.findByTestId("animated-conditional");
    await expect(appScreen.findByTestId('animated-conditional')).toBe(null);
  });

  test('should render children', async () => {
    render(
      <AnimatedConditional condition={true}>
        <div data-testid={'animated-conditional-children'}>test</div>
      </AnimatedConditional>,
    );

    const animationDiv = await appScreen.findByTestId('animated-conditional-children');
    await waitFor(async () => expect(animationDiv.innerHTML).toBe('test'));
  });

  test('should render animation children undefined', async () => {
    render(
      <AnimatedConditional testId={'animated-conditional'} condition={false}>
        <div data-testid={'animated-conditional-children'}>test</div>
      </AnimatedConditional>,
    );

    await wait(ANIMATED_CONDITIONAL_DEFAULT);
    const child = await appScreen.queryByTestId('animated-conditional');
    expect(child).toBe(null);
  });
});
