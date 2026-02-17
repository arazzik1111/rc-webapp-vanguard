import { GoogleLocationAttributeOption } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Attributes/GoogleLocationAttributeOption';

export const GoogleLocationAttributeValueType = {
  bool: 'bool',
  enum: 'enum',
  repeated_enum: 'repeated_enum',
  url: 'url',
};

export const GoogleLocationAttributeValueTypeStrict = {
  bool: 'bool',
  enum: 'enum',
  repeated_enum: 'repeated_enum',
  url: 'url',
} as const;

export const GoogleLocationAttributeObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Attributes_GoogleLocationAttribute:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Attributes\\GoogleLocationAttribute',
};

export const GoogleLocationAttributeObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Attributes_GoogleLocationAttribute:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Attributes\\GoogleLocationAttribute',
} as const;

export type GoogleLocationAttribute = {
  /**
   * The google identifier for the attribute, e.g. attributes\/requires_appointments
   */
  googleIdentifier: string;
  /**
   * The localized display name for the attribute, if available; otherwise, the English display name.
   */
  displayName?: string;
  /**
   * The localized display name of the group that contains this attribute, if available; otherwise, the English group name. Related attributes are collected into a group and should be displayed together under the heading given here.
   */
  groupDisplayName?: string;
  /**
   * The type of values possible for this attribute
   * - bool: The values for this attribute are boolean values.
   * - enum: The attribute has a predetermined list of available values that can be used. Metadata for this attribute will list these values.
   * - url: The attribute value is an enum with multiple possible values that can be explicitly set or unset.
   * - repeated_enum: The attribute value is an enum with multiple possible values that can be explicitly set or unset.
   *  Allowed Values:
   * -   `bool`: The values for this attribute are boolean values.
   * -   `enum`: The attribute has a predetermined list of available values that can be used. Metadata for this attribute will list these values.
   * -   `repeated_enum`: The attribute value is an enum with multiple possible values that can be explicitly set or unset.
   * -   `url`: The values for this attribute are URLs.
   *
   */
  valueType?: (typeof GoogleLocationAttributeValueType)[keyof typeof GoogleLocationAttributeValueType];
  /**
   * If true, the attribute supports multiple values. If false, only a single value should be provided.
   */
  isRepeatable?: boolean;
  /**
   * If true, the attribute is deprecated and should no longer be used. If deprecated, updating this attribute will not result in an error, but updates will not be saved. At some point after being deprecated, the attribute will be removed entirely and it will become an error.
   */
  isDeprecated?: boolean;
  /**
   * For some types of attributes (for example, enums), a list of supported values and corresponding display names for those values is provided.
   */
  options?: GoogleLocationAttributeOption[];
  /**
   * Values that are acutally set/seleted for current GoogleLocation. If not provided, business has not set values for this Attribute
   */
  setValues?: Array<boolean | string>;
  /**
   * Values that are acutally unset, means they are explicitely defined as not available, e.g. a credit card type is explicitely defined as not accepted.
   */
  unsetValues?: Array<boolean | string>;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationAttributeObjectType)[keyof typeof GoogleLocationAttributeObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
