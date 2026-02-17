export const AIGeneratedContentOptimisationObjectType = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_Optimisations_AIGeneratedContentOptimisation:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\Optimisations\\AIGeneratedContentOptimisation',
};

export const AIGeneratedContentOptimisationObjectTypeStrict = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_Optimisations_AIGeneratedContentOptimisation:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\Optimisations\\AIGeneratedContentOptimisation',
} as const;

export type AIGeneratedContentOptimisation = {
  /**
   * The optimisation that was made to the AI Seo Text
   */
  optimisation?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIGeneratedContentOptimisationObjectType)[keyof typeof AIGeneratedContentOptimisationObjectType];
};
