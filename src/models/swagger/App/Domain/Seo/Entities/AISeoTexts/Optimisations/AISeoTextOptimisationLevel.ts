export const AISeoTextOptimisationLevelObjectType = {
  App_Domain_Seo_Entities_AISeoTexts_Optimisations_AISeoTextOptimisationLevel:
    'App\\Domain\\Seo\\Entities\\AISeoTexts\\Optimisations\\AISeoTextOptimisationLevel',
};

export const AISeoTextOptimisationLevelObjectTypeStrict = {
  App_Domain_Seo_Entities_AISeoTexts_Optimisations_AISeoTextOptimisationLevel:
    'App\\Domain\\Seo\\Entities\\AISeoTexts\\Optimisations\\AISeoTextOptimisationLevel',
} as const;

export type AISeoTextOptimisationLevel = {
  /**
   * The level of optimisation for the AI Seo Text
   */
  level?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AISeoTextOptimisationLevelObjectType)[keyof typeof AISeoTextOptimisationLevelObjectType];
};
