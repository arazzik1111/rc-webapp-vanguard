import { ShortUrl } from '@models/swagger/App/Domain/Common/Entities/ShortUrls/ShortUrl';
import { Directory } from '@models/swagger/App/Domain/Presence/Entities/Directories/Directory';
import { ReviewSourceReputationScores } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewSources/ReputationScores/ReviewSourceReputationScores';
import { ReviewSourceDetail } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewSources/ReviewSourceDetails/ReviewSourceDetail';
import { ReviewSourceUrlValidator } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewSources/UrlValidator/ReviewSourceUrlValidator';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const ReviewSourceStatus = {
  SOURCE_NOT_ADDED: 'SOURCE_NOT_ADDED',
  DISPLAYING_REVIEWS: 'DISPLAYING_REVIEWS',
  FETCHING_REVIEWS: 'FETCHING_REVIEWS',
  ERROR_UPDATING_URL: 'ERROR_UPDATING_URL',
  REVIEW_SOURCE_DISABLED: 'REVIEW_SOURCE_DISABLED',
  REVIEW_SOURCE_FETCH_ERROR: 'REVIEW_SOURCE_FETCH_ERROR',
};

export const ReviewSourceStatusStrict = {
  SOURCE_NOT_ADDED: 'SOURCE_NOT_ADDED',
  DISPLAYING_REVIEWS: 'DISPLAYING_REVIEWS',
  FETCHING_REVIEWS: 'FETCHING_REVIEWS',
  ERROR_UPDATING_URL: 'ERROR_UPDATING_URL',
  REVIEW_SOURCE_DISABLED: 'REVIEW_SOURCE_DISABLED',
  REVIEW_SOURCE_FETCH_ERROR: 'REVIEW_SOURCE_FETCH_ERROR',
} as const;

export const ReviewSourceObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReviewSource:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReviewSource',
};

export const ReviewSourceObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReviewSource:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReviewSource',
} as const;

export type ReviewSource = {
  /**
   * The ID of the Location Reputation Entity associated with the Review Source
   */
  locationReputationId?: number;
  /**
   * The ID of the Directory associated with the Review Source
   */
  directoryId?: number;
  directory?: Directory;
  /**
   * The URL of the review source
   */
  url?: string;
  /**
   * The status of the Review Source
   *  Allowed Values:
   * -   `SOURCE_NOT_ADDED`: The customer did not add the review source url
   * -   `DISPLAYING_REVIEWS`: The review source engine can provide reviews for the listing
   * -   `FETCHING_REVIEWS`: The review source engine is fetching reviews for the given listing
   * -   `ERROR_UPDATING_URL`: The review source engine has an error updating the review source url
   * -   `REVIEW_SOURCE_DISABLED`: The review source engine has been disabled from Argus
   * -   `REVIEW_SOURCE_FETCH_ERROR`: The review source engine encountered an error while fetching reviews
   *
   */
  status?: (typeof ReviewSourceStatus)[keyof typeof ReviewSourceStatus];
  /**
   * Whether the Source is added to favorites
   */
  isFavorite?: boolean;
  /**
   * Whether the Review Source is provided by the Full Listing Service
   */
  isListingServiceBased?: boolean;
  urlValidator?: ReviewSourceUrlValidator;
  scrapeDetails?: ReviewSourceDetail;
  reputationScores?: ReviewSourceReputationScores;
  shortUrl?: ShortUrl;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewSourceObjectType)[keyof typeof ReviewSourceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
