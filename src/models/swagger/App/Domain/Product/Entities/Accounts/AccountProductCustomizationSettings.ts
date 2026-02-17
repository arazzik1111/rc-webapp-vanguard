import { ProductThemeSetting } from '@models/swagger/App/Domain/Agency/Entities/Settings/ProductThemeSetting';
import { TranslationsSetting } from '@models/swagger/App/Domain/Common/Entities/Settings/TranslationsSetting';
import { PartnerCompanySetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerCompanySetting';
import { PartnerEmailSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerEmailSetting';
import { PartnerProductSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerProductSetting';

export const AccountProductCustomizationSettingsObjectType = {
  App_Domain_Product_Entities_Accounts_AccountProductCustomizationSettings:
    'App\\Domain\\Product\\Entities\\Accounts\\AccountProductCustomizationSettings',
};

export const AccountProductCustomizationSettingsObjectTypeStrict = {
  App_Domain_Product_Entities_Accounts_AccountProductCustomizationSettings:
    'App\\Domain\\Product\\Entities\\Accounts\\AccountProductCustomizationSettings',
} as const;

export type AccountProductCustomizationSettings = {
  elements?: Array<
    ProductThemeSetting | PartnerCompanySetting | PartnerProductSetting | PartnerEmailSetting | TranslationsSetting
  >;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AccountProductCustomizationSettingsObjectType)[keyof typeof AccountProductCustomizationSettingsObjectType];
};
