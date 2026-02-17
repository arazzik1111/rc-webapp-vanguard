import { SetupSequenceFeatures } from '@models/swagger/App/Domain/Setup/Entities/SetupSequences/Features/SetupSequenceFeatures';
import { SetupSteps } from '@models/swagger/App/Domain/Setup/Entities/SetupSteps/SetupSteps';

export const SetupSequenceType = {
  COMMON: 'COMMON',
  ADS: 'ADS',
  PRESENCE: 'PRESENCE',
};

export const SetupSequenceTypeStrict = {
  COMMON: 'COMMON',
  ADS: 'ADS',
  PRESENCE: 'PRESENCE',
} as const;

export const SetupSequenceObjectType = {
  App_Domain_Setup_Entities_SetupSequences_SetupSequence: 'App\\Domain\\Setup\\Entities\\SetupSequences\\SetupSequence',
};

export const SetupSequenceObjectTypeStrict = {
  App_Domain_Setup_Entities_SetupSequences_SetupSequence: 'App\\Domain\\Setup\\Entities\\SetupSequences\\SetupSequence',
} as const;

export type SetupSequence = {
  /**
   * The name of the setup section
   *  Allowed Values:
   * -   `COMMON`: The type of SetupSequence COMMON
   * -   `ADS`: The type of SetupSequence ADS
   * -   `PRESENCE`: The type of SetupSequence PRESENCE
   *
   */
  type?: (typeof SetupSequenceType)[keyof typeof SetupSequenceType];
  sequenceFeatures?: SetupSequenceFeatures;
  setupSteps?: SetupSteps;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupSequenceObjectType)[keyof typeof SetupSequenceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
