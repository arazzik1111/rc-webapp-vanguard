import { SearchQueries } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/SearchQueries';

export const MentionsSettingObjectType = {
  App_Domain_Reputation_Entities_Reputation_Settings_MentionsSetting:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Settings\\MentionsSetting',
};

export const MentionsSettingObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Settings_MentionsSetting:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Settings\\MentionsSetting',
} as const;

export type MentionsSetting = {
  searchQueries?: SearchQueries;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MentionsSettingObjectType)[keyof typeof MentionsSettingObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
