import { alignItemsCenter, dFlex, dFlexColumn, mb0_25, mt0_25 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { DonutChart, DonutChartProps } from '@vanguard/Charts/DonutChart/DonutChart';
import { IconNames } from '@vanguard/Icon/IconNames';
import { StatusBadge } from '@vanguard/StatusBadge/StatusBadge';
import { FontWeights, Text, TextReplacements, TextTypes } from '@vanguard/Text/Text';
import React, { useCallback } from 'react';

export type DonutChartStatisticsProps = {
  badgeText: string[];
  total: number;
  totalBadgeText: string;
  totalText?: string;
  showBadge?: boolean;
  roundNumbers?: boolean;
  replacements?: TextReplacements;
} & Omit<DonutChartProps, 'renderChildrenFn'>;

export const DonutChartStatistics = (props: DonutChartStatisticsProps) => {
  const {
    badgeText,
    total,
    totalBadgeText,
    roundNumbers = false,
    showBadge,
    totalText = 'Total views',
    replacements,
  } = props;

  /**
   * Event: Render children
   */
  function formatNumber(number: number, roundNumbers?: boolean) {
    if (roundNumbers) {
      return number < 1e3 ? number.toString() : `${parseFloat((number / 1e3).toFixed(1))}K`;
    }
    return number.toLocaleString();
  }

  const getStatus = useCallback(
    (badgeText: string) => {
      if (badgeText.includes('-')) {
        return 'danger';
      } else if (badgeText.includes('+')) {
        return 'success';
      } else {
        return 'neutral';
      }
    },
    [badgeText, totalBadgeText],
  );

  const renderChildrenFn = (index: number, series: number, label?: string) => {
    return (
      <div className={classNames(dFlex, dFlexColumn, alignItemsCenter)}>
        <Text fontWeight={FontWeights.medium} type={TextTypes.textCaption} replacements={replacements}>
          {label}
        </Text>
        <Text
          fontWeight={FontWeights.bold}
          type={TextTypes.heading3}
          className={classNames(mt0_25, mb0_25)}
          translate={false}
        >
          {formatNumber(series, roundNumbers)}
        </Text>
        {showBadge && (
          <StatusBadge
            status={getStatus(badgeText[index])}
            text={badgeText[index]}
            icon={
              getStatus(badgeText[index]) == 'success'
                ? IconNames.arrowUp
                : getStatus(badgeText[index]) == 'danger'
                  ? IconNames.arrowDown
                  : IconNames.remove
            }
            iconVariant={'reverse'}
          />
        )}
      </div>
    );
  };

  const renderChildrenNotHoveredFn = () => {
    return (
      <div className={classNames(dFlex, dFlexColumn, alignItemsCenter)}>
        <Text fontWeight={FontWeights.medium} type={TextTypes.textCaption} replacements={replacements}>
          {totalText}
        </Text>
        <Text
          fontWeight={FontWeights.bold}
          type={TextTypes.heading3}
          className={classNames(mt0_25, mb0_25)}
          translate={false}
        >
          {formatNumber(total, roundNumbers)}
        </Text>
        {showBadge && (
          <StatusBadge
            status={getStatus(totalBadgeText)}
            text={totalBadgeText}
            icon={
              getStatus(totalBadgeText) == 'success'
                ? IconNames.arrowUp
                : getStatus(totalBadgeText) == 'danger'
                  ? IconNames.arrowDown
                  : IconNames.remove
            }
            iconVariant={'reverse'}
          />
        )}
      </div>
    );
  };

  /**
   * Return view
   */
  return (
    <DonutChart
      key={totalBadgeText}
      {...(props as DonutChartProps)}
      renderChildrenFn={renderChildrenFn}
      renderChildrenNotHoveredFn={renderChildrenNotHoveredFn}
    />
  );
};
