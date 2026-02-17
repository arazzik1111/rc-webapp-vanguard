export const LocationMediaItemsGoogleImportDetailsObjectType = {
  App_Domain_Presence_Entities_Locations_MediaItems_GoogleImportDetails_LocationMediaItemsGoogleImportDetails:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\GoogleImportDetails\\LocationMediaItemsGoogleImportDetails',
};

export const LocationMediaItemsGoogleImportDetailsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_MediaItems_GoogleImportDetails_LocationMediaItemsGoogleImportDetails:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\GoogleImportDetails\\LocationMediaItemsGoogleImportDetails',
} as const;

export type LocationMediaItemsGoogleImportDetails = {
  /**
   * The location's id
   */
  locationId?: number;
  /**
   * Whether the GBP Media Items were imported as Location Media Items
   */
  imported?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationMediaItemsGoogleImportDetailsObjectType)[keyof typeof LocationMediaItemsGoogleImportDetailsObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
