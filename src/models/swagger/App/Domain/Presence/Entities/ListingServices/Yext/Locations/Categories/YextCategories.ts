import { GoogleCategories } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategories';
import { YextCategory } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/Locations/Categories/YextCategory';

export const YextCategoriesObjectType = {
  App_Domain_Presence_Entities_ListingServices_Yext_Locations_Categories_YextCategories:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\Locations\\Categories\\YextCategories',
};

export const YextCategoriesObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Yext_Locations_Categories_YextCategories:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\Locations\\Categories\\YextCategories',
} as const;

export type YextCategories = {
  googleCategories?: GoogleCategories;
  elements?: YextCategory[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof YextCategoriesObjectType)[keyof typeof YextCategoriesObjectType];
};
