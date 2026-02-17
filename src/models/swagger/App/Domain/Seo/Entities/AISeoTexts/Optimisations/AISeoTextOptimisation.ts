export const AISeoTextOptimisationObjectType = {
  App_Domain_Seo_Entities_AISeoTexts_Optimisations_AISeoTextOptimisation:
    'App\\Domain\\Seo\\Entities\\AISeoTexts\\Optimisations\\AISeoTextOptimisation',
};

export const AISeoTextOptimisationObjectTypeStrict = {
  App_Domain_Seo_Entities_AISeoTexts_Optimisations_AISeoTextOptimisation:
    'App\\Domain\\Seo\\Entities\\AISeoTexts\\Optimisations\\AISeoTextOptimisation',
} as const;

export type AISeoTextOptimisation = {
  /**
   * The optimisation that was made to the AI Seo Text
   */
  optimisation?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AISeoTextOptimisationObjectType)[keyof typeof AISeoTextOptimisationObjectType];
};
