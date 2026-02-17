import { AISeoTextOptimisation } from '@models/swagger/App/Domain/Seo/Entities/AISeoTexts/Optimisations/AISeoTextOptimisation';
import { AISeoTextOptimisationLevel } from '@models/swagger/App/Domain/Seo/Entities/AISeoTexts/Optimisations/AISeoTextOptimisationLevel';

export const AISeoTextOptimisationsObjectType = {
  App_Domain_Seo_Entities_AISeoTexts_Optimisations_AISeoTextOptimisations:
    'App\\Domain\\Seo\\Entities\\AISeoTexts\\Optimisations\\AISeoTextOptimisations',
};

export const AISeoTextOptimisationsObjectTypeStrict = {
  App_Domain_Seo_Entities_AISeoTexts_Optimisations_AISeoTextOptimisations:
    'App\\Domain\\Seo\\Entities\\AISeoTexts\\Optimisations\\AISeoTextOptimisations',
} as const;

export type AISeoTextOptimisations = {
  optimisationLevel?: AISeoTextOptimisationLevel;
  elements?: AISeoTextOptimisation[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AISeoTextOptimisationsObjectType)[keyof typeof AISeoTextOptimisationsObjectType];
};
