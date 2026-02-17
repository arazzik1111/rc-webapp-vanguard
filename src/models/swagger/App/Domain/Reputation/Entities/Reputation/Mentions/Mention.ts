import { MentionAuthor } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/MentionAuthor';
import { SearchQueries } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/SearchQueries';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const MentionSentiment = {
  neutral: 'neutral',
  positive: 'positive',
  negative: 'negative',
};

export const MentionSentimentStrict = {
  neutral: 'neutral',
  positive: 'positive',
  negative: 'negative',
} as const;

export const MentionObjectType = {
  App_Domain_Reputation_Entities_Reputation_Mentions_Mention:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\Mention',
};

export const MentionObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Mentions_Mention:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\Mention',
} as const;

export type Mention = {
  /**
   * The sentiment of the mention
   *  Allowed Values:
   * -   `neutral`
   * -   `positive`
   * -   `negative`
   *
   */
  sentiment?: (typeof MentionSentiment)[keyof typeof MentionSentiment];
  /**
   * The mention external ID
   */
  externalId?: string;
  /**
   * The mention text
   */
  text?: string;
  /**
   * The mention source
   */
  source?: string;
  /**
   * The mention permalink URL.
   */
  permalinkUrl?: string;
  /**
   * The mention business id from Argus
   */
  businessId?: string;
  author?: MentionAuthor;
  /**
   * The source type: google/web or social
   */
  sourceType?: string;
  /**
   * The mention business name
   */
  businessName?: string;
  searchQueries?: SearchQueries;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MentionObjectType)[keyof typeof MentionObjectType];
  changeHistory?: ChangeHistory;
};
