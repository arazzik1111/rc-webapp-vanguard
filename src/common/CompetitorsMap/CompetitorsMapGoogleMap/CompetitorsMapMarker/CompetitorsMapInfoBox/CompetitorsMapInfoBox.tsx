import { parseCssVariable } from '@helpers/css-variables-parser';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Star } from '@vanguard/StarRating/Star/Star';
import { FontWeights, Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

import styles from './CompetitorsMapInfoBox.module.scss';

export interface CompetitorsMapMarkerLabelProps {
  title: string;
  ratingScore: number;
  ratingCount: number;
  color?: string;
}

export const CompetitorsMapInfoBox = (props: CompetitorsMapMarkerLabelProps) => {
  const { title, ratingScore, color, ratingCount } = props;
  return (
    <ComponentContainer className={styles.competitorMapMarkerContainer}>
      <Text fontWeight={FontWeights.bold} type={TextTypes.textHelp}>
        {title}
      </Text>

      <div className={styles.rating}>
        <span className={styles.score}>{ratingScore === 0 ? '-' : ratingScore.toFixed(1)}</span>
        <Star value={1} color={parseCssVariable(color)} size={14} />
        <span className={styles.count}>{`(${ratingCount})`}</span>
      </div>
    </ComponentContainer>
  );
};
