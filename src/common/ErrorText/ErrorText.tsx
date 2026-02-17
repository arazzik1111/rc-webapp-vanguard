import { AnimatedConditional } from '@vanguard/AnimatedConditional/AnimatedConditional';
import { Text } from '@vanguard/Text/Text';
import React from 'react';

export interface ErrorTextProps {
  text: string;
  className?: string;
}

export const ErrorText = (props: ErrorTextProps) => {
  const { text, className } = props;

  return (
    <AnimatedConditional className={className} condition={!!text && text.length > 0}>
      <Text color={'--e500'}>{text}</Text>
    </AnimatedConditional>
  );
};
