import { ReviewsAnalysis } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/Analysis/ReviewsAnalysis';
import { Review } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/Review';

export const ReviewsObjectType = {
  App_Domain_Reputation_Entities_Reputation_Reviews_Reviews:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\Reviews',
};

export const ReviewsObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Reviews_Reviews:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\Reviews',
} as const;

export type Reviews = {
  rating?: number;
  /**
   * For long reviews lists (>100 Reviews), the date after which next set comes
   */
  nextPageAfterDateTime?: string;
  analysis?: ReviewsAnalysis;
  /**
   * DateTime of first Review
   */
  startDate?: string;
  /**
   * DateTime of last Review
   */
  endDate?: string;
  elements?: Review[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsObjectType)[keyof typeof ReviewsObjectType];
};
