import React, { useState } from 'react';
import { animated } from 'react-spring';

import {
  animationConditionalBaseAnimation,
  animationConditionalgrowHeight,
  animationConditionalGrowWidth,
} from './animated-contitional-animations';

type BaseType = {
  children: React.ReactNode;
  condition?: boolean;
  className?: string;
  testId?: string;
};

type AnimationNoneType = {
  animation?: 'none';
} & BaseType;

type AnimationGrowType = {
  animation?: 'growWidth';
  fromWidth: number;
  toWidth: number;
} & BaseType;

type AnimationScaleOnHeight = {
  animation?: 'growHeight';
  fromHeight: number;
  toHeight: number;
} & BaseType;

export type AnimatedConditionalProps = AnimationNoneType | AnimationGrowType | AnimationScaleOnHeight;

export const AnimatedConditional = (props: AnimatedConditionalProps) => {
  const { children, condition, animation = undefined, className, testId } = props;
  const { fromWidth, toWidth } = props as AnimationGrowType;
  const { fromHeight, toHeight } = props as AnimationScaleOnHeight;
  const [visible, setVisible] = useState<boolean>(true);

  const setVisibility = (value: boolean) => {
    setVisible(value);
  };

  const renderAnimationTypeStyle = () => {
    switch (animation) {
      case 'none':
        return {};
      case 'growWidth':
        return animationConditionalGrowWidth(condition ?? false, fromWidth, toWidth);
      case 'growHeight':
        return animationConditionalgrowHeight(condition ?? false, fromHeight, toHeight);
      default:
        return animationConditionalBaseAnimation(condition ?? false, setVisibility);
    }
  };

  if (animation && animation === 'none') {
    if (condition) {
      return <React.Fragment>{children}</React.Fragment>;
    } else {
      return <React.Fragment>{null}</React.Fragment>;
    }
  }

  const styles = renderAnimationTypeStyle();

  if (!visible) {
    return <>{null}</>;
  }

  return (
    <animated.div data-testid={testId} className={className} style={styles}>
      {children}
    </animated.div>
  );
};
