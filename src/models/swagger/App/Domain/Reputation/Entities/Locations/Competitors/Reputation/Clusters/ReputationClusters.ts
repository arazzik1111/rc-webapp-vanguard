import { ReputationCluster } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Competitors/Reputation/Clusters/ReputationCluster';

export const ReputationClustersObjectType = {
  App_Domain_Reputation_Entities_Locations_Competitors_Reputation_Clusters_ReputationClusters:
    'App\\Domain\\Reputation\\Entities\\Locations\\Competitors\\Reputation\\Clusters\\ReputationClusters',
};

export const ReputationClustersObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Competitors_Reputation_Clusters_ReputationClusters:
    'App\\Domain\\Reputation\\Entities\\Locations\\Competitors\\Reputation\\Clusters\\ReputationClusters',
} as const;

export type ReputationClusters = {
  bestInClass?: ReputationCluster;
  industryStandard?: ReputationCluster;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationClustersObjectType)[keyof typeof ReputationClustersObjectType];
};
