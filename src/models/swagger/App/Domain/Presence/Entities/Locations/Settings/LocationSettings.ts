import { AIAssistantSetting } from '@models/swagger/App/Domain/AI/Entities/Settings/AIAssistantSetting';
import { FacebookConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Connection/FacebookConnection';
import { GoogleConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Connection/GoogleConnection';
import { LinkedinConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Connection/LinkedinConnection';
import { UberallConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Uberall/Locations/Connection/UberallConnection';
import { XConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/Locations/Connection/XConnection';
import { YextConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/Locations/Connection/YextConnection';
import { GenericSetting } from '@models/swagger/App/Domain/Presence/Entities/Locations/Settings/GenericSetting';
import { InterfaceSetting } from '@models/swagger/App/Domain/Presence/Entities/Locations/Settings/InterfaceSetting';
import { MigrationStateSetting } from '@models/swagger/App/Domain/Presence/Entities/Locations/Settings/MigrationStateSetting';
import { ReputationMigratedSetting } from '@models/swagger/App/Domain/Presence/Entities/Locations/Settings/ReputationMigratedSetting';
import { SociallyMigratedSetting } from '@models/swagger/App/Domain/Presence/Entities/Locations/Settings/SociallyMigratedSetting';
import { LocationTasksSettings } from '@models/swagger/App/Domain/Presence/Entities/Locations/Tasks/LocationTasksSettings';
import { LocationVisibilityIndexSetting } from '@models/swagger/App/Domain/Presence/Entities/Locations/VisibilityIndex/LocationVisibilityIndexSetting';
import { MentionsSetting } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Settings/MentionsSetting';

export const LocationSettingsObjectType = {
  App_Domain_Presence_Entities_Locations_Settings_LocationSettings:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\LocationSettings',
};

export const LocationSettingsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Settings_LocationSettings:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\LocationSettings',
} as const;

export type LocationSettings = {
  visibilityIndex?: LocationVisibilityIndexSetting;
  googleConnection?: GoogleConnection;
  uberallConnection?: UberallConnection;
  yextConnection?: YextConnection;
  facebookConnection?: FacebookConnection;
  linkedinConnection?: LinkedinConnection;
  xConnection?: XConnection;
  genericSettings?: GenericSetting;
  tasksSettings?: LocationTasksSettings;
  interfaceDataSetting?: InterfaceSetting;
  mentionsSetting?: MentionsSetting;
  aiAssistant?: AIAssistantSetting;
  migrationStateSetting?: MigrationStateSetting;
  sociallyMigratedSetting?: SociallyMigratedSetting;
  reputationMigratedSetting?: ReputationMigratedSetting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationSettingsObjectType)[keyof typeof LocationSettingsObjectType];
};
