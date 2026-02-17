import { Keywords } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keywords';
import { SeoKeyword } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Keywords/SeoKeyword';

export const SeoKeywordsObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Keywords_SeoKeywords:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Keywords\\SeoKeywords',
};

export const SeoKeywordsObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Keywords_SeoKeywords:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Keywords\\SeoKeywords',
} as const;

export type SeoKeywords = {
  keywords?: Keywords;
  elements?: SeoKeyword[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SeoKeywordsObjectType)[keyof typeof SeoKeywordsObjectType];
};
