import { AIText } from '@models/swagger/App/Domain/AI/Entities/Text/AIText';
import { Keywords } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keywords';

export const AITextAdjustRequestDtoTone = {
  FORMAL: 'FORMAL',
  PROFESSIONAL: 'PROFESSIONAL',
  INFORMATIVE: 'INFORMATIVE',
  FRIENDLY: 'FRIENDLY',
  BOLD: 'BOLD',
  WITTY: 'WITTY',
  ADVENTUROUS: 'ADVENTUROUS',
  PERSUASIVE: 'PERSUASIVE',
};

export const AITextAdjustRequestDtoToneStrict = {
  FORMAL: 'FORMAL',
  PROFESSIONAL: 'PROFESSIONAL',
  INFORMATIVE: 'INFORMATIVE',
  FRIENDLY: 'FRIENDLY',
  BOLD: 'BOLD',
  WITTY: 'WITTY',
  ADVENTUROUS: 'ADVENTUROUS',
  PERSUASIVE: 'PERSUASIVE',
} as const;

export type AITextAdjustRequestDto = {
  aiText: AIText;
  /**
   * The specific command given to adjust the AI Text
   */
  command?: string;
  /**
   * Whether to expand the adjusted AI Text or not
   */
  expand?: boolean;
  /**
   * Whether to shorten the adjusted AI Text or not
   */
  shorten?: boolean;
  /**
   * Whether to generate hashtags for the adjusted AI Text or not
   */
  generateHashtags?: boolean;
  /**
   * Used mostly in X context so that we keep max 250 chars and one hashtag
   */
  keepShort?: boolean;
  /**
   * The tone of the adjusted AI Text
   *  Allowed Values:
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
  tone?: (typeof AITextAdjustRequestDtoTone)[keyof typeof AITextAdjustRequestDtoTone];
  keywordsToIntegrate?: Keywords;
};
