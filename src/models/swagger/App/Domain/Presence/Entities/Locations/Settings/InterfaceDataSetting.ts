export const InterfaceDataSettingObjectType = {
  App_Domain_Presence_Entities_Locations_Settings_InterfaceDataSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\InterfaceDataSetting',
};

export type InterfaceDataSetting = {
  locationId?: number;
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
