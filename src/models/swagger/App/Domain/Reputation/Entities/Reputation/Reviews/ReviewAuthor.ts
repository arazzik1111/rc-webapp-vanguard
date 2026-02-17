export const ReviewAuthorObjectType = {
  App_Domain_Reputation_Entities_Reputation_Reviews_ReviewAuthor:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\ReviewAuthor',
};

export const ReviewAuthorObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Reviews_ReviewAuthor:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\ReviewAuthor',
} as const;

export type ReviewAuthor = {
  /**
   * The Authors name
   */
  name?: string;
  /**
   * The Authors external Account id on the particular directory
   */
  externalId?: string;
  /**
   * The Authors email if it exists
   */
  email?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewAuthorObjectType)[keyof typeof ReviewAuthorObjectType];
};
