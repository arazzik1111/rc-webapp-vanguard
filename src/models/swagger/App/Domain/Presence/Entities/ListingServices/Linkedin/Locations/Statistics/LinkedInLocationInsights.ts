import { LinkedInLocationInsight } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Statistics/LinkedInLocationInsight';

export const LinkedInLocationInsightsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Statistics_LinkedInLocationInsights:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Statistics\\LinkedInLocationInsights',
};

export const LinkedInLocationInsightsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Statistics_LinkedInLocationInsights:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Statistics\\LinkedInLocationInsights',
} as const;

export type LinkedInLocationInsights = {
  elements?: LinkedInLocationInsight[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedInLocationInsightsObjectType)[keyof typeof LinkedInLocationInsightsObjectType];
};
