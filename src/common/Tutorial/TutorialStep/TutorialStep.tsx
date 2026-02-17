import {
  alignItemsCenter,
  dFlexColumn,
  dFlexColumnReverse,
  gap3,
  gap4,
  justifyContentCenter,
  pb8,
  pt3,
  pt4,
} from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { AnimatedConditional } from '@vanguard/AnimatedConditional/AnimatedConditional';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { FontWeights, LinkReplacements, Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

export interface TutorialStepProps {
  title: string;
  description: string;
  description2?: string;
  descriptionOnTop?: boolean;
  descriptionLinks?: LinkReplacements;
  component?: React.ReactNode;
}

export const TutorialStep = (props: TutorialStepProps) => {
  const { title, description, description2, descriptionOnTop, descriptionLinks, component } = props;

  const DetailsSection = () => {
    return (
      <div>
        <Text textAlign={'center'}>{description}</Text>
        <AnimatedConditional condition={!!description2}>
          <Text className={classNames(pt3)} textAlign={'center'} links={descriptionLinks}>
            {description2}
          </Text>
        </AnimatedConditional>
      </div>
    );
  };

  const PreviewSection = () => {
    return (
      <div className={classNames(dFlexColumn, alignItemsCenter, justifyContentCenter, gap4)}>
        {component && <div className={classNames(pt4, pb8)}>{component}</div>}
      </div>
    );
  };

  return (
    <ComponentContainer className={classNames(dFlexColumn, alignItemsCenter, justifyContentCenter, gap3)}>
      <Text textAlign={'center'} type={TextTypes.heading4} fontWeight={FontWeights.bold}>
        {title}
      </Text>
      <div
        className={classNames(
          descriptionOnTop ? dFlexColumnReverse : dFlexColumn,
          alignItemsCenter,
          justifyContentCenter,
          gap3,
        )}
      >
        {<PreviewSection />}
        {<DetailsSection />}
      </div>
    </ComponentContainer>
  );
};
