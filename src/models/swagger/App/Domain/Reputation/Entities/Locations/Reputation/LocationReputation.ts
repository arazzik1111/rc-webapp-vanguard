import { ReviewSources } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewSources/ReviewSources';
import { MentionSources } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/MentionSources';
import { ReviewsAnalysis } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/Analysis/ReviewsAnalysis';
import { Reviews } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/Reviews';
import { ReviewsDistribution } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReviewsDistribution';
import { ReputationScores } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/ReputationScores';
import { ReputationSummary } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Summary/ReputationSummary';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const LocationReputationObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_LocationReputation:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\LocationReputation',
};

export const LocationReputationObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_LocationReputation:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\LocationReputation',
} as const;

export type LocationReputation = {
  /**
   * ID of Location associated with the ListingService
   */
  locationId?: number;
  summary?: ReputationSummary;
  reviewsAnalysis?: ReviewsAnalysis;
  mentionSources?: MentionSources;
  reviewSources?: ReviewSources;
  /**
   * Total number of reviews
   */
  totalReviews?: number;
  /**
   * Average star rating
   */
  averageRating?: number;
  /**
   * Count of reviews without replies
   */
  reviewsWithoutReplies?: number;
  reputationScores?: ReputationScores;
  reviewsDistribution?: ReviewsDistribution;
  reviewsWithoutContentDistribution?: ReviewsDistribution;
  reviewsWithContentDistribution?: ReviewsDistribution;
  reviews?: Reviews;
  /**
   * Whether there are any reviews or not
   */
  hasReviews?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationReputationObjectType)[keyof typeof LocationReputationObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
