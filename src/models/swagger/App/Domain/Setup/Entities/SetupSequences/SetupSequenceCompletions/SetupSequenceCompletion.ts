import { Account } from '@models/swagger/App/Domain/Common/Entities/Accounts/Account';
import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { SetupSequence } from '@models/swagger/App/Domain/Setup/Entities/SetupSequences/SetupSequence';

export const SetupSequenceCompletionObjectType = {
  App_Domain_Setup_Entities_SetupSequences_SetupSequenceCompletions_SetupSequenceCompletion:
    'App\\Domain\\Setup\\Entities\\SetupSequences\\SetupSequenceCompletions\\SetupSequenceCompletion',
};

export const SetupSequenceCompletionObjectTypeStrict = {
  App_Domain_Setup_Entities_SetupSequences_SetupSequenceCompletions_SetupSequenceCompletion:
    'App\\Domain\\Setup\\Entities\\SetupSequences\\SetupSequenceCompletions\\SetupSequenceCompletion',
} as const;

export type SetupSequenceCompletion = {
  /**
   * The id of the completed SetupSequence
   */
  setupSequenceId?: number;
  setupSequence?: SetupSequence;
  /**
   * The first time the SetupSequence has been accessed
   */
  timeOfFirstAccess?: string;
  /**
   * The time the SetupSequence has been completed
   */
  timeOfCompletion?: string;
  /**
   * Wheather Setup is completed or not
   */
  isCompleted?: boolean;
  /**
   * The id of the Account who accessed or completed the Step
   */
  accountId?: string | number;
  account?: Account;
  /**
   * The id of the Location for which the SetupSequence has been accessed or completed
   */
  locationId?: string | number;
  location?: Location;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SetupSequenceCompletionObjectType)[keyof typeof SetupSequenceCompletionObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
