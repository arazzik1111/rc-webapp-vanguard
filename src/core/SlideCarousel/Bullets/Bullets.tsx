import React from 'react';

import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';
import styles from './Bullets.module.scss';

export interface BulletsProps {
  children: React.ReactElement;
}

export type BulletsComponentType = (props: BulletsProps) => React.ReactElement;

export const Bullets = (props: BulletsProps) => {
  const { children } = props;

  return <ComponentContainer className={styles.BulletsContainer}>{children}</ComponentContainer>;
};
