export const AITextTone = {
  ADAPTIVE: 'ADAPTIVE',
  FORMAL: 'FORMAL',
  PROFESSIONAL: 'PROFESSIONAL',
  INFORMATIVE: 'INFORMATIVE',
  FRIENDLY: 'FRIENDLY',
  BOLD: 'BOLD',
  WITTY: 'WITTY',
  ADVENTUROUS: 'ADVENTUROUS',
  PERSUASIVE: 'PERSUASIVE',
};

export const AITextToneStrict = {
  ADAPTIVE: 'ADAPTIVE',
  FORMAL: 'FORMAL',
  PROFESSIONAL: 'PROFESSIONAL',
  INFORMATIVE: 'INFORMATIVE',
  FRIENDLY: 'FRIENDLY',
  BOLD: 'BOLD',
  WITTY: 'WITTY',
  ADVENTUROUS: 'ADVENTUROUS',
  PERSUASIVE: 'PERSUASIVE',
} as const;

export const AITextOutputFormat = {
  HTML_TAGS: 'HTML_TAGS',
  MARKDOWN: 'MARKDOWN',
};

export const AITextOutputFormatStrict = {
  HTML_TAGS: 'HTML_TAGS',
  MARKDOWN: 'MARKDOWN',
} as const;

export const AITextObjectType = {
  App_Domain_AI_Entities_Text_AIText: 'App\\Domain\\AI\\Entities\\Text\\AIText',
};

export const AITextObjectTypeStrict = {
  App_Domain_AI_Entities_Text_AIText: 'App\\Domain\\AI\\Entities\\Text\\AIText',
} as const;

export type AIText = {
  /**
   * The original text that adjustments or operations is applied on
   */
  text?: string;
  /**
   * The tone in which the text is generated
   *  Allowed Values:
   * -   `ADAPTIVE`
   * -   `FORMAL`
   * -   `PROFESSIONAL`
   * -   `INFORMATIVE`
   * -   `FRIENDLY`
   * -   `BOLD`
   * -   `WITTY`
   * -   `ADVENTUROUS`
   * -   `PERSUASIVE`
   *
   */
  tone?: (typeof AITextTone)[keyof typeof AITextTone];
  /**
   * The output format of the adjusted text
   *  Allowed Values:
   * -   `HTML_TAGS`: Output format for the generated text in HTML
   * -   `MARKDOWN`: Output format for the generated text in Markdown
   *
   */
  outputFormat?: (typeof AITextOutputFormat)[keyof typeof AITextOutputFormat];
  /**
   * The instruction for text adjustment
   */
  adjustmentInstruction?: string;
  /**
   * The adjusted text
   */
  adjustedText?: string;
  /**
   * Business Context for Adjusting Text
   */
  businessContext?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AITextObjectType)[keyof typeof AITextObjectType];
};
