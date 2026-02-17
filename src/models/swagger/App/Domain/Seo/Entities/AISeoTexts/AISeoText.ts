import { Keywords } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keywords';
import { AISeoTextOptimisations } from '@models/swagger/App/Domain/Seo/Entities/AISeoTexts/Optimisations/AISeoTextOptimisations';

export const AISeoTextOptimiseContentForOption = {
  HERO_SECTION: 'HERO_SECTION',
  ABOUT_SECTION: 'ABOUT_SECTION',
  SERVICES_AND_PRODUCTS: 'SERVICES_AND_PRODUCTS',
  FAQ_SECTION: 'FAQ_SECTION',
  GENERAL: 'GENERAL',
  CONTACT: 'CONTACT',
};

export const AISeoTextOptimiseContentForOptionStrict = {
  HERO_SECTION: 'HERO_SECTION',
  ABOUT_SECTION: 'ABOUT_SECTION',
  SERVICES_AND_PRODUCTS: 'SERVICES_AND_PRODUCTS',
  FAQ_SECTION: 'FAQ_SECTION',
  GENERAL: 'GENERAL',
  CONTACT: 'CONTACT',
} as const;

export const AISeoTextTone = {
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

export const AISeoTextToneStrict = {
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

export const AISeoTextOutputFormat = {
  HTML_TAGS: 'HTML_TAGS',
  MARKDOWN: 'MARKDOWN',
};

export const AISeoTextOutputFormatStrict = {
  HTML_TAGS: 'HTML_TAGS',
  MARKDOWN: 'MARKDOWN',
} as const;

export const AISeoTextObjectType = {
  App_Domain_Seo_Entities_AISeoTexts_AISeoText: 'App\\Domain\\Seo\\Entities\\AISeoTexts\\AISeoText',
};

export const AISeoTextObjectTypeStrict = {
  App_Domain_Seo_Entities_AISeoTexts_AISeoText: 'App\\Domain\\Seo\\Entities\\AISeoTexts\\AISeoText',
} as const;

export type AISeoText = {
  /**
   * The text option to optimise content for
   *  Allowed Values:
   * -   `HERO_SECTION`: Hero Text option
   * -   `ABOUT_SECTION`: About Us Text option
   * -   `SERVICES_AND_PRODUCTS`: Services and Products Text option
   * -   `FAQ_SECTION`: Blog and Content Text option
   * -   `GENERAL`: General Text option
   * -   `CONTACT`: Contact Text option
   *
   */
  optimiseContentForOption?: (typeof AISeoTextOptimiseContentForOption)[keyof typeof AISeoTextOptimiseContentForOption];
  optimisations?: AISeoTextOptimisations;
  keywordsToInclude?: Keywords;
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
  tone?: (typeof AISeoTextTone)[keyof typeof AISeoTextTone];
  /**
   * The output format of the adjusted text
   *  Allowed Values:
   * -   `HTML_TAGS`: Output format for the generated text in HTML
   * -   `MARKDOWN`: Output format for the generated text in Markdown
   *
   */
  outputFormat?: (typeof AISeoTextOutputFormat)[keyof typeof AISeoTextOutputFormat];
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
  objectType: (typeof AISeoTextObjectType)[keyof typeof AISeoTextObjectType];
};
