import { Keywords } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keywords';
import { LocationKeyword } from '@models/swagger/App/Domain/Presence/Entities/Locations/Keywords/LocationKeyword';

export const GoogleLocationKeywordsStatisticsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Statistics_GoogleLocationKeywordsStatistics:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Statistics\\GoogleLocationKeywordsStatistics',
};

export const GoogleLocationKeywordsStatisticsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Statistics_GoogleLocationKeywordsStatistics:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Statistics\\GoogleLocationKeywordsStatistics',
} as const;

export type GoogleLocationKeywordsStatistics = {
  keywords?: Keywords;
  elements?: LocationKeyword[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationKeywordsStatisticsObjectType)[keyof typeof GoogleLocationKeywordsStatisticsObjectType];
};
