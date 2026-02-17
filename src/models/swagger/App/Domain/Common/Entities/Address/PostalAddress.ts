import { GeoBounds } from '@models/swagger/App/Domain/Common/Entities/GeoEntities/GeoBounds';
import { GeoPoint } from '@models/swagger/App/Domain/Common/Entities/GeoEntities/GeoPoint';
import { City } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Cities/City';
import { County } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Counties/County';
import { SubCounty } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Counties/SubCounty';
import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';
import { State } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/States/State';

export const PostalAddressPrecision = {
  APPROXIMATE: 'APPROXIMATE',
  ROOFTOP: 'ROOFTOP',
  GEOMETRIC_CENTER: 'GEOMETRIC_CENTER',
  RANGE_INTERPOLATED: 'RANGE_INTERPOLATED',
};

export const PostalAddressPrecisionStrict = {
  APPROXIMATE: 'APPROXIMATE',
  ROOFTOP: 'ROOFTOP',
  GEOMETRIC_CENTER: 'GEOMETRIC_CENTER',
  RANGE_INTERPOLATED: 'RANGE_INTERPOLATED',
} as const;

export const PostalAddressObjectType = {
  App_Domain_Common_Entities_Address_PostalAddress: 'App\\Domain\\Common\\Entities\\Address\\PostalAddress',
};

export const PostalAddressObjectTypeStrict = {
  App_Domain_Common_Entities_Address_PostalAddress: 'App\\Domain\\Common\\Entities\\Address\\PostalAddress',
} as const;

export type PostalAddress = {
  /**
   * A premise indicates a named location, usually a building or collection of buildings with a common name.
   * Verry common in UK and british colonies, e.g. "Grand Building" in London
   */
  premise?: string;
  /**
   * A subpremise  indicates a first-order entity below a named location, usually a singular building within a collection of buildings with a common name
   * Verry common in UK and british colonies, e.g. "Grand Building" in London
   */
  subpremise?: string;
  /**
   * Address street number
   */
  streetNo?: string;
  /**
   * Address street
   */
  street?: string;
  /**
   * Address line 1
   */
  addressLine1?: string;
  /**
   * Address line 2
   */
  addressLine2?: string;
  /**
   * Address postal code
   */
  postalCode?: string;
  /**
   * Address postal code suffix
   */
  postalCodeSuffix?: string;
  /**
   * Address sublocality
   */
  sublocality?: string;
  /**
   * id of City
   */
  cityId?: number;
  city?: City;
  subCounty?: SubCounty;
  county?: County;
  /**
   * id of State
   */
  stateId?: number;
  state?: State;
  /**
   * id of Country
   */
  countryId?: number;
  country?: Country;
  geoPoint?: GeoPoint;
  customerSelectedGeoPoint?: GeoPoint;
  geoBounds?: GeoBounds;
  /**
   * Standardized formatted address
   */
  formattedAddress?: string;
  /**
   * Language code of the address, as geodata can be localized, e.g. Munich vs. München, the language is relevant. If not provided, default native language of country is used.
   */
  languageCode?: string;
  /**
   * whether the address should be displayed e.g. on directories or not
   */
  displayAddress?: boolean;
  /**
   * Input address for Geocoding operation
   */
  inputAddress?: string;
  /**
   * Json encoded Raw results from geocode operation used to avoid live geocoding calls
   */
  geoCodeRawResults?: string;
  /**
   * Precision of PostalAddress geocodation
   *  Allowed Values:
   * -   `APPROXIMATE`: indicates that the returned result is approximate
   * -   `ROOFTOP`: indicates that the returned result reflects a precise geocode
   * -   `GEOMETRIC_CENTER`: indicates that the returned result is the geometric center of a result such as a polyline (for example, a street) or polygon (region)
   * -   `RANGE_INTERPOLATED`: indicates that the returned result reflects an approximation (usually on a road) interpolated between two precise points (such as intersections). Interpolated results are generally returned when rooftop geocodes are unavailable for a street address
   *
   */
  precision?: (typeof PostalAddressPrecision)[keyof typeof PostalAddressPrecision];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostalAddressObjectType)[keyof typeof PostalAddressObjectType];
};
