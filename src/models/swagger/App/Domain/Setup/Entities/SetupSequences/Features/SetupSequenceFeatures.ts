import { SetupSequenceFeature } from '@models/swagger/App/Domain/Setup/Entities/SetupSequences/Features/SetupSequenceFeature';

export const SetupSequenceFeaturesObjectType = {
  App_Domain_Setup_Entities_SetupSequences_Features_SetupSequenceFeatures:
    'App\\Domain\\Setup\\Entities\\SetupSequences\\Features\\SetupSequenceFeatures',
};

export const SetupSequenceFeaturesObjectTypeStrict = {
  App_Domain_Setup_Entities_SetupSequences_Features_SetupSequenceFeatures:
    'App\\Domain\\Setup\\Entities\\SetupSequences\\Features\\SetupSequenceFeatures',
} as const;

export type SetupSequenceFeatures = {
  elements?: SetupSequenceFeature[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupSequenceFeaturesObjectType)[keyof typeof SetupSequenceFeaturesObjectType];
};
