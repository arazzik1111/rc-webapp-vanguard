import { LocationReviewRequestEmail } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequestEmail';

export type ReputationReviewRequestEmailSendRequestDto = {
  locationReviewRequestEmail: LocationReviewRequestEmail;
  /**
   * Whether to save the email template as default
   */
  saveTemplateAsDefault?: boolean;
};
