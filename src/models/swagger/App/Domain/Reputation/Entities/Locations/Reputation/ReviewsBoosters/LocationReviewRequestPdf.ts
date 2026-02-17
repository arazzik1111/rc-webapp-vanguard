export const LocationReviewRequestPdfObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestPdf:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestPdf',
};

export const LocationReviewRequestPdfObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestPdf:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestPdf',
} as const;

export type LocationReviewRequestPdf = {
  /**
   * The base64 encoded image content
   */
  content?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationReviewRequestPdfObjectType)[keyof typeof LocationReviewRequestPdfObjectType];
};
