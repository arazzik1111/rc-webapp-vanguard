export const VerificationMediaItemContentObjectType = {
  App_Domain_Common_Entities_Company_CompanyVerification_MediaItems_VerificationMediaItemContent:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\MediaItems\\VerificationMediaItemContent',
};

export const VerificationMediaItemContentObjectTypeStrict = {
  App_Domain_Common_Entities_Company_CompanyVerification_MediaItems_VerificationMediaItemContent:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\MediaItems\\VerificationMediaItemContent',
} as const;

export type VerificationMediaItemContent = {
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof VerificationMediaItemContentObjectType)[keyof typeof VerificationMediaItemContentObjectType];
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
