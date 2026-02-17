import { SearchQuery } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/SearchQuery';

export const SearchQueriesObjectType = {
  App_Domain_Reputation_Entities_Reputation_Mentions_SearchQueries:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\SearchQueries',
};

export const SearchQueriesObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Mentions_SearchQueries:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Mentions\\SearchQueries',
} as const;

export type SearchQueries = {
  elements?: SearchQuery[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SearchQueriesObjectType)[keyof typeof SearchQueriesObjectType];
};
