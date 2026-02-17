import { XLocationInsight } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/Locations/Statistics/XLocationInsight';

export const XLocationInsightsObjectType = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Statistics_XLocationInsights:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Statistics\\XLocationInsights',
};

export const XLocationInsightsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Statistics_XLocationInsights:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Statistics\\XLocationInsights',
} as const;

export type XLocationInsights = {
  elements?: XLocationInsight[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof XLocationInsightsObjectType)[keyof typeof XLocationInsightsObjectType];
};
