import { EmailContact } from '@models/swagger/App/Domain/Common/Entities/Emails/EmailContact';

export const PartnerEmailSettingObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerEmailSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerEmailSetting',
};

export const PartnerEmailSettingObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_PartnerEmailSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerEmailSetting',
} as const;

export type PartnerEmailSetting = {
  /**
   * if true, users will receive email reports
   */
  sendReports?: boolean;
  sender?: EmailContact;
  /**
   * Root URL from which graphics and media will be loaded
   */
  mediaRootUrl?: string;
  /**
   * Custom Domain to be used instead of default for links
   */
  customDomain?: string;
  /**
   * defines if the product name is used as sender name or not
   */
  useProductNameAsSenderName?: boolean;
  /**
   * if true, we sync emails to intercom in the form
   * <user_id>@mail2data.rankingcoach.com so that emails are sent to backend
   * and processed through a templating system where parts of the mail e.g. footer,
   * header etc. are replaced by partner specific branding
   */
  passIntercomMailsThroughTemplatingSystem?: boolean;
  /**
   * whether to send intercom activation campaign or not
   */
  sendIntercomActivationCampaign?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerEmailSettingObjectType)[keyof typeof PartnerEmailSettingObjectType];
};
