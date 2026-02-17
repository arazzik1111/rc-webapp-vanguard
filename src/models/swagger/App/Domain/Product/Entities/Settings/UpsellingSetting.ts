import { UpsellingLink } from '@models/swagger/App/Domain/Partner/Entities/Settings/UpsellingLinks/UpsellingLink';
import { UpsellingLinks } from '@models/swagger/App/Domain/Partner/Entities/Settings/UpsellingLinks/UpsellingLinks';

export const UpsellingSettingObjectType = {
  App_Domain_Product_Entities_Settings_UpsellingSetting: 'App\\Domain\\Product\\Entities\\Settings\\UpsellingSetting',
};

export const UpsellingSettingObjectTypeStrict = {
  App_Domain_Product_Entities_Settings_UpsellingSetting: 'App\\Domain\\Product\\Entities\\Settings\\UpsellingSetting',
} as const;

export type UpsellingSetting = {
  genericUpsellingLink?: UpsellingLink;
  upsellingLinks?: UpsellingLinks;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UpsellingSettingObjectType)[keyof typeof UpsellingSettingObjectType];
};
