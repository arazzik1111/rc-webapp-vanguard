import { DateValue } from '@models/swagger/App/Domain/Common/Entities/Charts/DateValue';

export const DateValueSequenceObjectType = {
  App_Domain_Common_Entities_Charts_DateValueSequence: 'App\\Domain\\Common\\Entities\\Charts\\DateValueSequence',
};

export const DateValueSequenceObjectTypeStrict = {
  App_Domain_Common_Entities_Charts_DateValueSequence: 'App\\Domain\\Common\\Entities\\Charts\\DateValueSequence',
} as const;

export type DateValueSequence = {
  /**
   * The name of the DateValue Sequence / Series
   */
  name?: string;
  elements?: DateValue[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DateValueSequenceObjectType)[keyof typeof DateValueSequenceObjectType];
};
