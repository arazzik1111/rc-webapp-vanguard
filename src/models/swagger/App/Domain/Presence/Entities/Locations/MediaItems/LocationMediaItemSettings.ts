import { LocationMediaItemSetting } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItemSetting';

export const LocationMediaItemSettingsObjectType = {
  App_Domain_Presence_Entities_Locations_MediaItems_LocationMediaItemSettings:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\LocationMediaItemSettings',
};

export const LocationMediaItemSettingsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_MediaItems_LocationMediaItemSettings:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\LocationMediaItemSettings',
} as const;

export type LocationMediaItemSettings = {
  uberall?: LocationMediaItemSetting;
  google?: LocationMediaItemSetting;
  facebook?: LocationMediaItemSetting;
  instagram?: LocationMediaItemSetting;
  linkedin?: LocationMediaItemSetting;
  yext?: LocationMediaItemSetting;
  /**
   * If true, the MediaItem is flagged to be deleted from ListingServices and if this is executed on all ListingServices successfully,
   * then the flag $deletionCompletedOnAllListingServices will be set to true
   */
  toBeDeleted?: boolean;
  /**
   * If true, then the MediaItem has been deleted from all directories and can now be safely deleted from DB
   */
  deletionCompletedOnAllListingServices?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationMediaItemSettingsObjectType)[keyof typeof LocationMediaItemSettingsObjectType];
};
