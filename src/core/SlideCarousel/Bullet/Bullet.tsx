import React from 'react';

import styles from './Bullet.module.scss';

export interface BulletProps {
  isActive: boolean;
  onClick: () => void;
  style: BulletStyle;
}

export type BulletComponentType = (props: BulletProps) => React.ReactElement;

export type BulletStyle = Record<string, string>;

export const Bullet = (props: BulletProps) => {
  const { isActive, onClick, style } = props;
  return (
    <li
      onClick={onClick}
      className={styles.SlideCarouselBullet}
      style={{
        ...style,
        opacity: isActive ? 1 : 0.5,
      }}
    />
  );
};
