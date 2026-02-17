export const AIGeneratedContentOptimisationsLevelObjectType = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_Optimisations_AIGeneratedContentOptimisationsLevel:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\Optimisations\\AIGeneratedContentOptimisationsLevel',
};

export const AIGeneratedContentOptimisationsLevelObjectTypeStrict = {
  App_Domain_Seo_Entities_WebPages_ContentElements_AI_Optimisations_AIGeneratedContentOptimisationsLevel:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\AI\\Optimisations\\AIGeneratedContentOptimisationsLevel',
} as const;

export type AIGeneratedContentOptimisationsLevel = {
  /**
   * The level of optimisation for the AI Seo Text
   */
  level?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIGeneratedContentOptimisationsLevelObjectType)[keyof typeof AIGeneratedContentOptimisationsLevelObjectType];
};
