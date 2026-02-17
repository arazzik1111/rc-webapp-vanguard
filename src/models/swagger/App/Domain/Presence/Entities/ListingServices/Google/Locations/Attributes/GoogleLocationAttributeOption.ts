export const GoogleLocationAttributeOptionObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Attributes_GoogleLocationAttributeOption:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Attributes\\GoogleLocationAttributeOption',
};

export const GoogleLocationAttributeOptionObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Attributes_GoogleLocationAttributeOption:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Attributes\\GoogleLocationAttributeOption',
} as const;

export type GoogleLocationAttributeOption = {
  /**
   * The attribute value. Type is defined by valueType
   */
  googleValue?: string | number | boolean;
  /**
   * The display name for this value, localized where available; otherwise, in English. The value display name is intended to be used in context with the attribute display name.
   * For example, for a "WiFi" enum attribute, this could contain "Paid" to represent paid Wi-Fi.
   */
  displayName?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationAttributeOptionObjectType)[keyof typeof GoogleLocationAttributeOptionObjectType];
};
