import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';

export const StateObjectType = {
  App_Domain_Common_Entities_PoliticalEntities_States_State:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\States\\State',
};

export const StateObjectTypeStrict = {
  App_Domain_Common_Entities_PoliticalEntities_States_State:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\States\\State',
} as const;

export type State = {
  /**
   * The states full name
   */
  name?: string;
  /**
   * The state's alias
   */
  alias?: string;
  /**
   * The short name of the state
   * , NY, CA, BY
   */
  shortCode?: string;
  /**
   * The id of the country, the state is located in
   */
  countryId?: number;
  country?: Country;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof StateObjectType)[keyof typeof StateObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
