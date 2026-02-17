import { ListingServiceSettings } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/ListingServiceSettings';

export const PresenceSettingObjectType = {
  App_Domain_Presence_Entities_Settings_PresenceSetting: 'App\\Domain\\Presence\\Entities\\Settings\\PresenceSetting',
};

export const PresenceSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_Settings_PresenceSetting: 'App\\Domain\\Presence\\Entities\\Settings\\PresenceSetting',
} as const;

export type PresenceSetting = {
  analysis?: string;
  listingServiceSettings?: ListingServiceSettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PresenceSettingObjectType)[keyof typeof PresenceSettingObjectType];
};
