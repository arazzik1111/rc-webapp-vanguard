export const CountryAddressSettingObjectType = {
  App_Domain_Common_Entities_PoliticalEntities_Countries_CountryAddressSetting:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Countries\\CountryAddressSetting',
};

export const CountryAddressSettingObjectTypeStrict = {
  App_Domain_Common_Entities_PoliticalEntities_Countries_CountryAddressSetting:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Countries\\CountryAddressSetting',
} as const;

export type CountryAddressSetting = {
  type?: string;
  /**
   * Street no. is mandatory in addresses
   */
  streetNoIsMandatory?: boolean;
  /**
   * Street is mandatory in addresses
   */
  streetIsMandatory?: boolean;
  /**
   * Street is mandatory in addresses
   */
  cityIsMandatory?: boolean;
  /**
   * Postal code is mandatory in addresses
   */
  postalCodeIsMandatory?: boolean;
  /**
   * State (administrative area level 1) is mandatory in addresses, e.g. USA, Mexico is mandatory
   */
  stateIsMandatory?: boolean;
  /**
   * County / Province (administrative area level 2) e.g. Madrid, La Rioja etc. Spain / Italy is mandatory
   */
  countyIsMandatory?: boolean;
  /**
   * County / Province (administrative area level 2) e.g. NA for Napoli is mandatory
   */
  countyShortCodeIsMandatory?: boolean;
  /**
   * Sub-County (administrativ areay level 3) e.g. Firence Italy
   */
  subCountyIsMandatory?: boolean;
  /**
   * Street no. is written before street in addresses
   */
  streetNoIsBeforeStreet?: boolean;
  /**
   * City is written before postal code in addresses
   */
  cityIsBeforePostalcode?: boolean;
  /**
   * Format of streetNo vs Street
   */
  streetNoFormat?: string;
  /**
   * Full Address format, e.g. %street% %number%, %postalCode% %city%, %country.name%
   */
  addressFormat?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CountryAddressSettingObjectType)[keyof typeof CountryAddressSettingObjectType];
};
