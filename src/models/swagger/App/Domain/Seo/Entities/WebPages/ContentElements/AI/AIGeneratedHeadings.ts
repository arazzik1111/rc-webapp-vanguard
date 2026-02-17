import { AIGeneratedContentOptimisations } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/AI/Optimisations/AIGeneratedContentOptimisations';
import { Headings } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/Headings';

export const AIGeneratedHeadingsObjectType = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_AIGeneratedHeadings:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\AIGeneratedHeadings',
};

export const AIGeneratedHeadingsObjectTypeStrict = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_AIGeneratedHeadings:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\AIGeneratedHeadings',
} as const;

export type AIGeneratedHeadings = {
  optimisations?: AIGeneratedContentOptimisations;
  elements?: Headings[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIGeneratedHeadingsObjectType)[keyof typeof AIGeneratedHeadingsObjectType];
};
