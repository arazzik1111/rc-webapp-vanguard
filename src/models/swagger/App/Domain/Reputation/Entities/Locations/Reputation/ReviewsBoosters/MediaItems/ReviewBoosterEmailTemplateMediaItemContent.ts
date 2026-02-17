export const ReviewBoosterEmailTemplateMediaItemContentObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_MediaItems_ReviewBoosterEmailTemplateMediaItemContent:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\MediaItems\\ReviewBoosterEmailTemplateMediaItemContent',
};

export const ReviewBoosterEmailTemplateMediaItemContentObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_MediaItems_ReviewBoosterEmailTemplateMediaItemContent:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\MediaItems\\ReviewBoosterEmailTemplateMediaItemContent',
} as const;

export type ReviewBoosterEmailTemplateMediaItemContent = {
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewBoosterEmailTemplateMediaItemContentObjectType)[keyof typeof ReviewBoosterEmailTemplateMediaItemContentObjectType];
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
