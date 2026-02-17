export const InterfaceDataSettingObjectType = {
  App_Domain_Presence_Entities_Settings_InterfaceDataSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\InterfaceDataSetting',
};

export type InterfaceDataSetting = {
  language?: string;
  country?: string;
  countryId?: string;
  /**
   * The internal identifier of the entity
   */
  id?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InterfaceDataSettingObjectType)[keyof typeof InterfaceDataSettingObjectType];
};
