import { Link } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/Link';

export const LinksObjectType = {
  App_Domain_Seo_Entities_WebPages_ContentElements_Links:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\Links',
};

export const LinksObjectTypeStrict = {
  App_Domain_Seo_Entities_WebPages_ContentElements_Links:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\Links',
} as const;

export type Links = {
  elements?: Link[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinksObjectType)[keyof typeof LinksObjectType];
};
