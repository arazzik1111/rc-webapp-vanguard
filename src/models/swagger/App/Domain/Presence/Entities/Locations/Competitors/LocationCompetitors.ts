import { LocationCompetitor } from '@models/swagger/App/Domain/Presence/Entities/Locations/Competitors/LocationCompetitor';
import { ReputationClusters } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Competitors/Reputation/Clusters/ReputationClusters';

export const LocationCompetitorsObjectType = {
  App_Domain_Presence_Entities_Locations_Competitors_LocationCompetitors:
    'App\\Domain\\Presence\\Entities\\Locations\\Competitors\\LocationCompetitors',
};

export const LocationCompetitorsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Competitors_LocationCompetitors:
    'App\\Domain\\Presence\\Entities\\Locations\\Competitors\\LocationCompetitors',
} as const;

export type LocationCompetitors = {
  /**
   * Depicts the ranking of the location compared to competitors either based on reputationScore or based on the visibilityScore of the location
   */
  locationRankComparedToCompetitors?: number;
  clusters?: ReputationClusters;
  locationRankVsCompetitors?: number;
  elements?: LocationCompetitor[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationCompetitorsObjectType)[keyof typeof LocationCompetitorsObjectType];
};
