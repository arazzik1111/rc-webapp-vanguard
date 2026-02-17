import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Skeleton, SkeletonTypes } from '@vanguard/Skeleton/Skeleton';
import React from 'react';

import styles from './ChartsPlaceholder.module.scss';

type ChartsPlaceholderProps = {
  testId?: string;
};

export const ChartsPlaceholder = (props: ChartsPlaceholderProps) => {
  const { testId = 'ChartsPlaceholder_Container' } = props;

  return (
    <ComponentContainer className={styles.container} testId={testId}>
      <Skeleton type={SkeletonTypes.fill} />
    </ComponentContainer>
  );
};
