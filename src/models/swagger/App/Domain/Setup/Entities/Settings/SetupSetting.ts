import { SetupCommonCompetitorsFeatureFlagSetting } from '@models/swagger/App/Domain/Setup/Entities/FeatureFlags/SetupCommonCompetitorsFeatureFlagSetting';
import { SetupCommonFeatureFlagSetting } from '@models/swagger/App/Domain/Setup/Entities/FeatureFlags/SetupCommonFeatureFlagSetting';
import { SetupCommonKeywordsFeatureFlagSetting } from '@models/swagger/App/Domain/Setup/Entities/FeatureFlags/SetupCommonKeywordsFeatureFlagSetting';
import { SetupCommonLocationsFeatureFlagSetting } from '@models/swagger/App/Domain/Setup/Entities/FeatureFlags/SetupCommonLocationsFeatureFlagSetting';

export const SetupSettingObjectType = {
  App_Domain_Setup_Entities_Settings_SetupSetting: 'App\\Domain\\Setup\\Entities\\Settings\\SetupSetting',
};

export const SetupSettingObjectTypeStrict = {
  App_Domain_Setup_Entities_Settings_SetupSetting: 'App\\Domain\\Setup\\Entities\\Settings\\SetupSetting',
} as const;

export type SetupSetting = {
  featureFlagSetting?: SetupCommonFeatureFlagSetting;
  keywordsFeatureFlagSetting?: SetupCommonKeywordsFeatureFlagSetting;
  locationsFeatureFlagSetting?: SetupCommonLocationsFeatureFlagSetting;
  competitorsFeatureFlagSetting?: SetupCommonCompetitorsFeatureFlagSetting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupSettingObjectType)[keyof typeof SetupSettingObjectType];
};
