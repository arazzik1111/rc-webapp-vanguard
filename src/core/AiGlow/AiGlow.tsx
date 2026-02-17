import classNames from 'classnames';
import React from 'react';

import styles from './AiGlow.module.scss';

export interface AiGlowProps {
  className?: string;
  children: React.ReactNode;
  borderRadius?: number;
  baseColor?: string;
  startColor?: string;
  endColor?: string;
  borderWidth?: number;
  blurWidth?: number;
}

export const AiGlow = (props: AiGlowProps) => {
  const { className, children, borderRadius = 24, baseColor, startColor, endColor, borderWidth, blurWidth } = props;

  // Create style object with only defined props
  const style = {
    '--ai-border-radius': `${borderRadius}px`,
    ...(borderWidth && { '--ai-border-size-outside': `${borderWidth}px` }),
    ...(baseColor && { '--ai-base-color': baseColor }),
    ...(startColor && { '--ai-start-color': startColor }),
    ...(endColor && { '--ai-end-color': endColor }),
    ...(blurWidth && { '--ai-blur-width': `${blurWidth}px` }),
  } as React.CSSProperties;

  return (
    <div className={classNames(styles.grad, className)} style={style}>
      {children}
    </div>
  );
};
