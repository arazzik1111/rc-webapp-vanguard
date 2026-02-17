import { SetupSequence } from '@models/swagger/App/Domain/Setup/Entities/SetupSequences/SetupSequence';

export const SetupStepObjectType = {
  App_Domain_Setup_Entities_SetupSteps_SetupStep: 'App\\Domain\\Setup\\Entities\\SetupSteps\\SetupStep',
};

export const SetupStepObjectTypeStrict = {
  App_Domain_Setup_Entities_SetupSteps_SetupStep: 'App\\Domain\\Setup\\Entities\\SetupSteps\\SetupStep',
} as const;

export type SetupStep = {
  /**
   * Name of the setup step
   */
  name?: string;
  /**
   * The id of the associated SetupSequence
   */
  setupSequenceId?: number;
  /**
   * If true, this step marks the final step of a SetupSequence, when completing this step, the Sequence is completed
   */
  isFinalStep?: boolean;
  setupSequence?: SetupSequence;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupStepObjectType)[keyof typeof SetupStepObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
