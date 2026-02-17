import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';

export const CountriesObjectType = {
  App_Domain_Common_Entities_PoliticalEntities_Countries_Countries:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Countries\\Countries',
};

export const CountriesObjectTypeStrict = {
  App_Domain_Common_Entities_PoliticalEntities_Countries_Countries:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Countries\\Countries',
} as const;

export type Countries = {
  elements?: Country[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CountriesObjectType)[keyof typeof CountriesObjectType];
};
