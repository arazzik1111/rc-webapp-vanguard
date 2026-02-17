import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { LocationReviewRequestTemplateSettings } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/Settings/LocationReviewRequestTemplateSettings';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const LocationReviewRequestTemplateChannel = {
  PRINT: 'PRINT',
  EMAIL: 'EMAIL',
  SMS: 'SMS',
};

export const LocationReviewRequestTemplateChannelStrict = {
  PRINT: 'PRINT',
  EMAIL: 'EMAIL',
  SMS: 'SMS',
} as const;

export const LocationReviewRequestTemplateTemplate = {
  EMAIL_DEFAULT: 'EMAIL_DEFAULT',
  PRINT_DEFAULT: 'PRINT_DEFAULT',
  FLYER: 'FLYER',
  QR_CODE: 'QR_CODE',
  STICKER: 'STICKER',
  SMS_DEFAULT: 'SMS_DEFAULT',
};

export const LocationReviewRequestTemplateTemplateStrict = {
  EMAIL_DEFAULT: 'EMAIL_DEFAULT',
  PRINT_DEFAULT: 'PRINT_DEFAULT',
  FLYER: 'FLYER',
  QR_CODE: 'QR_CODE',
  STICKER: 'STICKER',
  SMS_DEFAULT: 'SMS_DEFAULT',
} as const;

export const LocationReviewRequestTemplateObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestTemplate:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestTemplate',
};

export const LocationReviewRequestTemplateObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestTemplate:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestTemplate',
} as const;

export type LocationReviewRequestTemplate = {
  /**
   * The id of the Location that the template is used for
   */
  locationId?: number;
  location?: Location;
  /**
   * The channel where the template is used
   *  Allowed Values:
   * -   `PRINT`: Print template channel type
   * -   `EMAIL`: Email template channel type
   * -   `SMS`: SMS template channel type
   *
   */
  channel: (typeof LocationReviewRequestTemplateChannel)[keyof typeof LocationReviewRequestTemplateChannel];
  /**
   * The template used
   *  Allowed Values:
   * -   `EMAIL_DEFAULT`: The default Email template type
   * -   `PRINT_DEFAULT`: The default Print template type
   * -   `FLYER`: The flyer Print template type
   * -   `QR_CODE`: The QRCode Print template type
   * -   `STICKER`: The sticker Print template type
   * -   `SMS_DEFAULT`: The default SMS template type
   *
   */
  template: (typeof LocationReviewRequestTemplateTemplate)[keyof typeof LocationReviewRequestTemplateTemplate];
  /**
   * The Template name
   */
  templateName: string;
  /**
   * The Template Number (consecutive for each template from the same Channel)
   */
  templateNo: string;
  locationReviewRequestTemplateSettings?: LocationReviewRequestTemplateSettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationReviewRequestTemplateObjectType)[keyof typeof LocationReviewRequestTemplateObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
