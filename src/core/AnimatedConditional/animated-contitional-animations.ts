import { useSpring } from '@react-spring/core';
import { ANIMATED_CONDITIONAL_DEFAULT } from '@test-utils/timings';

export const animationConditionalBaseAnimation = (condition: boolean, setVisibility: (val: boolean) => void) => {
  const duration = ANIMATED_CONDITIONAL_DEFAULT;
  const animationConfig = {
    duration: duration,
  };

  return useSpring({
    to: { opacity: condition ? 1 : 0 },
    config: animationConfig,
    onStart: () => {
      if (condition) {
        setVisibility(condition);
      }
    },
    onResolve: () => {
      if (!condition) {
        setTimeout(() => {
          setVisibility(condition);
        }, 0);
      }
    },
  });
};

export const animationConditionalGrowWidth = (condition: boolean, fromWidth: number, toWidth: number) => {
  return useSpring({
    width: condition ? `${fromWidth}px` : `${toWidth}px`,
    config: { duration: 150 },
  });
};

export const animationConditionalgrowHeight = (condition: boolean, fromHeight: number, toHeight: number) => {
  return useSpring({
    height: condition ? `${fromHeight}px` : `${toHeight}px`,
    opacity: condition ? '1' : '0',
    visibility: condition ? 'visible' : 'hidden',
    config: { duration: 150 },
  });
};
