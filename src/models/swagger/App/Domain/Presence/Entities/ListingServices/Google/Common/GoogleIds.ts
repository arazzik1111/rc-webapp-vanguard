export const GoogleIdsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Common_GoogleIds:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Common\\GoogleIds',
};

export const GoogleIdsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Common_GoogleIds:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Common\\GoogleIds',
} as const;

export type GoogleIds = {
  /**
   * Google Business Profile ID, not to be confused with Google Maps ID (cid) or Google Places ID ID
   */
  googleBusinessProfileId?: string;
  /**
   * Google Place ID, not to be confused with Google Maps ID (cid) or Google My Business / Google Business Profile ID
   */
  googlePlaceId?: string;
  /**
   * Google Maps ID (cid), not to be confused with Google Place ID or Google My Business / Google Business Profile ID
   */
  googleMapsId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleIdsObjectType)[keyof typeof GoogleIdsObjectType];
};
