export const PostMediaItemSettingStatus = {
  SYNCED: 'SYNCED',
  NOT_SYNCED: 'NOT_SYNCED',
  ERROR: 'ERROR',
  PROCESSING: 'PROCESSING',
};

export const PostMediaItemSettingStatusStrict = {
  SYNCED: 'SYNCED',
  NOT_SYNCED: 'NOT_SYNCED',
  ERROR: 'ERROR',
  PROCESSING: 'PROCESSING',
} as const;

export const PostMediaItemSettingObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_MediaItems_PostMediaItemSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\MediaItems\\PostMediaItemSetting',
};

export const PostMediaItemSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_MediaItems_PostMediaItemSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\MediaItems\\PostMediaItemSetting',
} as const;

export type PostMediaItemSetting = {
  /**
   * Creation time of the MediaItem on this ListingService, if supported by ListingService
   */
  createdDateTime?: string;
  /**
   * ExternalId of MediaItem on particular ListingService
   */
  externalId?: string;
  /**
   * Message containing additional info for a MediaItem
   */
  message?: string;
  /**
   *
   *  Allowed Values:
   * -   `SYNCED`: MediaItem has been synced to
   * -   `NOT_SYNCED`: MediaItem has not been synced
   * -   `ERROR`: MediaItem is invalid
   * -   `PROCESSING`: MediaItem is still processing to be uploaded to the Social Media Platform
   *
   */
  status?: (typeof PostMediaItemSettingStatus)[keyof typeof PostMediaItemSettingStatus];
  /**
   * Public URL on particular ListingService
   */
  publicUrl?: string;
  /**
   * Expiration time of the MediaItem on this ListingService, if supported by ListingService
   */
  publicUrlExpiresAt?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostMediaItemSettingObjectType)[keyof typeof PostMediaItemSettingObjectType];
};
