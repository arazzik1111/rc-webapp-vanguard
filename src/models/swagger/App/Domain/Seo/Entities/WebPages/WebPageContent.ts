import { AIContentSettings } from '@models/swagger/App/Domain/AI/Entities/Settings/AIContentSettings/AIContentSettings';
import { Headings } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/Headings';
import { Links } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/Links';
import { MainContent } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/MainContent';
import { MetaDescription } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/MetaDescription';
import { Title } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/Title';

export const WebPageContentObjectType = {
  App_Domain_Seo_Entities_WebPages_WebPageContent: 'App\\Domain\\Seo\\Entities\\WebPages\\WebPageContent',
};

export const WebPageContentObjectTypeStrict = {
  App_Domain_Seo_Entities_WebPages_WebPageContent: 'App\\Domain\\Seo\\Entities\\WebPages\\WebPageContent',
} as const;

export type WebPageContent = {
  title?: Title;
  metaDescription?: MetaDescription;
  headings?: Headings;
  links?: Links;
  mainContent?: MainContent;
  aiContentSettings?: AIContentSettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof WebPageContentObjectType)[keyof typeof WebPageContentObjectType];
};
