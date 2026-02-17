export const LocationMediaItemContentObjectType = {
  App_Domain_Presence_Entities_Locations_MediaItems_LocationMediaItemContent:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\LocationMediaItemContent',
};

export const LocationMediaItemContentObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_MediaItems_LocationMediaItemContent:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\LocationMediaItemContent',
} as const;

export type LocationMediaItemContent = {
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationMediaItemContentObjectType)[keyof typeof LocationMediaItemContentObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  base64EncodedContent?: string;
  /**
   * Height in pixels
   */
  height?: number;
  /**
   * Width in pixels
   */
  width?: number;
  /**
   * File size in bytes
   */
  fileSize?: number;
  /**
   * File format
   */
  fileFormat?: string;
  /**
   * Name of the mediaItem
   */
  name?: string;
  /**
   * If true, photo uses compression
   */
  compression?: boolean;
  /**
   * Mediaitem external id
   */
  externalId?: string;
};
