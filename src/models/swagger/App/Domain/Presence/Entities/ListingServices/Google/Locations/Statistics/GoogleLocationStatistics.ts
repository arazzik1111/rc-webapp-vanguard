import { GoogleLocationStatisticsDateValueSequence } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Statistics/GoogleLocationStatisticsDateValueSequence';

export const GoogleLocationStatisticsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Statistics_GoogleLocationStatistics:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Statistics\\GoogleLocationStatistics',
};

export const GoogleLocationStatisticsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Statistics_GoogleLocationStatistics:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Statistics\\GoogleLocationStatistics',
} as const;

export type GoogleLocationStatistics = {
  elements?: GoogleLocationStatisticsDateValueSequence[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationStatisticsObjectType)[keyof typeof GoogleLocationStatisticsObjectType];
};
