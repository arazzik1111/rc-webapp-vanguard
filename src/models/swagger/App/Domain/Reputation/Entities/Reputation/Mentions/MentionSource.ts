import { SearchQueries } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/SearchQueries';

export const MentionSourceSource = {
  google: 'google',
  facebook: 'facebook',
  instagram: 'instagram',
  x: 'x',
};

export const MentionSourceSourceStrict = {
  google: 'google',
  facebook: 'facebook',
  instagram: 'instagram',
  x: 'x',
} as const;

export const MentionSourceObjectType = {
  App_Domain_Reputation_Entities_Reputation_Mentions_MentionSource:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\MentionSource',
};

export const MentionSourceObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Mentions_MentionSource:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\MentionSource',
} as const;

export type MentionSource = {
  /**
   * The source of the mention
   *  Allowed Values:
   * -   `google`
   * -   `facebook`
   * -   `instagram`
   * -   `x`
   *
   */
  source?: (typeof MentionSourceSource)[keyof typeof MentionSourceSource];
  /**
   * The business name of the mention
   */
  businessName?: string;
  /**
   * The business id of the mention
   */
  businessId?: string;
  searchQueries?: SearchQueries;
  /**
   * The limit
   */
  limit?: number;
  /**
   * The date and time when this entity was created/updated
   */
  updatedAt?: string;
  /**
   * The external ID
   */
  externalId?: string;
  /**
   * The language code
   */
  languageCode?: string;
  /**
   * The country code
   */
  countryCode?: string;
  /**
   * The location
   */
  location?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MentionSourceObjectType)[keyof typeof MentionSourceObjectType];
};
