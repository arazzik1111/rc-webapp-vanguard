import { Mention } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/Mention';

export const MentionsObjectType = {
  App_Domain_Reputation_Entities_Reputation_Mentions_Mentions:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\Mentions',
};

export const MentionsObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Mentions_Mentions:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\Mentions',
} as const;

export type Mentions = {
  /**
   * For long mentions lists (>100 Mentions), the date after which next set comes
   */
  nextPageAfterDateTime?: string;
  /**
   * DateTime of first Mention
   */
  startDate?: string;
  /**
   * DateTime of last Mention
   */
  endDate?: string;
  elements?: Mention[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MentionsObjectType)[keyof typeof MentionsObjectType];
};
