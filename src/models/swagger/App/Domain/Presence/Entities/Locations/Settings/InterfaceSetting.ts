export const InterfaceSettingObjectType = {
  App_Domain_Presence_Entities_Locations_Settings_InterfaceSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\InterfaceSetting',
};

export const InterfaceSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Settings_InterfaceSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\InterfaceSetting',
} as const;

export type InterfaceSetting = {
  locationId?: number;
  languageCode?: string;
  countryCode?: string;
  countryId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InterfaceSettingObjectType)[keyof typeof InterfaceSettingObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
