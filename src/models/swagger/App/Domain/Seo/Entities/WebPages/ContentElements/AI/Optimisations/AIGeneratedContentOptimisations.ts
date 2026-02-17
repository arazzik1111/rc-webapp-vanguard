import { Keywords } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keywords';
import { AIGeneratedContentOptimisation } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/AI/Optimisations/AIGeneratedContentOptimisation';
import { AIGeneratedContentOptimisationsLevel } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/AI/Optimisations/AIGeneratedContentOptimisationsLevel';

export const AIGeneratedContentOptimisationsObjectType = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_Optimisations_AIGeneratedContentOptimisations:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\Optimisations\\AIGeneratedContentOptimisations',
};

export const AIGeneratedContentOptimisationsObjectTypeStrict = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_Optimisations_AIGeneratedContentOptimisations:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\Optimisations\\AIGeneratedContentOptimisations',
} as const;

export type AIGeneratedContentOptimisations = {
  /**
   * The original content
   */
  originalContent?: string;
  /**
   * The content type
   */
  contentType?: string;
  keywordsThatHadToBeUsedInContent?: Keywords;
  /**
   * The optimised content
   */
  optimisedContent?: string;
  optimisationsLevel?: AIGeneratedContentOptimisationsLevel;
  elements?: AIGeneratedContentOptimisation[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIGeneratedContentOptimisationsObjectType)[keyof typeof AIGeneratedContentOptimisationsObjectType];
};
