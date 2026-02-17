import { MentionSource } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/MentionSource';

export const ArgusMentionSourcesObjectType = {
  App_Domain_Reputation_Repo_Argus_Reputation_Mentions_ArgusMentionSources:
    'App\\Domain\\Reputation\\Repo\\Argus\\Reputation\\Mentions\\ArgusMentionSources',
};

export const ArgusMentionSourcesObjectTypeStrict = {
  App_Domain_Reputation_Repo_Argus_Reputation_Mentions_ArgusMentionSources:
    'App\\Domain\\Reputation\\Repo\\Argus\\Reputation\\Mentions\\ArgusMentionSources',
} as const;

export type ArgusMentionSources = {
  elements?: MentionSource[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ArgusMentionSourcesObjectType)[keyof typeof ArgusMentionSourcesObjectType];
};
