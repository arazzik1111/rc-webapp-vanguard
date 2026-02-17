import { ReviewSourceMetrics } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewSources/ReviewSourceDetails/ReviewSourceMetrics';

export const ReviewSourceDetailProcessStatus = {
  INVALID_PAGE: 'INVALID_PAGE',
  SUCCESS: 'SUCCESS',
  NO_REVIEWS: 'NO_REVIEWS',
  ERROR: 'ERROR',
};

export const ReviewSourceDetailProcessStatusStrict = {
  INVALID_PAGE: 'INVALID_PAGE',
  SUCCESS: 'SUCCESS',
  NO_REVIEWS: 'NO_REVIEWS',
  ERROR: 'ERROR',
} as const;

export const ReviewSourceDetailObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReviewSourceDetails_ReviewSourceDetail:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReviewSourceDetails\\ReviewSourceDetail',
};

export const ReviewSourceDetailObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReviewSourceDetails_ReviewSourceDetail:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReviewSourceDetails\\ReviewSourceDetail',
} as const;

export type ReviewSourceDetail = {
  /**
   * The engine used for scraping reviews (e.g., "opentable")
   */
  engine?: string;
  /**
   * The date of the last review
   */
  lastReviewDate?: string;
  /**
   * The ID of the last review
   */
  lastReviewId?: string;
  /**
   * The date when the reviews were last processed
   */
  lastProcessDate?: string;
  /**
   * The date when the reviews were first processed
   */
  firstProcessDate?: string;
  metrics?: ReviewSourceMetrics;
  /**
   * The status of the processing (e.g., "SUCCESS")
   *  Allowed Values:
   * -   `INVALID_PAGE`: The provided details URL does not point to a valid business page (HTTP 410)
   * -   `SUCCESS`: The page was successfully processed and contains reviews
   * -   `NO_REVIEWS`: The page was successfully processed but contains no reviews
   * -   `ERROR`: Scraping failed due to an unexpected issue
   *
   */
  processStatus?: (typeof ReviewSourceDetailProcessStatus)[keyof typeof ReviewSourceDetailProcessStatus];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewSourceDetailObjectType)[keyof typeof ReviewSourceDetailObjectType];
};
