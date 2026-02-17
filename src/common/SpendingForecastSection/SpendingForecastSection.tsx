import { useFormatNumberWithCurrency } from '@custom-hooks/use-format-number-with-currency';
import { alignItemsCenter, dFlex, mb0_5, p1_5, pl1_5 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { FontWeights, Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';
import SVG from 'react-inlinesvg';

import Trigger from './images/Trigger.svg';
import styles from './SpendingForecastSection.module.scss';

export interface SpendingForecastSectionProps {
  budgetSelected: number;
}

export const SpendingForecastSection = (props: SpendingForecastSectionProps) => {
  const { budgetSelected } = props;
  //@todo: put the correct parameters to the useFormatNumberWithCurrency method, used null/null for building purposes
  const formatNumberWithCurrency = useFormatNumberWithCurrency(null, null);

  return (
    <ComponentContainer>
      <div className={classNames(dFlex, alignItemsCenter, styles.spendingForecastContainer, p1_5)}>
        <div>
          <SVG width="56" height="56" src={Trigger} />
        </div>
        <div className={classNames(pl1_5)}>
          <Text className={classNames(mb0_5)} testId="title" fontWeight={FontWeights.medium} type={TextTypes.textHelp}>
            Spending forecast
          </Text>
          <Text
            testId="description"
            type={TextTypes.textCaption}
            replacements={{
              budget_selected: formatNumberWithCurrency(budgetSelected),
              monthly_budget: formatNumberWithCurrency(budgetSelected * 30),
            }}
          >
            Based on your set daily budget (%budget_selected%), we forecast that you will spend a maximum of
            %monthly_budget% per month. You will be charged depending on your actual spending at your next billing.
          </Text>
        </div>
      </div>
    </ComponentContainer>
  );
};
