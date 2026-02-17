import { ProductThemeSetting } from '@models/swagger/App/Domain/Agency/Entities/Settings/ProductThemeSetting';
import { Account } from '@models/swagger/App/Domain/Common/Entities/Accounts/Account';
import { PartnerCompanySetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerCompanySetting';
import { PartnerEmailSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerEmailSetting';
import { PartnerProductSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerProductSetting';
import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { EmailTemplateSettings } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/Settings/EmailTemplateSettings';
import { PrintTemplateSettings } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/Settings/PrintTemplateSettings';
import { SMSTemplateSettings } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/Settings/SMSTemplateSettings';

export const LocationReviewRequestTemplateSettingsObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_Settings_LocationReviewRequestTemplateSettings:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\Settings\\LocationReviewRequestTemplateSettings',
};

export const LocationReviewRequestTemplateSettingsObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_Settings_LocationReviewRequestTemplateSettings:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\Settings\\LocationReviewRequestTemplateSettings',
} as const;

export type LocationReviewRequestTemplateSettings = {
  /**
   * Whether the HTML Template is labeled or not
   */
  isLabeled?: boolean;
  /**
   * The product name to be used in Template
   */
  productName?: string;
  /**
   * The product logo to be used in Template
   */
  productLogoContent?: string;
  /**
   * The product logo url to be used in Template
   */
  productLogoUrl?: string;
  /**
   * The reseller name to be used in Template
   */
  resellerName?: string;
  emailTemplateSettings?: EmailTemplateSettings;
  printTemplateSettings?: PrintTemplateSettings;
  smsTemplateSettings?: SMSTemplateSettings;
  location?: Location;
  account?: Account;
  partnerCompanySetting?: PartnerCompanySetting;
  productThemeSetting?: ProductThemeSetting;
  partnerEmailSetting?: PartnerEmailSetting;
  partnerProductSetting?: PartnerProductSetting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationReviewRequestTemplateSettingsObjectType)[keyof typeof LocationReviewRequestTemplateSettingsObjectType];
};
