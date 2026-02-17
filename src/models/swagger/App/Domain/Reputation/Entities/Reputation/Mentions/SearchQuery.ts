export const SearchQueryObjectType = {
  App_Domain_Reputation_Entities_Reputation_Mentions_SearchQuery:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\SearchQuery',
};

export const SearchQueryObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Mentions_SearchQuery:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\SearchQuery',
} as const;

export type SearchQuery = {
  /**
   * The query text
   */
  query?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SearchQueryObjectType)[keyof typeof SearchQueryObjectType];
};
