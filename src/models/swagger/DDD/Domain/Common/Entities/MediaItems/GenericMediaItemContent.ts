export const GenericMediaItemContentObjectType = {
  DDD_Domain_Common_Entities_MediaItems_GenericMediaItemContent:
    'DDD\\Domain\\Common\\Entities\\MediaItems\\GenericMediaItemContent',
};

export const GenericMediaItemContentObjectTypeStrict = {
  DDD_Domain_Common_Entities_MediaItems_GenericMediaItemContent:
    'DDD\\Domain\\Common\\Entities\\MediaItems\\GenericMediaItemContent',
} as const;

export type GenericMediaItemContent = {
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GenericMediaItemContentObjectType)[keyof typeof GenericMediaItemContentObjectType];
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
