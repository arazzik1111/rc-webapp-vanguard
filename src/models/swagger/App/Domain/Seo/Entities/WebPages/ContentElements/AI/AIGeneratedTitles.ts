import { AIGeneratedContentOptimisations } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/AI/Optimisations/AIGeneratedContentOptimisations';
import { Title } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/Title';

export const AIGeneratedTitlesObjectType = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_AIGeneratedTitles:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\AIGeneratedTitles',
};

export const AIGeneratedTitlesObjectTypeStrict = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_AIGeneratedTitles:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\AIGeneratedTitles',
} as const;

export type AIGeneratedTitles = {
  optimisations?: AIGeneratedContentOptimisations;
  elements?: Title[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIGeneratedTitlesObjectType)[keyof typeof AIGeneratedTitlesObjectType];
};
