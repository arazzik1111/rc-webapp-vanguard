export const LocationMediaItemSettingStatus = {
  SYNCED: 'SYNCED',
  NOT_SYNCED: 'NOT_SYNCED',
};

export const LocationMediaItemSettingStatusStrict = {
  SYNCED: 'SYNCED',
  NOT_SYNCED: 'NOT_SYNCED',
} as const;

export const LocationMediaItemSettingObjectType = {
  App_Domain_Presence_Entities_Locations_MediaItems_LocationMediaItemSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\LocationMediaItemSetting',
};

export const LocationMediaItemSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_MediaItems_LocationMediaItemSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\LocationMediaItemSetting',
} as const;

export type LocationMediaItemSetting = {
  /**
   * Creation time of the MediaItem on this ListingService, if supported by ListingService
   */
  createdDateTime?: string;
  /**
   * ExternalId of MediaItem on particular ListingService
   */
  externalId?: string;
  /**
   * Public URL of the MediaItem on this ListingService, if supported by ListingService
   */
  publicUrl?: string;
  /**
   * If true, the MediaItem is to be deleted on this ListingSerivce, if status is then 'SYNCED', then MediaItem was successfully deleted on this ListingService
   */
  toBeDeleted?: boolean;
  /**
   * The status of the MediaItem on this ListingService
   *  Allowed Values:
   * -   `SYNCED`: MediaItem has been synced to
   * -   `NOT_SYNCED`: MediaItem has been synced to
   *
   */
  status?: (typeof LocationMediaItemSettingStatus)[keyof typeof LocationMediaItemSettingStatus];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationMediaItemSettingObjectType)[keyof typeof LocationMediaItemSettingObjectType];
};
