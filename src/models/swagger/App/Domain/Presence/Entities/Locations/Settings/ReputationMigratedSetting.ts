export const ReputationMigratedSettingObjectType = {
  App_Domain_Presence_Entities_Locations_Settings_ReputationMigratedSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\ReputationMigratedSetting',
};

export const ReputationMigratedSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Settings_ReputationMigratedSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\ReputationMigratedSetting',
} as const;

export type ReputationMigratedSetting = {
  locationId?: number;
  /**
   * The external business id from Vendasta
   */
  externalBusinessId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationMigratedSettingObjectType)[keyof typeof ReputationMigratedSettingObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
