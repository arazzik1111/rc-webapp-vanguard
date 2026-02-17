import { SetupSequenceCompletion } from '@models/swagger/App/Domain/Setup/Entities/SetupSequences/SetupSequenceCompletions/SetupSequenceCompletion';

export const SetupSequenceCompletionsObjectType = {
  App_Domain_Setup_Entities_SetupSequences_SetupSequenceCompletions_SetupSequenceCompletions:
    'App\\Domain\\Setup\\Entities\\SetupSequences\\SetupSequenceCompletions\\SetupSequenceCompletions',
};

export const SetupSequenceCompletionsObjectTypeStrict = {
  App_Domain_Setup_Entities_SetupSequences_SetupSequenceCompletions_SetupSequenceCompletions:
    'App\\Domain\\Setup\\Entities\\SetupSequences\\SetupSequenceCompletions\\SetupSequenceCompletions',
} as const;

export type SetupSequenceCompletions = {
  common?: SetupSequenceCompletion;
  ads?: SetupSequenceCompletion;
  presence?: SetupSequenceCompletion;
  elements?: SetupSequenceCompletion[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupSequenceCompletionsObjectType)[keyof typeof SetupSequenceCompletionsObjectType];
};
