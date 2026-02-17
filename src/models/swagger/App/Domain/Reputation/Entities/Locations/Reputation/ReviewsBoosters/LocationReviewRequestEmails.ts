import { LocationReviewRequestEmail } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequestEmail';

export const LocationReviewRequestEmailsObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestEmails:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestEmails',
};

export const LocationReviewRequestEmailsObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestEmails:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestEmails',
} as const;

export type LocationReviewRequestEmails = {
  elements?: LocationReviewRequestEmail[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationReviewRequestEmailsObjectType)[keyof typeof LocationReviewRequestEmailsObjectType];
};
