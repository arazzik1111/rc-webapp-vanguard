import { LocationReviewRequests } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequests';

export type ReputationReviewRequestsGetResponseDto = {
  locationReviewRequests: LocationReviewRequests;
  /**
   * The total number of review boots short urls clicks
   */
  totalReach: number;
};
