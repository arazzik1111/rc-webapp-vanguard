import { GoogleIds } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Common/GoogleIds';

export const GoogleLocationMetadataObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Metadata_GoogleLocationMetadata:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Metadata\\GoogleLocationMetadata',
};

export const GoogleLocationMetadataObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Metadata_GoogleLocationMetadata:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Metadata\\GoogleLocationMetadata',
} as const;

export type GoogleLocationMetadata = {
  /**
   * Output only. Indicates whether the place ID associated with this location has updates that need to be updated or rejected by the client. If this boolean is set, you should call the getGoogleUpdated method to lookup information that's needs to be verified.
   */
  hasGoogleUpdated?: boolean;
  /**
   * Output only. Indicates whether any of this Location's properties are in the edit pending state.
   */
  hasPendingEdits?: boolean;
  /**
   * Output only. Indicates whether the location can be deleted using the API.
   */
  canDelete?: boolean;
  /**
   * Output only. Indicates if the listing can manage local posts.
   */
  canOperateLocalPost?: boolean;
  /**
   * Output only. Indicates if the listing can modify the service list.
   */
  canModifyServiceList?: boolean;
  /**
   * Output only. Indicates if the listing is eligible for food menu.
   */
  canHaveFoodMenus?: boolean;
  /**
   * Output only. Indicates whether the location can operate on Health data.
   */
  canOperateHealthData?: boolean;
  /**
   * Output only. Indicates whether the location can operate on Lodging data.
   */
  canOperateLodgingData?: boolean;
  /**
   * Output only. The location resource that this location duplicates.
   */
  duplicateLocation?: string;
  /**
   * Output only. A link to the location on Google Maps.
   */
  googleMapsUrl?: string;
  googleIds?: GoogleIds;
  /**
   * Output only. A link to the offset on Google Search where a customer can leave a review for the location.
   */
  newReviewUri?: string;
  /**
   * Output only. Indicates if the listing is eligible for business calls.
   */
  canHaveBusinessCalls?: boolean;
  /**
   * Output only. Indicates if the listing has Voice of Merchant. If this boolean is false, you should call the locations.getVoiceOfMerchantState API to get details as to why they do not have Voice of Merchant.
   */
  hasVoiceOfMerchant?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationMetadataObjectType)[keyof typeof GoogleLocationMetadataObjectType];
};
