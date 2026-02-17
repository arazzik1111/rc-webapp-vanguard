import { GeoPoint } from '@models/swagger/App/Domain/Common/Entities/GeoEntities/GeoPoint';
import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';
import { State } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/States/State';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const CityObjectType = {
  App_Domain_Common_Entities_PoliticalEntities_Cities_City:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Cities\\City',
};

export const CityObjectTypeStrict = {
  App_Domain_Common_Entities_PoliticalEntities_Cities_City:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Cities\\City',
} as const;

export type City = {
  /**
   * The city's name
   */
  name?: string;
  /**
   * The city's alias
   */
  alias?: string;
  /**
   * The id of the state the city is located in
   */
  stateId?: number;
  /**
   * The id of the country the city is located in
   */
  countryId?: number;
  /**
   * LanguageCode in which the name is stored
   */
  languageCode?: string;
  geoPoint?: GeoPoint;
  /**
   * Wheather the city has coordinates or not
   */
  hasCoordinates?: boolean;
  /**
   * The count of businesses in this city
   */
  branchCount?: number;
  state?: State;
  country?: Country;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CityObjectType)[keyof typeof CityObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
