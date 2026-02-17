import { FontWeights, Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

export interface ActionCardInfoProps {
  notEnoughKeywords?: boolean;
  adGroupDisapproved?: boolean;
  adGroupNotRunning?: boolean;
  text?: string;
}

const actionCardStatusInfo = (
  notEnoughKeywords?: boolean,
  adGroupDisapproved?: boolean,
  adGroupNotRunning?: boolean,
  text?: string,
) => {
  if (text) {
    return (
      <Text color={'--e900'} fontWeight={FontWeights.regular} type={TextTypes.textHelp}>
        {text}
      </Text>
    );
  }
  switch (true) {
    case notEnoughKeywords:
      return (
        <Text color={'--e900'} fontWeight={FontWeights.regular} type={TextTypes.textHelp}>
          {"This ad doesn't have enough keywords assigned"}
        </Text>
      );
    case adGroupDisapproved:
      return (
        <Text color={'--e900'} fontWeight={FontWeights.regular} type={TextTypes.textHelp}>
          {"Currently, your ad isn't running. To activate it, check its content and fix the errors found."}
        </Text>
      );
    case adGroupNotRunning:
      return (
        <Text color={'--s900'} fontWeight={FontWeights.regular} type={TextTypes.textHelp}>
          {'This ad is active but not running while the campaign is paused.'}
        </Text>
      );
  }
};

export const ActionCardInfo = (props: ActionCardInfoProps) => {
  const { notEnoughKeywords, adGroupDisapproved, adGroupNotRunning, text } = props;

  return <>{actionCardStatusInfo(notEnoughKeywords, adGroupDisapproved, adGroupNotRunning, text)}</>;
};
