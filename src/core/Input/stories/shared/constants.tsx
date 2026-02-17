import { disableControls } from '@test-utils/get-storybook-decorator';

export const INPUT_STORY_DISABLED_CONTROLS = [
  'id',
  'className',
  'onFocus',
  'onBlur',
  'onKeyUp',
  'onKeyDown',
  'onInput',
  'onChange',
  'formconfig',
  'inputRef',
  'inputClassName',
  'testId',
  'textFieldProps',
];

export const INPUT_STORY_CONTROLS = {
  argTypes: {
    ...disableControls(INPUT_STORY_DISABLED_CONTROLS),
    value: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
  },
};
