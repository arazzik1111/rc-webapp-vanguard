import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { ReviewSource } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewSources/ReviewSource';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const LocationReviewRequestUrlObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestUrl:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestUrl',
};

export const LocationReviewRequestUrlObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestUrl:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestUrl',
} as const;

export type LocationReviewRequestUrl = {
  /**
   * The ID of the associated Location
   */
  locationId: number;
  location?: Location;
  /**
   * The platform where the boosts are made (Google)
   */
  targetDirectory: string;
  /**
   * The target URL where the review request points to
   */
  targetUrl: string;
  /**
   * Whether the URL is active or not
   */
  isActive?: boolean;
  reviewSource?: ReviewSource;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationReviewRequestUrlObjectType)[keyof typeof LocationReviewRequestUrlObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
