import { FacebookPage } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Pages/FacebookPage';

export const FacebookPagesObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Pages_FacebookPages:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Pages\\FacebookPages',
};

export const FacebookPagesObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Pages_FacebookPages:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Pages\\FacebookPages',
} as const;

export type FacebookPages = {
  /**
   * The string to search for
   */
  searchInput?: string;
  /**
   * The language code the search results will be returned in
   */
  languageCode?: string;
  elements?: FacebookPage[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookPagesObjectType)[keyof typeof FacebookPagesObjectType];
};
