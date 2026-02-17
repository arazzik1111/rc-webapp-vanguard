import React from 'react';

import {
  InputAdornmentProps,
  InputBase,
  InputCounterProps,
  InputEventsProps,
  InputFormConfigProps,
  InputHelperLinkProps,
  InputHighlightsProps,
  InputLabelProps,
  InputTextareaProps,
  InputValueProps,
  PopoverHighlightType,
} from '../_internal/InputBase/InputBase';
import { ComponentContainer } from '../ComponentContainer/ComponentContainer';

export type TextareaProps = {
  value?: string;
  className?: string;
  testId?: string;
  popoverHighlight?: PopoverHighlightType;
} & Omit<InputValueProps, 'value'> &
  Omit<InputTextareaProps, 'multiline'> &
  InputLabelProps &
  InputCounterProps &
  InputHighlightsProps &
  InputEventsProps &
  InputFormConfigProps &
  InputAdornmentProps &
  InputHelperLinkProps;

export const Textarea = (props: TextareaProps) => {
  const {
    className,
    counter = true,
    allowBreakLines = false,
    highlightUrl = true,
    highlightWords,
    highlightLengthExceeded = true,
    minRows,
    maxRows,
    popoverHighlight,
    testId,
    labelType = 'static',
  } = props;

  /**
   * Return view
   */
  return (
    <ComponentContainer style={{ width: '100%' }} className={className}>
      <InputBase
        testId={testId}
        formFieldType={'Textarea'}
        counter={counter}
        multiline={true}
        popoverHighlight={popoverHighlight}
        allowBreakLines={allowBreakLines}
        highlightUrl={highlightUrl}
        highlightWords={highlightWords}
        highlightLengthExceeded={highlightLengthExceeded}
        labelType={labelType}
        minRows={minRows}
        maxRows={maxRows}
        {...props}
      />
    </ComponentContainer>
  );
};

export function getRowsBasedOnContent(content: string, minRows: number, maxRows: number) {}
