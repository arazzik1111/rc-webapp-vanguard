import { Locale } from '@models/swagger/App/Domain/Common/Entities/Locales/Locale';

export const AIWritingStyleTone = {
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

export const AIWritingStyleToneStrict = {
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

export const AIWritingStyleCreativity = {
  BALANCED: 'BALANCED',
  CREATIVE: 'CREATIVE',
  SUCCINCT: 'SUCCINCT',
};

export const AIWritingStyleCreativityStrict = {
  BALANCED: 'BALANCED',
  CREATIVE: 'CREATIVE',
  SUCCINCT: 'SUCCINCT',
} as const;

export const AIWritingStyleObjectType = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AIWritingStyle:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AIWritingStyle',
};

export const AIWritingStyleObjectTypeStrict = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AIWritingStyle:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AIWritingStyle',
} as const;

export type AIWritingStyle = {
  /**
   * If this is set to true, on operations where content has to be rewritten, Locale is used only when content language cannot be determined
   */
  autoDetectLocale?: boolean;
  locale?: Locale;
  /**
   * The tone in which the text is generated
   *  Allowed Values:
   * -   `ADAPTIVE`: When the response tone is adaptive, the Model adapts the response tone according to the user input tone for the generated text
   * -   `FORMAL`: Formal response tone for the generated text
   * -   `PROFESSIONAL`: Professional response tone for the generated text
   * -   `INFORMATIVE`: Informative response tone for the generated text
   * -   `FRIENDLY`: Friendly response tone for the generated text
   * -   `BOLD`: Bold response tone for the generated text
   * -   `WITTY`: Witty response tone for the generated text
   * -   `ADVENTUROUS`: Adventurous response tone for the generated text
   * -   `PERSUASIVE`: Persuasive response tone for the generated text
   *
   */
  tone?: (typeof AIWritingStyleTone)[keyof typeof AIWritingStyleTone];
  /**
   *
   *  Allowed Values:
   * -   `BALANCED`: The Model will use a more balanced approach in generating text
   * -   `CREATIVE`: The Model will use a more creative approach in generating text
   * -   `SUCCINCT`: The Model will use a more succinct approach in generating text
   *
   */
  creativity?: (typeof AIWritingStyleCreativity)[keyof typeof AIWritingStyleCreativity];
  genderNeutralWriting?: boolean;
  /**
   * Special instructions for gender neutral writing,
   * e.g. Gendersternchen, Gender-Gap (Unterstrich), Doppelpunkt, Singular "They", Alternating Between Genders etc.
   */
  genderNeutralWritingInstructions?: string;
  /**
   * Possibility to set individual instructions, e.g. write like William Shakespeare
   */
  individualInstructions?: string;
  /**
   * If true, setting is considered, otherwise it is omitted
   */
  considerInPrompt?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIWritingStyleObjectType)[keyof typeof AIWritingStyleObjectType];
};
