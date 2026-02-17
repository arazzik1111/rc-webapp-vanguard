import { CardType, StatisticsBoardItemProps } from '@common/StatisticsBoard/StatisticsBoardItem/StatisticsBoardItem';
import { pb0_5, pb1_5, pl3, pr3, pt0_5, pt3 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { StatusBadge } from '@vanguard/StatusBadge/StatusBadge';
import { FontWeights, Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

import styles from './ComingSoonCard.module.scss';
import { ChatIllustration } from './illustrations/engagement/ChatIllustration/ChatIllustration';
import { EventsIllustration } from './illustrations/engagement/EventsIllustration/EventsIllustration';

export interface ComingSoonCardProps {
  type?: CardType;
}

export const ComingSoonCard = (props: ComingSoonCardProps) => {
  const { type } = props;

  const getComingSoonCardDetails = (cardType?: CardType): StatisticsBoardItemProps => {
    switch (cardType) {
      case CardType.chat:
        return {
          type: CardType.chat,
          title: 'Introducing chat',
          description:
            'Say goodbye to scattered messages with the new chat feature that centralises all your messages from Google within our app — enjoy faster and more organised communication.',
          comingSoonIllustration: <ChatIllustration />,
        };
        break;
      case CardType.events:
        return {
          type: CardType.events,
          title: 'Events made easy',
          description:
            'Enjoy a super-fast event creation process with our re-designed events feature. Schedule and track upcoming and recent events effortlessly for hassle-free management and a smoother workflow.',
          comingSoonIllustration: <EventsIllustration />,
        };
        break;
      default:
        return {
          type: CardType.chat,
          title: 'Introducing chat',
          description:
            'Say goodbye to scattered messages with the new chat feature that centralises all your messages from Google within our app — enjoy faster and more organised communication.',
        };
    }
  };

  return (
    <ComponentContainer className={classNames(styles.container)}>
      <div className={styles.card}>
        <div className={classNames(pt3, pl3, pr3)}>
          <StatusBadge
            hideIcon={true}
            status={'scheduled'}
            text={'Coming soon'}
            className={classNames(styles.statusBadge)}
          />
          <Text
            fontWeight={FontWeights.bold}
            type={TextTypes.text}
            color={'--fn-fg'}
            className={classNames(styles.text, pb0_5, pt0_5)}
          >
            {getComingSoonCardDetails(type).title}
          </Text>

          <Text
            fontWeight={FontWeights.regular}
            type={TextTypes.textHelp}
            color={'--fn-fg-light'}
            className={classNames(styles.text, pb1_5)}
          >
            {getComingSoonCardDetails(type).description}
          </Text>
        </div>
        {getComingSoonCardDetails(type).comingSoonIllustration}
      </div>
    </ComponentContainer>
  );
};
