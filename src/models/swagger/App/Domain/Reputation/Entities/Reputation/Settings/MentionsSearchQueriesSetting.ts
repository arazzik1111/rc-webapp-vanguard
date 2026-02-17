import { SearchQueries } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Mentions/SearchQueries';

export const MentionsSearchQueriesSettingObjectType = {
  App_Domain_Reputation_Entities_Reputation_Settings_MentionsSearchQueriesSetting:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Settings\\MentionsSearchQueriesSetting',
};

export type MentionsSearchQueriesSetting = {
  searchQueries?: SearchQueries;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MentionsSearchQueriesSettingObjectType)[keyof typeof MentionsSearchQueriesSettingObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
