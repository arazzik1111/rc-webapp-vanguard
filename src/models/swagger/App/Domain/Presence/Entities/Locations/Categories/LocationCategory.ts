import { GoogleCategory } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategory';
import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';

export const LocationCategoryObjectType = {
  App_Domain_Presence_Entities_Locations_Categories_LocationCategory:
    'App\\Domain\\Presence\\Entities\\Locations\\Categories\\LocationCategory',
};

export const LocationCategoryObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Categories_LocationCategory:
    'App\\Domain\\Presence\\Entities\\Locations\\Categories\\LocationCategory',
} as const;

export type LocationCategory = {
  /**
   * The id of the location
   */
  locationId?: string | number;
  location?: Location;
  /**
   * The id of the category
   */
  categoryId?: number;
  category?: GoogleCategory;
  /**
   * The priority of the category for the location
   */
  priority?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationCategoryObjectType)[keyof typeof LocationCategoryObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
