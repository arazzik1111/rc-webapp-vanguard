import { Keywords } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keywords';
import { SeoKeyword } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Keywords/SeoKeyword';

export const AIProposedKeywordsObjectType = {
  App_Domain_Common_Entities_Keywords_AI_AIProposedKeywords:
    'App\\Domain\\Common\\Entities\\Keywords\\AI\\AIProposedKeywords',
};

export const AIProposedKeywordsObjectTypeStrict = {
  App_Domain_Common_Entities_Keywords_AI_AIProposedKeywords:
    'App\\Domain\\Common\\Entities\\Keywords\\AI\\AIProposedKeywords',
} as const;

export type AIProposedKeywords = {
  keywords?: Keywords;
  elements?: SeoKeyword[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIProposedKeywordsObjectType)[keyof typeof AIProposedKeywordsObjectType];
};
