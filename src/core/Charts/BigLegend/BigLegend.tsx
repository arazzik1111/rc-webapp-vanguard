import { classNames } from '@helpers/classNames';
import { ChartsPlaceholder } from '@vanguard/Charts/ChartsPlaceholder/ChartsPlaceholder';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Render } from '@vanguard/Render/Render';
import React, { CSSProperties } from 'react';

import styles from './BigLegend.module.scss';
import { BigLegendItem, BigLegendItemProps } from './BigLegendItem/BigLegendItem';

/**
 * Types
 */
type BigLegendItemPropsToOverwriteType = Partial<
  Omit<BigLegendItemProps, 'testId' | 'currentNumber' | 'previousNumber'>
>;

export type BigLegendProps = {
  bigLegendData: BigLegendItemProps[];
  testId?: string;
  isLoading?: boolean;
  style?: CSSProperties;
} & BigLegendItemPropsToOverwriteType;

/**
 * Component
 */
export const BigLegend = (props: BigLegendProps) => {
  const { bigLegendData, testId = 'BigLegendTestId', isLoading, style, ...bigLegendItemPropsToOverwrite } = props;

  return (
    <ComponentContainer className={classNames(styles.bigLegendContainer)} style={style} testId={testId}>
      <Render if={isLoading}>
        <ChartsPlaceholder />
      </Render>

      <Render if={!isLoading}>
        {bigLegendData.map((element, idx) => {
          return (
            <BigLegendItem
              key={idx}
              {...element}
              {...bigLegendItemPropsToOverwrite}
              style={element.style ?? undefined}
            />
          );
        })}
      </Render>
    </ComponentContainer>
  );
};
