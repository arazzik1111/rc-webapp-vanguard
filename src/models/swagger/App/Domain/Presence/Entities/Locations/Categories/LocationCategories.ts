import { UberallCategories } from '@models/swagger/App/Domain/Common/Entities/Categories/UberallCategories';
import { GoogleCategories } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategories';
import { GoogleCategory } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategory';
import { YextCategories } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/Locations/Categories/YextCategories';
import { LocationCategory } from '@models/swagger/App/Domain/Presence/Entities/Locations/Categories/LocationCategory';

export const LocationCategoriesObjectType = {
  App_Domain_Presence_Entities_Locations_Categories_LocationCategories:
    'App\\Domain\\Presence\\Entities\\Locations\\Categories\\LocationCategories',
};

export const LocationCategoriesObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Categories_LocationCategories:
    'App\\Domain\\Presence\\Entities\\Locations\\Categories\\LocationCategories',
} as const;

export type LocationCategories = {
  primary?: GoogleCategory;
  categories?: GoogleCategories;
  uberallCategories?: UberallCategories;
  yextCategories?: YextCategories;
  elements?: LocationCategory[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationCategoriesObjectType)[keyof typeof LocationCategoriesObjectType];
};
