import { LocationMediaItemsGoogleImportDetails } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/GoogleImportDetails/LocationMediaItemsGoogleImportDetails';
import { LocationMediaItem } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItem';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const LocationMediaItemsObjectType = {
  App_Domain_Presence_Entities_Locations_MediaItems_LocationMediaItems:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\LocationMediaItems',
};

export const LocationMediaItemsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_MediaItems_LocationMediaItems:
    'App\\Domain\\Presence\\Entities\\Locations\\MediaItems\\LocationMediaItems',
} as const;

export type LocationMediaItems = {
  /**
   * Number of uploaded images by owner
   */
  ownerTotal?: number;
  /**
   * Number of uploaded images by customers
   */
  customerTotal?: number;
  googleImportDetails?: LocationMediaItemsGoogleImportDetails;
  elements?: LocationMediaItem[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationMediaItemsObjectType)[keyof typeof LocationMediaItemsObjectType];
  changeHistory?: ChangeHistory;
};
