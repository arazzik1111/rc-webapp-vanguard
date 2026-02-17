import { LocationReviewRequest } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequest';

export const LocationReviewRequestsObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequests:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequests',
};

export const LocationReviewRequestsObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequests:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequests',
} as const;

export type LocationReviewRequests = {
  /**
   * $isListingConnected Weather a ListingService is connected or not
   */
  isListingConnected?: boolean;
  elements?: LocationReviewRequest[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationReviewRequestsObjectType)[keyof typeof LocationReviewRequestsObjectType];
};
