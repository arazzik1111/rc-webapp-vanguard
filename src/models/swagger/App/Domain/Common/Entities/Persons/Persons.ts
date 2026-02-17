import { Person } from '@models/swagger/App/Domain/Common/Entities/Persons/Person';

export const PersonsObjectType = {
  App_Domain_Common_Entities_Persons_Persons: 'App\\Domain\\Common\\Entities\\Persons\\Persons',
};

export const PersonsObjectTypeStrict = {
  App_Domain_Common_Entities_Persons_Persons: 'App\\Domain\\Common\\Entities\\Persons\\Persons',
} as const;

export type Persons = {
  elements?: Person[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PersonsObjectType)[keyof typeof PersonsObjectType];
};
