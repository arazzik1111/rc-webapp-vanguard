import { render } from '@testing-library/react';
import { LottieRef } from '@vanguard/LottieAnimationLoader/hooks/use-lottie';
import { LottieBase } from '@vanguard/LottieAnimationLoader/LottieBase/LottieBase';
import React from 'react';

// @ts-ignore
import mockAnim from './mock/mock-anim.json';

class PartialLottieComponentProps {}

function renderLottie(props?: PartialLottieComponentProps) {
  const defaultProps = {
    animationData: mockAnim,
  };

  return render(<LottieBase {...defaultProps} {...props} />);
}

describe('<Lottie />', () => {
  test("should check if 'lottieRef' can be undefined", async () => {
    const component = renderLottie();
    expect(component.container).toBeDefined();
  });

  test("should check 'lottieRef' properties", async () => {
    const lottieRef: LottieRef = { current: null };

    renderLottie({ lottieRef });

    expect(Object.keys(lottieRef.current || {}).length).toBe(14);

    expect(lottieRef.current?.play).toBeDefined();
    expect(lottieRef.current?.stop).toBeDefined();
    expect(lottieRef.current?.pause).toBeDefined();
    expect(lottieRef.current?.setSpeed).toBeDefined();
    expect(lottieRef.current?.goToAndPlay).toBeDefined();
    expect(lottieRef.current?.goToAndStop).toBeDefined();
    expect(lottieRef.current?.setDirection).toBeDefined();
    expect(lottieRef.current?.playSegments).toBeDefined();
    expect(lottieRef.current?.setSubframe).toBeDefined();
    expect(lottieRef.current?.getDuration).toBeDefined();
    expect(lottieRef.current?.destroy).toBeDefined();
    expect(lottieRef.current?.animationLoaded).toBeDefined();
  });
});
