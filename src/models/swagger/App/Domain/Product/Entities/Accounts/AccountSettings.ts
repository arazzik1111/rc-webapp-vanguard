import { AgencySettings } from '@models/swagger/App/Domain/Agency/Entities/Settings/AgencySettings';
import { AIBudgetSetting } from '@models/swagger/App/Domain/AI/Entities/Settings/AIBudgetSetting';
import { AccountPartnerSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/AccountPartnerSetting';
import { AccountSetupPresetsSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/AccountSetupPresetsSetting';
import { AccountProductCustomizationSettings } from '@models/swagger/App/Domain/Product/Entities/Accounts/AccountProductCustomizationSettings';
import { AccountRightsSetting } from '@models/swagger/App/Domain/Product/Entities/Accounts/AccountRightsSetting';

export const AccountSettingsObjectType = {
  App_Domain_Product_Entities_Accounts_AccountSettings: 'App\\Domain\\Product\\Entities\\Accounts\\AccountSettings',
};

export const AccountSettingsObjectTypeStrict = {
  App_Domain_Product_Entities_Accounts_AccountSettings: 'App\\Domain\\Product\\Entities\\Accounts\\AccountSettings',
} as const;

export type AccountSettings = {
  rights?: AccountRightsSetting;
  agencySetting?: AgencySettings;
  partner?: AccountPartnerSetting;
  /**
   * Flag indicating if autoactivation is currently running
   */
  autoactivationRunning?: boolean;
  setupPresets?: AccountSetupPresetsSetting;
  productCustomizationSettings?: AccountProductCustomizationSettings;
  ai?: AIBudgetSetting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AccountSettingsObjectType)[keyof typeof AccountSettingsObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
