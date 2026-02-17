export const LocationReviewRequestImageObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestImage:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestImage',
};

export const LocationReviewRequestImageObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestImage:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestImage',
} as const;

export type LocationReviewRequestImage = {
  /**
   * The base64 encoded image content
   */
  content?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationReviewRequestImageObjectType)[keyof typeof LocationReviewRequestImageObjectType];
};
