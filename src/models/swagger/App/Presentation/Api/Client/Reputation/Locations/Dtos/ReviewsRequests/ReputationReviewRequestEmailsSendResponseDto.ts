import { LocationReviewRequestEmail } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequestEmail';
import { LocationReviewRequestEmails } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequestEmails';

export type ReputationReviewRequestEmailsSendResponseDto = {
  locationReviewRequestEmails: LocationReviewRequestEmails;
  previewLocationReviewRequestEmail: LocationReviewRequestEmail;
};
