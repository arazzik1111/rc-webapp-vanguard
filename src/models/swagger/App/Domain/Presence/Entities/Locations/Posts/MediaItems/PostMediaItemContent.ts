export const PostMediaItemContentObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_MediaItems_PostMediaItemContent:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\MediaItems\\PostMediaItemContent',
};

export const PostMediaItemContentObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_MediaItems_PostMediaItemContent:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\MediaItems\\PostMediaItemContent',
} as const;

export type PostMediaItemContent = {
  temporaryS3Url?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostMediaItemContentObjectType)[keyof typeof PostMediaItemContentObjectType];
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
