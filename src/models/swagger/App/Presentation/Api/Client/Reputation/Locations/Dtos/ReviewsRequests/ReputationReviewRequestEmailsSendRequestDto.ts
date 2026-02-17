import { LocationReviewRequestEmails } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequestEmails';

export type ReputationReviewRequestEmailsSendRequestDto = {
  locationReviewRequestEmails: LocationReviewRequestEmails;
  /**
   * Whether to save the email template as default
   */
  saveTemplateAsDefault?: boolean;
};
