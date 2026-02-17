export const DescriptionObjectType = {
  App_Domain_Presence_Entities_Locations_Description_Description:
    'App\\Domain\\Presence\\Entities\\Locations\\Description\\Description',
};

export const DescriptionObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Description_Description:
    'App\\Domain\\Presence\\Entities\\Locations\\Description\\Description',
} as const;

export type Description = {
  /**
   * Long description for the location
   */
  long?: string;
  /**
   * Short description for the location
   */
  short?: string;
  /**
   * Individual maximum length for short description, can vary on some ListingServices e.g. Facebook
   */
  shortDescriptionMaxLength?: number;
  /**
   * Individual maximum length for long description
   */
  longDescriptionMaxLength?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DescriptionObjectType)[keyof typeof DescriptionObjectType];
};
