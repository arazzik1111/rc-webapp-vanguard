export const GenericSettingObjectType = {
  App_Domain_Presence_Entities_Locations_Settings_GenericSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\GenericSetting',
};

export const GenericSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Settings_GenericSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\GenericSetting',
} as const;

export type GenericSetting = {
  editUrl?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GenericSettingObjectType)[keyof typeof GenericSettingObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
