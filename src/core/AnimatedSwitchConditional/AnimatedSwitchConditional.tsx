import React from 'react';
import { animated, config, useTransition } from 'react-spring';

interface Props {
  children: React.ReactNode;
  condition?: boolean;
  if?: boolean;
  animation?:
    | 'none'
    | 'fade'
    | 'slide'
    | 'zoom'
    | 'flip'
    | 'rotate'
    | 'slideRight'
    | 'slideUp'
    | 'slideDown'
    | 'scale'
    | 'bounce';
  className?: string;
}

export const AnimatedSwitchConditional = (props: Props) => {
  const { children, if: ifCondition, condition, animation = 'fade', className } = props;

  const animations = {
    none: {},
    fade: { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } },
    slide: {
      from: { transform: 'translate3d(-100%,0,0)' },
      enter: { transform: 'translate3d(0%,0,0)' },
      leave: { transform: 'translate3d(100%,0,0)' },
    },
    zoom: { from: { transform: 'scale(0)' }, enter: { transform: 'scale(1)' }, leave: { transform: 'scale(0)' } },
    flip: {
      from: { transform: 'rotateX(-180deg)' },
      enter: { transform: 'rotateX(0)' },
      leave: { transform: 'rotateX(180deg)' },
    },
    rotate: {
      from: { transform: 'rotate(-360deg)' },
      enter: { transform: 'rotate(0deg)' },
      leave: { transform: 'rotate(360deg)' },
    },
    slideRight: {
      from: { transform: 'translateX(-100%)' },
      enter: { transform: 'translateX(0%)' },
      leave: { transform: 'translateX(100%)' },
    },
    slideUp: {
      from: { transform: 'translateY(100%)' },
      enter: { transform: 'translateY(0%)' },
      leave: { transform: 'translateY(-100%)' },
    },
    slideDown: {
      from: { transform: 'translateY(-100%)' },
      enter: { transform: 'translateY(0%)' },
      leave: { transform: 'translateY(100%)' },
    },
    scale: {
      from: { transform: 'scale(0.5)', opacity: 0 },
      enter: { transform: 'scale(1)', opacity: 1 },
      leave: { transform: 'scale(0.5)', opacity: 0 },
    },
    bounce: {
      from: { transform: 'translateY(-100%)' },
      enter: { transform: 'translateY(0%)' },
      leave: { transform: 'translateY(100%)' },
      config: config.wobbly,
    },
  };

  const animationConfig = animations[animation] || animations.none;

  const transition = useTransition(condition || ifCondition, {
    ...animationConfig,
    keys: null,
  });

  if (animation === 'none') {
    return condition || ifCondition ? <>{children}</> : <>{null}</>;
  }

  return (
    <div style={{ position: 'relative' }}>
      {transition((style, item) =>
        item ? (
          <animated.div
            className={className}
            style={{
              ...style,
              position: 'absolute',
              width: '100%',
              height: '100%', // Ensure it covers the container
            }}
          >
            {children}
          </animated.div>
        ) : null,
      )}
    </div>
  );
};
