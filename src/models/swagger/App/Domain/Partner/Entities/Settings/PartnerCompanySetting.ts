import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { PartnerCompanyPerCountrySettings } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerCompanyPerCountrySettings';
import { PartnerWebsiteURLsSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerWebsiteURLsSetting';
import { SocialMediaAccountsSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/SocialMediaAccountsSetting';

export const PartnerCompanySettingObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerCompanySetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerCompanySetting',
};

export const PartnerCompanySettingObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_PartnerCompanySetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerCompanySetting',
} as const;

export type PartnerCompanySetting = {
  company?: Company;
  /**
   * Legal Content used in footers, e.g. E-Mail footer
   */
  footerLegalData?: string;
  address?: PostalAddress;
  socialMediaAccounts?: SocialMediaAccountsSetting;
  websiteURLs?: PartnerWebsiteURLsSetting;
  perCountrySettings?: PartnerCompanyPerCountrySettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerCompanySettingObjectType)[keyof typeof PartnerCompanySettingObjectType];
};
