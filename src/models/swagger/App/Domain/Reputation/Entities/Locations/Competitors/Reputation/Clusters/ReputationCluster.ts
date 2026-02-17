import { LocationCompetitors } from '@models/swagger/App/Domain/Presence/Entities/Locations/Competitors/LocationCompetitors';
import { ReputationScores } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/ReputationScores';

export const ReputationClusterObjectType = {
  App_Domain_Reputation_Entities_Locations_Competitors_Reputation_Clusters_ReputationCluster:
    'App\\Domain\\Reputation\\Entities\\Locations\\Competitors\\Reputation\\Clusters\\ReputationCluster',
};

export const ReputationClusterObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Competitors_Reputation_Clusters_ReputationCluster:
    'App\\Domain\\Reputation\\Entities\\Locations\\Competitors\\Reputation\\Clusters\\ReputationCluster',
} as const;

export type ReputationCluster = {
  reputationScores?: ReputationScores;
  competitorsInCluster?: LocationCompetitors;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationClusterObjectType)[keyof typeof ReputationClusterObjectType];
};
