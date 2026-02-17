import { alignItemsCenter, alignItemsEnd, dFlex, dFlexColumn, justifyContentCenter } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { DonutChart, DonutChartProps } from '@vanguard/Charts/DonutChart/DonutChart';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { StatusBadge, StatusBadgeStatus } from '@vanguard/StatusBadge/StatusBadge';
import { FontWeights, Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

import styles from './DonutChartDirectories.module.scss';

export type DonutChartDirectoriesProps = {
  badgeStatuses?: StatusBadgeStatus[];
  testId?: string;
} & Omit<DonutChartProps, 'renderChildrenFn'>;

export const DonutChartDirectories = (props: DonutChartDirectoriesProps) => {
  const { badgeStatuses = [], series, labels, testId } = props;
  const total = series.reduce((sum, item) => sum + item);

  const renderChildrenFn = (index: number, series: number, label?: string) => {
    return (
      <div className={classNames(dFlex, dFlexColumn, alignItemsCenter)}>
        <Text fontWeight={FontWeights.medium}>{label}</Text>
        <div className={classNames(dFlex, justifyContentCenter, alignItemsEnd)}>
          <Text fontWeight={FontWeights.bold} type={TextTypes.heading1} translate={false}>
            {series}
          </Text>
          <Text fontWeight={FontWeights.bold} type={TextTypes.heading4} translate={false}>
            /{total}
          </Text>
        </div>
      </div>
    );
  };

  /**
   * Return view
   */
  return (
    <ComponentContainer className={styles.directoriesStatus} testId={testId ?? 'DonutChartDirectories'}>
      <div className={styles.donut}>
        <DonutChart
          {...(props as DonutChartProps)}
          renderChildrenFn={renderChildrenFn}
          testId={`${testId}_ChartItself`}
        />
      </div>
      <div className={styles.badges} data-testid={`${testId}_Badges`}>
        {badgeStatuses.map((status, index) => {
          return (
            <StatusBadge
              key={index}
              className={styles.badge}
              status={status === 'publishing' ? 'publishingStatic' : status}
              text={labels && labels[index] ? labels[index] : ''}
              numberValue={series[index] ?? 0}
            />
          );
        })}
      </div>
    </ComponentContainer>
  );
};
