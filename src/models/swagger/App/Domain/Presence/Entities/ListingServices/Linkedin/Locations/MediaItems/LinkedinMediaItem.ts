export const LinkedinMediaItemStatus = {
  AVAILABLE: 'AVAILABLE',
  PROCESSING: 'PROCESSING',
  PROCESSING_FAILED: 'PROCESSING_FAILED',
  WAITING_UPLOAD: 'WAITING_UPLOAD',
};

export const LinkedinMediaItemStatusStrict = {
  AVAILABLE: 'AVAILABLE',
  PROCESSING: 'PROCESSING',
  PROCESSING_FAILED: 'PROCESSING_FAILED',
  WAITING_UPLOAD: 'WAITING_UPLOAD',
} as const;

export const LinkedinMediaItemObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_MediaItems_LinkedinMediaItem:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\MediaItems\\LinkedinMediaItem',
};

export const LinkedinMediaItemObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_MediaItems_LinkedinMediaItem:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\MediaItems\\LinkedinMediaItem',
} as const;

export type LinkedinMediaItem = {
  /**
   * The unique unr id of the media asset
   */
  externalId?: string;
  /**
   * The download url expiration time
   */
  downloadUrlExpiresAt?: string;
  /**
   * The public  url to download/ view the media asset
   */
  downloadUrl?: string;
  /**
   * The status of the
   *  Allowed Values:
   * -   `AVAILABLE`: The status of the media asset : he asset is available to be served.
   * -   `PROCESSING`: The status of the media asset : Asset is processing to generate missing artifacts.
   * -   `PROCESSING_FAILED`: The status of the media asset : Processing failed due to client error such as file size too large, unsupported file format, internal error
   * -   `WAITING_UPLOAD`: The status of the media asset : Waiting for client to upload source file or uploading process to be completed.
   *
   */
  status?: (typeof LinkedinMediaItemStatus)[keyof typeof LinkedinMediaItemStatus];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedinMediaItemObjectType)[keyof typeof LinkedinMediaItemObjectType];
};
