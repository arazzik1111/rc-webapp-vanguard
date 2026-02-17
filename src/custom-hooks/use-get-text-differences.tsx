import { dFlex, flexWrap } from '@globalStyles';
import { Text } from '@vanguard/Text/Text';
import { TextHighlighted } from '@vanguard/TextHighlighted/TextHighlighted';
import classNames from 'classnames';
import React from 'react';

export enum DiffMethod {
  Chars = 'diffChars',
  Words = 'diffWords',
  WordsWithSpace = 'diffWordsWithSpace',
  Lines = 'diffLines',
  TrimmedLines = 'diffTrimmedLines',
  Sentences = 'diffSentences',
  CSS = 'diffCss',
}

export const useGetTextDifferences = (): ((
  originalValue: string,
  currentValue: string,
  color: string,
) => React.ReactNode) => {
  return (originalValue, currentValue, color) => {
    const Diff = require('diff');
    const diff = Diff[DiffMethod.Chars](originalValue, currentValue);

    const words: React.ReactNode[] = [];

    diff.map((part: any, index: number) => {
      if (part.removed) {
        words.push(
          <TextHighlighted
            highlightWords={[part.value.replace(' ', '\u00A0')]}
            translate={false}
            highlightColor={color}
            key={index}
          >
            {part.value.replace(' ', '\u00A0')}
          </TextHighlighted>,
        );
      } else if (!part.added) {
        words.push(
          <Text translate={false} key={index}>
            {part.value.replace(' ', '\u00A0')}
          </Text>,
        );
      }
    });

    return <div className={classNames(dFlex, flexWrap)}>{words}</div>;
  };
};
