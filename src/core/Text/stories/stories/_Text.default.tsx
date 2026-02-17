import { rcWindow } from '@stores/window.store';
import { StoryObj } from '@storybook/react';
import { disableControls } from '@test-utils/get-storybook-decorator';
import { mapStorybookActionToProps } from '@test-utils/map-storybook-action-to-props';
import { FontWeights, Text, TextProps, TextTypes } from '@vanguard/Text/Text';
import React from 'react';
import { expect, within } from 'storybook/test';

export type Story = StoryObj<typeof Text>;

export const TEXT_STORY_TRANSLATION_DATA = {
  Test: 'This was translated text',
  'Contact <link1>support team</link1>': 'This was translated text with <link1>support team translated link</link1>',
  'Contact toTranslate <link1>': 'Contact TRANSLATED <link1>',
  'Support team toTranslate': 'Support team translated',
};

// Set translation data on window
rcWindow['TranslationsData'] = TEXT_STORY_TRANSLATION_DATA;

export const TEXT_STORY_calculateTextSize = (max: number, min: number, viewportWidth: number) => {
  const fluidTypeMax = max; // Calculate the max size
  const fluidTypeMin = min; // Min size
  const fluidTypeTarget = 0.05 * viewportWidth; // Target size as 5% of viewport width

  // Calculate the resulting text size
  const textSize = Math.min(fluidTypeMax, Math.max(fluidTypeMin, fluidTypeTarget));
  return `${textSize}px`;
};

export const getTextBySize = (size: number) => {
  const gibberishWords = [
    'lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'sed',
    'do',
    'eiusmod',
    'tempor',
    'incididunt',
    'ut',
    'labore',
    'et',
    'dolore',
    'magna',
    'aliqua',
  ];

  let text = '';
  for (let i = 0; i < size; i++) {
    text += `${gibberishWords[Math.floor(Math.random() * gibberishWords.length)]} `;
  }
  return text.trim();
};

export const DEFAULT_TEXT: string = 'Default text';
export const defaultProps: TextProps = {
  children: DEFAULT_TEXT,
};

export type AllowedElements =
  | 'span'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'a'
  | 'li'
  | 'em'
  | 'mark'
  | 'strong'
  | 'b';

export type HeadingSizes = 'text' | 'h1' | 'h2' | 'h3' | 'h4' | 'intro' | 'help' | 'caption' | 'display1' | 'display2';

export const TEXT_STORY_DISABLED_CONTROLS = ['replacements', 'testId', 'className', 'links'];

export const TEXT_STORY_CONTROLS = {
  argTypes: {
    ...disableControls(TEXT_STORY_DISABLED_CONTROLS),
    color: {
      control: { type: 'color' },
    },
    children: {
      name: 'value',
      control: { type: 'text' },
      defaultValue: 'This is a text example...',
    },
    ellipsis: {
      defaultValue: true,
    },
    textTight: {
      defaultValue: false,
    },
    fontWeight: {
      control: 'radio',
      options: Object.values(FontWeights),
    },
    type: {
      control: 'select',
      options: Object.values(TextTypes),
    },
    translate: {
      control: 'boolean',
    },
    seeMore: {
      control: 'boolean',
    },
    maxChar: {
      control: 'number',
    },
  },
};

export const textTest = async ({
  canvasElement,
  textToFind,
  fontFamily,
  toBeVisible,
  toHaveItalic,
  textDecoration,
  color,
  fontWeight,
  elementType,
  fontSize,
}: {
  canvasElement: HTMLElement;
  textToFind: string;
  toBeVisible: boolean;
  fontWeight: string;
  toHaveItalic: boolean;
  textDecoration: false | string;
  color: string;
  fontFamily: string;
  elementType: AllowedElements;
  fontSize: string;
}) => {
  const { expectElementValueToBeCssVar } = await import('@test-utils/expect-element-style-to-be-ccs-var');

  const canvas = within(canvasElement);
  const textEl = canvas.getByText(textToFind);

  // expect text to be visible
  if (toBeVisible) {
    await expect(textEl).toBeVisible();
  } else {
    await expect(textEl).not.toBeVisible();
  }

  // expect text weight to be 400
  await expect(textEl).toHaveStyle(`font-weight: ${fontWeight}`);

  if (toHaveItalic) {
    await expect(textEl).toHaveStyle('font-style: italic');
  } else {
    await expect(textEl).not.toHaveStyle('font-style: italic');
  }

  // expect no text decoration
  if (!textDecoration) {
    await expect(textEl).toHaveStyle({ textDecorationLine: 'none' });
  } else {
    await expect(textEl).toHaveStyle({ textDecorationLine: textDecoration });
  }

  await expectElementValueToBeCssVar(textEl, 'color', color);
  await expectElementValueToBeCssVar(textEl, 'font-family', fontFamily);
  await expectElementValueToBeCssVar(textEl, 'font-size', fontSize);

  // New test to determine the type of element
  const textElementType = textEl.tagName.toLowerCase();
  await expect(textElementType).toBe(elementType);
};

export const balancedTextTest = (type: TextTypes, width: number = 500): Story => {
  return {
    render: (props) => {
      const newProps = mapStorybookActionToProps(props, {
        type,
      });

      return (
        <div style={{ width }}>
          <Text fontWeight={FontWeights.bold}>Balanced:</Text>
          <Text {...newProps} testId="balanced" balanced={true}>
            React: A JavaScript library for building user interfaces
          </Text>
          <hr />
          <Text fontWeight={FontWeights.bold}>Not Balanced:</Text>
          <Text {...newProps} balanced={false} testId="not-balanced">
            React: A JavaScript library for building user interfaces
          </Text>
        </div>
      );
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      const balancedText = canvas.getByTestId('balanced');
      const notBalancedText = canvas.getByTestId('not-balanced');

      // Perform visual comparisons or assertions here
      await expect(balancedText).toBeInTheDocument();
      await expect(notBalancedText).toBeInTheDocument();

      // Check the computed styles to ensure visual difference
      const balancedParent = balancedText.parentElement;
      const notBalancedParent = notBalancedText.parentElement;

      // Ensure balancedParent and notBalancedParent are not null
      if (!balancedParent || !notBalancedParent) {
        throw new Error('Parent elements of balanced or not balanced text not found');
      }

      const balancedParentDisplay = window.getComputedStyle(balancedParent).display;
      const notBalancedParentDisplay = window.getComputedStyle(notBalancedParent).display;

      // Ensure they have different display properties
      await expect(balancedParentDisplay).toBe('inline-block');
      await expect(notBalancedParentDisplay).not.toBe('inline-block');
    },
  };
};

export const TextDisplayTest = (textHeadingType: HeadingSizes): Story => {
  let type = TextTypes.text;
  let size = '-1px';
  const parseElements = (size: HeadingSizes): AllowedElements => {
    switch (size) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
        return size;
      case 'intro':
      case 'help':
      case 'caption':
      case 'text':
        return 'span';
      case 'display1':
      case 'display2':
        return 'h1';
      default:
        throw new Error('Invalid heading textHeadingType');
    }
  };
  const element: AllowedElements = parseElements(textHeadingType);

  switch (textHeadingType) {
    case 'text':
      type = TextTypes.text;
      size = TEXT_STORY_calculateTextSize(16, 16, window.innerWidth);
      break;
    case 'h1':
      type = TextTypes.heading1;
      size = TEXT_STORY_calculateTextSize(48 - 4, 32, window.innerWidth);
      break;
    case 'h2':
      type = TextTypes.heading2;
      size = TEXT_STORY_calculateTextSize(32 + 8, 32 - 4, window.innerWidth);

      break;
    case 'h3':
      type = TextTypes.heading3;
      size = TEXT_STORY_calculateTextSize(32, 24 + 2, window.innerWidth);

      break;
    case 'h4':
      type = TextTypes.heading4;
      size = TEXT_STORY_calculateTextSize(32 - 4, 24, window.innerWidth);

      break;
    case 'intro':
      type = TextTypes.textIntro;
      size = TEXT_STORY_calculateTextSize(20, 18, window.innerWidth);

      break;
    case 'help':
      type = TextTypes.textHelp;
      size = TEXT_STORY_calculateTextSize(14, 14, window.innerWidth);

      break;
    case 'caption':
      type = TextTypes.textCaption;
      size = TEXT_STORY_calculateTextSize(12, 12, window.innerWidth);
      break;
    case 'display1':
      type = TextTypes.display1;
      size = TEXT_STORY_calculateTextSize(72, 56 - 4, window.innerWidth);
      break;
    case 'display2':
      type = TextTypes.display2;
      size = TEXT_STORY_calculateTextSize(64, 48 - 4, window.innerWidth);
      break;
    default:
      throw new Error('Invalid heading textHeadingType');
  }
  return {
    args: {
      ...defaultProps,
      children: `This is a ${textHeadingType} text <em>with em</em> <b>and with bold</b> <b><em>and with both</em></b>`,
      type: type,
    },
    play: async ({ canvasElement, args }) => {
      await textTest({
        canvasElement: canvasElement,
        textToFind: `This is a ${textHeadingType} text`,
        color: '--text-color',
        fontFamily: '--theme-typeface',
        fontWeight: '400',
        textDecoration: false,
        toBeVisible: true,
        toHaveItalic: false,
        elementType: element,
        fontSize: size,
      });
      await textTest({
        canvasElement: canvasElement,
        textToFind: 'with em',
        color: '--em-color',
        fontFamily: '--theme-typeface',
        fontWeight: '400',
        textDecoration: false,
        toBeVisible: true,
        toHaveItalic: false,
        elementType: 'em',
        fontSize: size,
      });
      await textTest({
        canvasElement: canvasElement,
        textToFind: 'and with bold',
        color: '--text-color',
        fontFamily: '--theme-typeface',
        fontWeight: '700',
        textDecoration: false,
        toBeVisible: true,
        toHaveItalic: false,
        elementType: 'b',
        fontSize: size,
      });
    },
  };
};

export { TextTypes } from '@vanguard/Text/Text';
