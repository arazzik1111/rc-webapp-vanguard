import { AIGeneratedContentOptimisations } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/AI/Optimisations/AIGeneratedContentOptimisations';
import { MainContent } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/MainContent';

export const AIGeneratedMainContentsObjectType = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_AIGeneratedMainContents:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\AIGeneratedMainContents',
};

export const AIGeneratedMainContentsObjectTypeStrict = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_AIGeneratedMainContents:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\AIGeneratedMainContents',
} as const;

export type AIGeneratedMainContents = {
  optimisations?: AIGeneratedContentOptimisations;
  elements?: MainContent[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIGeneratedMainContentsObjectType)[keyof typeof AIGeneratedMainContentsObjectType];
};
