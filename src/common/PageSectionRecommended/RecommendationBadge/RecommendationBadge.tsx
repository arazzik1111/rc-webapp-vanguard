import { classNames } from '@helpers/classNames';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { FontWeights, Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

import styles from './RecommendationBadge.module.scss';

export interface RecommendationBadgeProps {
  testId?: string;
  title?: string;
  // @todo Add color: "success" | "warning" Prop ---> to use s400 and s500 respectively
}

export const RecommendationBadge = (props: RecommendationBadgeProps) => {
  const { testId, title } = props;
  return (
    <ComponentContainer testId={testId} className={classNames(styles.container)}>
      <Text type={TextTypes.textIntro} fontWeight={FontWeights.bold} textTight={true} color={'--n000'}>
        {title}
      </Text>

      <div className={classNames(styles.corner)} />
    </ComponentContainer>
  );
};
