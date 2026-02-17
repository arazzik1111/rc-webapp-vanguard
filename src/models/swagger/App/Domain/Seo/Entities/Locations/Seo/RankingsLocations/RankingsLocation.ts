export type RankingsLocation = {
  /**
   * The name of the location
   */
  locationName?: string;
  /**
   * The alias of the location
   */
  alias?: string;
  /**
   * The language code, e.g. de
   */
  languageCode?: string;
  /**
   * The corresponding search engine
   */
  engine?: string;
  /**
   * Country short code, e.g. DE
   */
  countryShortCode?: string;
  /**
   * True, if location is country, otherwise false
   */
  isCountry?: boolean;
};
