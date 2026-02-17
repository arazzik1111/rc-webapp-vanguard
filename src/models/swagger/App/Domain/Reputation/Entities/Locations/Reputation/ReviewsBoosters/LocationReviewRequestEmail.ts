import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { LocationReviewRequest } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequest';
import { LocationReviewRequestEmailMessage } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequestEmailMessage';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const LocationReviewRequestEmailStatus = {
  NOT_SENT: 'NOT_SENT',
  SENT: 'SENT',
  DELETED: 'DELETED',
  ERROR: 'ERROR',
  QUEUED: 'QUEUED',
};

export const LocationReviewRequestEmailStatusStrict = {
  NOT_SENT: 'NOT_SENT',
  SENT: 'SENT',
  DELETED: 'DELETED',
  ERROR: 'ERROR',
  QUEUED: 'QUEUED',
} as const;

export const LocationReviewRequestEmailWritingStyle = {
  FORMAL: 'FORMAL',
  PROFESSIONAL: 'PROFESSIONAL',
  INFORMATIVE: 'INFORMATIVE',
  FRIENDLY: 'FRIENDLY',
  BOLD: 'BOLD',
  WITTY: 'WITTY',
  DEFAULT: 'DEFAULT',
};

export const LocationReviewRequestEmailWritingStyleStrict = {
  FORMAL: 'FORMAL',
  PROFESSIONAL: 'PROFESSIONAL',
  INFORMATIVE: 'INFORMATIVE',
  FRIENDLY: 'FRIENDLY',
  BOLD: 'BOLD',
  WITTY: 'WITTY',
  DEFAULT: 'DEFAULT',
} as const;

export const LocationReviewRequestEmailHandlingError = {
  HANDLING_ERROR_DUPLICATE: 'HANDLING_ERROR_DUPLICATE',
  HANDLING_ERROR_NOT_FOUND: 'HANDLING_ERROR_NOT_FOUND',
  HANDLING_ERROR_NOT_SENT: 'HANDLING_ERROR_NOT_SENT',
  HANDLING_ERROR_MAX_LIMIT_REACHED: 'HANDLING_ERROR_MAX_LIMIT_REACHED',
};

export const LocationReviewRequestEmailHandlingErrorStrict = {
  HANDLING_ERROR_DUPLICATE: 'HANDLING_ERROR_DUPLICATE',
  HANDLING_ERROR_NOT_FOUND: 'HANDLING_ERROR_NOT_FOUND',
  HANDLING_ERROR_NOT_SENT: 'HANDLING_ERROR_NOT_SENT',
  HANDLING_ERROR_MAX_LIMIT_REACHED: 'HANDLING_ERROR_MAX_LIMIT_REACHED',
} as const;

export const LocationReviewRequestEmailObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestEmail:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestEmail',
};

export const LocationReviewRequestEmailObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestEmail:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestEmail',
} as const;

export type LocationReviewRequestEmail = {
  /**
   * The email address of the customer
   */
  customerEmail: string;
  /**
   * The name of the customer
   */
  customerName?: string;
  /**
   * Whether the customer has opted in or not
   */
  isOptIn?: boolean;
  /**
   * The status of the email
   *  Allowed Values:
   * -   `NOT_SENT`: Email status Not Sent
   * -   `SENT`: Email status Sent
   * -   `DELETED`: Email status Deleted
   * -   `ERROR`: Email status Error
   * -   `QUEUED`: Email status Queued
   *
   */
  status?: (typeof LocationReviewRequestEmailStatus)[keyof typeof LocationReviewRequestEmailStatus];
  /**
   * When the email has to be sent
   */
  sendAt?: string;
  /**
   * The id of the LocationReviewRequest that this email is for
   */
  locationReviewRequestId?: number;
  locationReviewRequest?: LocationReviewRequest;
  /**
   * The id of the Location that ReviewRequest is for
   */
  locationId: number;
  location?: Location;
  /**
   * Whether the email contact is active or not
   */
  isActive?: boolean;
  /**
   * The writing style of the emails content
   *  Allowed Values:
   * -   `FORMAL`
   * -   `PROFESSIONAL`
   * -   `INFORMATIVE`
   * -   `FRIENDLY`
   * -   `BOLD`
   * -   `WITTY`
   * -   `DEFAULT`: The text option Default
   *
   */
  writingStyle: (typeof LocationReviewRequestEmailWritingStyle)[keyof typeof LocationReviewRequestEmailWritingStyle];
  emailMessage?: LocationReviewRequestEmailMessage;
  /**
   * Errors occurred in handling the LocationReviewRequestEmail
   *  Allowed Values:
   * -   `HANDLING_ERROR_DUPLICATE`: Error for duplicated LocationReviewRequestEmail
   * -   `HANDLING_ERROR_NOT_FOUND`: Error for not found LocationReviewRequestEmail
   * -   `HANDLING_ERROR_NOT_SENT`: Error for not sent LocationReviewRequestEmail
   * -   `HANDLING_ERROR_MAX_LIMIT_REACHED`: Error for max limit reached LocationReviewRequestEmail
   *
   */
  handlingError?: (typeof LocationReviewRequestEmailHandlingError)[keyof typeof LocationReviewRequestEmailHandlingError];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationReviewRequestEmailObjectType)[keyof typeof LocationReviewRequestEmailObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
