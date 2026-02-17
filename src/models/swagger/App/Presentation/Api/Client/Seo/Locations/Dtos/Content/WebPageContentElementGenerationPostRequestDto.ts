import { Keywords } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keywords';

export type WebPageContentElementGenerationPostRequestDto = {
  /**
   * The relative path of the subpage to the Location's Webpage Domain root path
   * Take care, that projects that are configured with a Domain root path different than / e.g. /en need e.g. to provide a path relative to the projects Domain
   * root path, e.g. for /en/about => /about
   */
  webPagePath: string;
  keywordsToBeUsedInContent?: Keywords;
  /**
   * The number of versions to generate of the particular ContentElement
   */
  numberOfVersionsToGenerate?: number;
};
