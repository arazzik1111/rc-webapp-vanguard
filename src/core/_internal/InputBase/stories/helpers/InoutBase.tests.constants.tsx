import { disableControls } from '@test-utils/get-storybook-decorator';

export const INPUT_BASE_STORY_DISABLED_CONTROLS = [
  'className',
  'className',
  'testId',
  'onProhibitedWordFound',
  'onHighlightWordFound',
  'onFocus',
  'onBlur',
  'onKeyUp',
  'onKeyDown',
  'onInput',
  'onChange',
  'onClick',
  'onStepUpNumericClick',
  'onStepDownNumericClick',
  'inputRef',
  'formconfig',
  'adornment',
];

export const INPUT_BASE_STORY_CONTROLS = {
  argTypes: {
    ...disableControls(INPUT_BASE_STORY_DISABLED_CONTROLS),
    value: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    highlightWords: { control: 'check', options: ['email', 'phone', 'mail'] },
    prohibitedWords: { control: 'check', options: ['prohibitedWord1', 'prohibitedWord2', 'prohibitedWord3'] },
  },
};
