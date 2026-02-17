import { EventsSummary } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/Events/EventsSummary';
import { PostsSummary } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/Posts/PostsSummary';

export const LocationEngagementObjectType = {
  App_Domain_Presence_Entities_Locations_Engagement_LocationEngagement:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\LocationEngagement',
};

export const LocationEngagementObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Engagement_LocationEngagement:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\LocationEngagement',
} as const;

export type LocationEngagement = {
  postsSummary?: PostsSummary;
  eventsSummary?: EventsSummary;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationEngagementObjectType)[keyof typeof LocationEngagementObjectType];
};
