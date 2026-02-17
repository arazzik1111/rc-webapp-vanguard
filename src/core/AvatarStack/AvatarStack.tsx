import { classNames } from '@helpers/classNames';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import React from 'react';

import styles from './AvatarStack.module.scss';

export type AvatarStackItem = {
  image: string;
  borderColor?: string;
};

export type AvatarStackProps = {
  items: readonly AvatarStackItem[];
  stackWidth?: string;
  defaultBorderColor?: string;
  className?: string;
};

export const AvatarStack = (props: AvatarStackProps) => {
  const { items = [], stackWidth = '180px', defaultBorderColor = 'var(--n000)', className } = props;
  const avatarSize = 32;

  // @todo Use Avatar Component instead of the IMG here (After solving Avatar issues)

  return (
    <ComponentContainer className={classNames(className, styles.container)} style={{ width: stackWidth }}>
      {items.map((item, index) => {
        return (
          <div key={index} className={classNames(styles.dot)} style={{ height: avatarSize }}>
            <div
              className={classNames(styles.avatar)}
              style={{
                width: avatarSize,
                height: avatarSize,
                left: -1 * (avatarSize / 2),
                border: `2px solid ${item.borderColor ?? defaultBorderColor}`,
              }}
            >
              <img src={item.image} className={classNames(styles.img)} alt={''} />
            </div>
          </div>
        );
      })}
    </ComponentContainer>
  );
};
