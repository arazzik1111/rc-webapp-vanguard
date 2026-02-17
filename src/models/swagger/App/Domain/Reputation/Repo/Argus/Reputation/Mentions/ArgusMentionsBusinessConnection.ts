import { MentionSource } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/MentionSource';

export const ArgusMentionsBusinessConnectionObjectType = {
  App_Domain_Reputation_Repo_Argus_Reputation_Mentions_ArgusMentionsBusinessConnection:
    'App\\Domain\\Reputation\\Repo\\Argus\\Reputation\\Mentions\\ArgusMentionsBusinessConnection',
};

export type ArgusMentionsBusinessConnection = {
  elements?: MentionSource[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ArgusMentionsBusinessConnectionObjectType)[keyof typeof ArgusMentionsBusinessConnectionObjectType];
};
