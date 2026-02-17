export const CountrySettingObjectType = {
  App_Domain_Common_Entities_PoliticalEntities_Countries_CountrySetting:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Countries\\CountrySetting',
};

export const CountrySettingObjectTypeStrict = {
  App_Domain_Common_Entities_PoliticalEntities_Countries_CountrySetting:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Countries\\CountrySetting',
} as const;

export type CountrySetting = {
  type?: string;
  /**
   * If true, the firstName is common to be written before lastName
   */
  firstnameBeforeLastname?: boolean;
  /**
   * Weather a persons title is relevant in this country
   */
  showTitleField?: boolean;
  /**
   * Weather country requires GDPR cookie notice or not
   */
  showCookieNotice?: boolean;
  /**
   * Credit cards available in this country
   */
  availableCreditCards?: string[];
  /**
   * The default mode for trial
   */
  defaultTrialMode?: string;
  /**
   * If true, this country even if not active, can be active for some partners
   */
  isActiveForPartners?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CountrySettingObjectType)[keyof typeof CountrySettingObjectType];
};
