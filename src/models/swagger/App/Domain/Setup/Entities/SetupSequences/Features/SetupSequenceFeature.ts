import { Feature } from '@models/swagger/App/Domain/Product/Entities/Features/Feature';
import { SetupSequence } from '@models/swagger/App/Domain/Setup/Entities/SetupSequences/SetupSequence';

export const SetupSequenceFeatureObjectType = {
  App_Domain_Setup_Entities_SetupSequences_Features_SetupSequenceFeature:
    'App\\Domain\\Setup\\Entities\\SetupSequences\\Features\\SetupSequenceFeature',
};

export const SetupSequenceFeatureObjectTypeStrict = {
  App_Domain_Setup_Entities_SetupSequences_Features_SetupSequenceFeature:
    'App\\Domain\\Setup\\Entities\\SetupSequences\\Features\\SetupSequenceFeature',
} as const;

export type SetupSequenceFeature = {
  /**
   * The id of the Feature associated to SetupSequence
   */
  featureId?: number;
  feature?: Feature;
  /**
   * The id of the SetupSequence associated to feature
   */
  setupSequenceId?: number;
  setupSequence?: SetupSequence;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupSequenceFeatureObjectType)[keyof typeof SetupSequenceFeatureObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
