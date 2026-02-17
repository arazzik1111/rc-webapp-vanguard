import { mb1 } from '@globalStyles';
import { Skeleton, SkeletonTypes } from '@vanguard/Skeleton/Skeleton';
import React from 'react';

import styles from '../StatisticsBoardItem/StatisticsBoardItem.module.scss';

export const StatisticsBoardItemPlaceholder = () => {
  return (
    <div className={styles.container}>
      <Skeleton
        type={SkeletonTypes.rectangle}
        width={'100%'}
        height={'178px'}
        className={mb1}
        style={{ borderRadius: 8, minWidth: 200 }}
      />
      <Skeleton type={SkeletonTypes.rectangle} width={'100%'} height={'48px'} style={{ borderRadius: 8 }} />
    </div>
  );
};
