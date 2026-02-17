import { UberallCategory } from '@models/swagger/App/Domain/Common/Entities/Categories/UberallCategory';
import { GoogleCategories } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategories';

export const UberallCategoriesObjectType = {
  App_Domain_Common_Entities_Categories_UberallCategories:
    'App\\Domain\\Common\\Entities\\Categories\\UberallCategories',
};

export const UberallCategoriesObjectTypeStrict = {
  App_Domain_Common_Entities_Categories_UberallCategories:
    'App\\Domain\\Common\\Entities\\Categories\\UberallCategories',
} as const;

export type UberallCategories = {
  googleCategories?: GoogleCategories;
  elements?: UberallCategory[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UberallCategoriesObjectType)[keyof typeof UberallCategoriesObjectType];
};
