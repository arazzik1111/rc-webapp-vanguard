import { AdsSetting } from '@models/swagger/App/Domain/Ads/Entities/Settings/AdsSetting';
import { AIAssistantSetting } from '@models/swagger/App/Domain/AI/Entities/Settings/AIAssistantSetting';
import { AIBudgetSetting } from '@models/swagger/App/Domain/AI/Entities/Settings/AIBudgetSetting';
import { PresenceSetting } from '@models/swagger/App/Domain/Presence/Entities/Settings/PresenceSetting';
import { ProjectRightsSetting } from '@models/swagger/App/Domain/Product/Entities/Projects/ProjectRightsSetting';
import { SeoSetting } from '@models/swagger/App/Domain/Seo/Entities/Settings/SeoSetting';
import { SetupSetting } from '@models/swagger/App/Domain/Setup/Entities/Settings/SetupSetting';

export const ProjectSettingsObjectType = {
  App_Domain_Product_Entities_Projects_ProjectSettings: 'App\\Domain\\Product\\Entities\\Projects\\ProjectSettings',
};

export const ProjectSettingsObjectTypeStrict = {
  App_Domain_Product_Entities_Projects_ProjectSettings: 'App\\Domain\\Product\\Entities\\Projects\\ProjectSettings',
} as const;

export type ProjectSettings = {
  setup?: SetupSetting;
  seo?: SeoSetting;
  ads?: AdsSetting;
  presence?: PresenceSetting;
  rights?: ProjectRightsSetting;
  aiBudget?: AIBudgetSetting;
  aiAssistant?: AIAssistantSetting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProjectSettingsObjectType)[keyof typeof ProjectSettingsObjectType];
};
