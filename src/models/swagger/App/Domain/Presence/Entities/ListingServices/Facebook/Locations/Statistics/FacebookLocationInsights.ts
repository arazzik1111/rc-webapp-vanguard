import { FacebookLocationStatSeries } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Statistics/FacebookLocationStatSeries';
import { InsightDemographics } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/SocialMediaInsights/InsightDemographics';
import { InsightPlaces } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/SocialMediaInsights/InsightPlaces';

export const FacebookLocationInsightsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Statistics_FacebookLocationInsights:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Statistics\\FacebookLocationInsights',
};

export const FacebookLocationInsightsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Statistics_FacebookLocationInsights:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Statistics\\FacebookLocationInsights',
} as const;

export type FacebookLocationInsights = {
  elements?: Array<FacebookLocationStatSeries | InsightPlaces | InsightDemographics>;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookLocationInsightsObjectType)[keyof typeof FacebookLocationInsightsObjectType];
};
