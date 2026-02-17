import { ReviewSourceReputationScores } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewSources/ReputationScores/ReviewSourceReputationScores';
import { ReviewSource } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewSources/ReviewSource';

export const ReviewSourcesObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReviewSources:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReviewSources',
};

export const ReviewSourcesObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReviewSources:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReviewSources',
} as const;

export type ReviewSources = {
  reputationScores?: ReviewSourceReputationScores;
  elements?: ReviewSource[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewSourcesObjectType)[keyof typeof ReviewSourcesObjectType];
};
