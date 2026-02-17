import { ReviewBoosterEmailTemplateMediaItem } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/MediaItems/ReviewBoosterEmailTemplateMediaItem';

export const EmailTemplateSettingsObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_Settings_EmailTemplateSettings:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\Settings\\EmailTemplateSettings',
};

export const EmailTemplateSettingsObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_Settings_EmailTemplateSettings:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\Settings\\EmailTemplateSettings',
} as const;

export type EmailTemplateSettings = {
  /**
   * The subject for the email
   */
  subject?: string;
  /**
   * The greeting for the email
   */
  greeting?: string;
  /**
   * The body for the email
   */
  body?: string;
  /**
   * The closing for the email
   */
  closing?: string;
  /**
   * Whether to display the logo or not
   */
  displayLogoImage?: boolean;
  /**
   * Whether to display the header or not
   */
  displayHeaderImage?: boolean;
  headerMediaItem?: ReviewBoosterEmailTemplateMediaItem;
  /**
   * Whether to display the footer or not
   */
  displayFooter?: boolean;
  /**
   * The ID of the review source
   */
  reviewSourceId?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof EmailTemplateSettingsObjectType)[keyof typeof EmailTemplateSettingsObjectType];
};
