import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { LocationMediaItemContent } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItemContent';
import { LocationMediaItemSettings } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItemSettings';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const LocationMediaItemScope = {
  LOGO: 'LOGO',
  MAIN: 'MAIN',
  PHOTO: 'PHOTO',
  SQUARED_LOGO: 'SQUARED_LOGO',
  LANDSCAPE: 'LANDSCAPE',
  FACEBOOK_LANDSCAPE: 'FACEBOOK_LANDSCAPE',
  EXTERIOR: 'EXTERIOR',
  INTERIOR: 'INTERIOR',
  FOOD_AND_DRINK: 'FOOD_AND_DRINK',
  MENU: 'MENU',
  PRODUCT: 'PRODUCT',
  TEAMS: 'TEAMS',
  AT_WORK: 'AT_WORK',
  COMMON_AREA: 'COMMON_AREA',
  ROOMS: 'ROOMS',
};

export const LocationMediaItemScopeStrict = {
  LOGO: 'LOGO',
  MAIN: 'MAIN',
  PHOTO: 'PHOTO',
  SQUARED_LOGO: 'SQUARED_LOGO',
  LANDSCAPE: 'LANDSCAPE',
  FACEBOOK_LANDSCAPE: 'FACEBOOK_LANDSCAPE',
  EXTERIOR: 'EXTERIOR',
  INTERIOR: 'INTERIOR',
  FOOD_AND_DRINK: 'FOOD_AND_DRINK',
  MENU: 'MENU',
  PRODUCT: 'PRODUCT',
  TEAMS: 'TEAMS',
  AT_WORK: 'AT_WORK',
  COMMON_AREA: 'COMMON_AREA',
  ROOMS: 'ROOMS',
} as const;

export const LocationMediaItemType = {
  photo: 'photo',
};

export const LocationMediaItemTypeStrict = {
  photo: 'photo',
} as const;

export const LocationMediaItemObjectType = {
  App_Domain_Presence_Entities_Locations_MediaItems_LocationMediaItem:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\LocationMediaItem',
};

export const LocationMediaItemObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_MediaItems_LocationMediaItem:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\LocationMediaItem',
} as const;

export type LocationMediaItem = {
  /**
   * The Location Id
   */
  locationId?: number;
  location?: Location;
  /**
   * True if uploaded by owner else is uploaded by customer
   */
  isOwnerUploaded?: boolean;
  /**
   * If true, the aspect ratio of the MediaItem has been verified and is correct.
   * An incorrect aspect ratio can occur only on scopes that require a fix aspect ratio (MAIN and LOGO).
   */
  hasCorrectAspectRatio?: boolean;
  /**
   * Scope of the photo (dependent of directory)
   *  Allowed Values:
   * -   `LOGO`: logo of the location
   * -   `MAIN`: the main Photo of the location
   * -   `PHOTO`: generic photo
   * -   `SQUARED_LOGO`: squared logo of the location
   * -   `LANDSCAPE`: Google Cover Photo
   * -   `FACEBOOK_LANDSCAPE`: Facebook Cover Photo
   * -   `EXTERIOR`: Google's Exterior Photo tag - availability dependent on a location's business category
   * -   `INTERIOR`: Google's Interior Photo tag - availability dependent on a location's business category
   * -   `FOOD_AND_DRINK`: Google's Food and Drink Photo tag - availability dependent on a location's business category
   * -   `MENU`: Google's Menu Photo tag, which should only be photos of the menu - availability dependent on a location's business category
   * -   `PRODUCT`: Google's Product Photo tag - availability dependent on a location's business category
   * -   `TEAMS`: Google's Teams Photo tag - availability dependent on a location's business category
   * -   `AT_WORK`: Google's At Work Photo tag - availability dependent on a location's business category
   * -   `COMMON_AREA`: Google's Common Area Photo tag - availability dependent on a location's business category
   * -   `ROOMS`: Google's Rooms Photo tag - availability dependent on a location's business category
   *
   */
  scope?: (typeof LocationMediaItemScope)[keyof typeof LocationMediaItemScope];
  /**
   * Internal unique Identifier of the Photo
   */
  identifier?: string;
  settings?: LocationMediaItemSettings;
  mediaItemContent?: LocationMediaItemContent;
  /**
   * The type of the mediaitem
   *  Allowed Values:
   * -   `photo`: Photo type for media item
   *
   */
  type?: (typeof LocationMediaItemType)[keyof typeof LocationMediaItemType];
  /**
   * Public URL of the mediaitem
   */
  publicUrl?: string;
  /**
   * Description can be displayed on directories
   */
  description?: string;
  /**
   * - Represents the number of views
   */
  viewCount?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationMediaItemObjectType)[keyof typeof LocationMediaItemObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
