import { SetupSequence } from '@models/swagger/App/Domain/Setup/Entities/SetupSequences/SetupSequence';

export const SetupSequencesObjectType = {
  App_Domain_Setup_Entities_SetupSequences_SetupSequences:
    'App\\Domain\\Setup\\Entities\\SetupSequences\\SetupSequences',
};

export const SetupSequencesObjectTypeStrict = {
  App_Domain_Setup_Entities_SetupSequences_SetupSequences:
    'App\\Domain\\Setup\\Entities\\SetupSequences\\SetupSequences',
} as const;

export type SetupSequences = {
  elements?: SetupSequence[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupSequencesObjectType)[keyof typeof SetupSequencesObjectType];
};
