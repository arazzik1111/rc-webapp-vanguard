import { InstagramLocationStatSeries } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Instagram/Locations/Statistics/InstagramLocationStatSeries';
import { InsightDemographic } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/SocialMediaInsights/InsightDemographic';
import { InsightPlaces } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/SocialMediaInsights/InsightPlaces';
import { InsightValue } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/SocialMediaInsights/InsightValue';

export const InstagramLocationInsightsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_Statistics_InstagramLocationInsights:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\Statistics\\InstagramLocationInsights',
};

export const InstagramLocationInsightsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_Statistics_InstagramLocationInsights:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\Statistics\\InstagramLocationInsights',
} as const;

export type InstagramLocationInsights = {
  elements?: Array<InstagramLocationStatSeries | InsightValue | InsightPlaces | InsightDemographic>;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InstagramLocationInsightsObjectType)[keyof typeof InstagramLocationInsightsObjectType];
};
