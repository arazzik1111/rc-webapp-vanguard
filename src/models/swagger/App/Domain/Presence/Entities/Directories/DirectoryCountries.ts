import { DirectoryCountry } from '@models/swagger/App/Domain/Presence/Entities/Directories/DirectoryCountry';

export const DirectoryCountriesObjectType = {
  App_Domain_Presence_Entities_Directories_DirectoryCountries:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryCountries',
};

export const DirectoryCountriesObjectTypeStrict = {
  App_Domain_Presence_Entities_Directories_DirectoryCountries:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryCountries',
} as const;

export type DirectoryCountries = {
  elements?: DirectoryCountry[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryCountriesObjectType)[keyof typeof DirectoryCountriesObjectType];
};
