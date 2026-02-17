import { DateValue } from '@models/swagger/App/Domain/Common/Entities/Charts/DateValue';

export const VisibilityIndexDateValueSequenceName = {
  local: 'local',
  seo: 'seo',
  social: 'social',
  global: 'global',
};

export const VisibilityIndexDateValueSequenceNameStrict = {
  local: 'local',
  seo: 'seo',
  social: 'social',
  global: 'global',
} as const;

export const VisibilityIndexDateValueSequenceObjectType = {
  App_Domain_Presence_Entities_Locations_VisibilityIndex_VisibilityIndexDateValueSequence:
    'App\\Domain\\Presence\\Entities\\Locations\\VisibilityIndex\\VisibilityIndexDateValueSequence',
};

export const VisibilityIndexDateValueSequenceObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_VisibilityIndex_VisibilityIndexDateValueSequence:
    'App\\Domain\\Presence\\Entities\\Locations\\VisibilityIndex\\VisibilityIndexDateValueSequence',
} as const;

export type VisibilityIndexDateValueSequence = {
  /**
   * The name of the Local Visibility Index Data Serquence / Series
   *  Allowed Values:
   * -   `local`
   * -   `seo`
   * -   `social`
   * -   `global`
   *
   */
  name: (typeof VisibilityIndexDateValueSequenceName)[keyof typeof VisibilityIndexDateValueSequenceName];
  elements?: DateValue[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof VisibilityIndexDateValueSequenceObjectType)[keyof typeof VisibilityIndexDateValueSequenceObjectType];
};
