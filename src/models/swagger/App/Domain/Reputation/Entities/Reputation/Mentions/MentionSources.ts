import { MentionSource } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/MentionSource';

export const MentionSourcesObjectType = {
  App_Domain_Reputation_Entities_Reputation_Mentions_MentionSources:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\MentionSources',
};

export const MentionSourcesObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Mentions_MentionSources:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\MentionSources',
} as const;

export type MentionSources = {
  elements?: MentionSource[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MentionSourcesObjectType)[keyof typeof MentionSourcesObjectType];
};
