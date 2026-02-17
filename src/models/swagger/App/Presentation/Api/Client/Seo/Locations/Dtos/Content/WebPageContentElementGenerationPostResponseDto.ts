import { Headings } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/Headings';
import { MainContent } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/MainContent';
import { MetaDescription } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/MetaDescription';
import { Title } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/Title';

export type WebPageContentElementGenerationPostResponseDto = {
  /**
   * WebPageContentElement with AI generated Versions (either optimized or completely new generated)
   */
  webPageContentElementWithAIGeneratedVersions?: MetaDescription | Title | MainContent | Headings;
};
