import { classNames } from '@helpers/classNames';
import { Icon, IconSize } from '@vanguard/Icon/Icon';
import { IconNames } from '@vanguard/Icon/IconNames';
import React from 'react';

import styles from './TabsCustomScroll.module.scss';

export interface TabsCustomScrollProps {
  direction: string;
  onClick: () => void;
  disabled: boolean;
  testId?: string;
}

export const TabsCustomScroll = (props: TabsCustomScrollProps) => {
  const { direction, onClick, disabled, testId } = props;

  if (disabled) {
    return null;
  }

  return (
    <div
      onClick={onClick}
      className={classNames(styles.customScrollButtonWrapper, direction === 'right' ? styles.right : styles.left)}
      data-testid={testId}
    >
      <Icon color={'var(--n700)'} type={IconSize.small}>
        {IconNames.caretLeft}
      </Icon>
    </div>
  );
};
