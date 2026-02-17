import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { PartnerWebsiteURLsSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerWebsiteURLsSetting';

export const PartnerCompanyPerCountrySettingObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerCompanyPerCountrySetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerCompanyPerCountrySetting',
};

export const PartnerCompanyPerCountrySettingObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_PartnerCompanyPerCountrySetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerCompanyPerCountrySetting',
} as const;

export type PartnerCompanyPerCountrySetting = {
  company?: Company;
  address?: PostalAddress;
  websiteURLs?: PartnerWebsiteURLsSetting;
  /**
   * The short code for the country, e.g. DE
   */
  countryShortCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerCompanyPerCountrySettingObjectType)[keyof typeof PartnerCompanyPerCountrySettingObjectType];
};
