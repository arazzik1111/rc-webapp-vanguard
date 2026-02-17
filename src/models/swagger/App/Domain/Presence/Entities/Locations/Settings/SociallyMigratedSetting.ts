export const SociallyMigratedSettingObjectType = {
  App_Domain_Presence_Entities_Locations_Settings_SociallyMigratedSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\SociallyMigratedSetting',
};

export const SociallyMigratedSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Settings_SociallyMigratedSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\SociallyMigratedSetting',
} as const;

export type SociallyMigratedSetting = {
  locationId?: number;
  /**
   * Weather the socially migrated has been started or not
   */
  started?: boolean;
  /**
   * Weather the socially migrated has been finished or not
   */
  finished?: boolean;
  /**
   * Weather the import of posts has been finished or not
   */
  finishedImportPosts?: boolean;
  /**
   * Weather the import of Posts MediaItems has been finished or not
   */
  finishedImportPostsMediaItems?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SociallyMigratedSettingObjectType)[keyof typeof SociallyMigratedSettingObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
