export const MentionAuthorObjectType = {
  App_Domain_Reputation_Entities_Reputation_Mentions_MentionAuthor:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\MentionAuthor',
};

export const MentionAuthorObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Mentions_MentionAuthor:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\MentionAuthor',
} as const;

export type MentionAuthor = {
  /**
   * The Authors name
   */
  name?: string;
  /**
   * The Authors external Account id on the particular directory
   */
  externalId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MentionAuthorObjectType)[keyof typeof MentionAuthorObjectType];
};
