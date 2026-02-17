import { FontWeights, Text, TextReplacements } from '@vanguard/Text/Text';
import React from 'react';

export interface LabelProps {
  value: string | undefined;
  replacements?: TextReplacements;
  fontWeight?: FontWeights;
}

export const Label = (props: LabelProps) => {
  const { value, replacements, fontWeight = FontWeights.bold } = props;

  return (
    <Text fontWeight={fontWeight} color={'--n700'} replacements={replacements}>
      {value}
    </Text>
  );
};
