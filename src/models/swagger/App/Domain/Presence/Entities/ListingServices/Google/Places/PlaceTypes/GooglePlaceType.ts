export const GooglePlaceTypeObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_PlaceTypes_GooglePlaceType:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\PlaceTypes\\GooglePlaceType',
};

export const GooglePlaceTypeObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_PlaceTypes_GooglePlaceType:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\PlaceTypes\\GooglePlaceType',
} as const;

export type GooglePlaceType = {
  type?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GooglePlaceTypeObjectType)[keyof typeof GooglePlaceTypeObjectType];
};
