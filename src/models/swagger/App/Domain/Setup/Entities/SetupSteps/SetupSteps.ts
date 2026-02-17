import { SetupStep } from '@models/swagger/App/Domain/Setup/Entities/SetupSteps/SetupStep';

export const SetupStepsObjectType = {
  App_Domain_Setup_Entities_SetupSteps_SetupSteps: 'App\\Domain\\Setup\\Entities\\SetupSteps\\SetupSteps',
};

export const SetupStepsObjectTypeStrict = {
  App_Domain_Setup_Entities_SetupSteps_SetupSteps: 'App\\Domain\\Setup\\Entities\\SetupSteps\\SetupSteps',
} as const;

export type SetupSteps = {
  elements?: SetupStep[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupStepsObjectType)[keyof typeof SetupStepsObjectType];
};
