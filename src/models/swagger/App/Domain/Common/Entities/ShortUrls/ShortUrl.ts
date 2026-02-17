import { ShortUrlReach } from '@models/swagger/App/Domain/Common/Entities/ShortUrls/ShortUrlReach';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';
import { Entity } from '@models/swagger/DDD/Domain/Base/Entities/Entity';

export const ShortUrlParentEntityType = {
  App_Domain_Presence_Entities_Locations_Posts_Post: 'App\\Domain\\Presence\\Entities\\Locations\\Posts\\Post',
  App_Domain_Presence_Entities_Locations_Events_Event: 'App\\Domain\\Presence\\Entities\\Locations\\Events\\Event',
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequest:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequest',
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReviewSource:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReviewSource',
};

export const ShortUrlParentEntityTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_Post: 'App\\Domain\\Presence\\Entities\\Locations\\Posts\\Post',
  App_Domain_Presence_Entities_Locations_Events_Event: 'App\\Domain\\Presence\\Entities\\Locations\\Events\\Event',
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequest:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequest',
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReviewSource:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReviewSource',
} as const;

export const ShortUrlObjectType = {
  App_Domain_Common_Entities_ShortUrls_ShortUrl: 'App\\Domain\\Common\\Entities\\ShortUrls\\ShortUrl',
};

export const ShortUrlObjectTypeStrict = {
  App_Domain_Common_Entities_ShortUrls_ShortUrl: 'App\\Domain\\Common\\Entities\\ShortUrls\\ShortUrl',
} as const;

export type ShortUrl = {
  /**
   * URL shortener id
   */
  shortUrlIdentifier?: string;
  /**
   * Where the short url redirects to
   */
  targetUrl: string;
  /**
   * The external id of the short url
   */
  externalId?: string;
  /**
   * The description of the short url
   */
  description?: string;
  parentEntity?: Entity;
  /**
   * The id of the parent entity
   */
  parentEntityId: number;
  /**
   * The locationId of the parent entity
   */
  locationId: number;
  /**
   * The class name of the parent entity
   *  Allowed Values:
   * -   `App\Domain\Presence\Entities\Locations\Posts\Post`
   * -   `App\Domain\Presence\Entities\Locations\Events\Event`
   * -   `App\Domain\Reputation\Entities\Locations\Reputation\ReviewsBoosters\LocationReviewRequest`
   * -   `App\Domain\Reputation\Entities\Locations\Reputation\ReviewSources\ReviewSource`
   *
   */
  parentEntityType: (typeof ShortUrlParentEntityType)[keyof typeof ShortUrlParentEntityType];
  /**
   * The shortened url of the entity
   */
  shortenedUrl?: string;
  reach?: ShortUrlReach;
  /**
   * The status of the short url
   */
  statusCode?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ShortUrlObjectType)[keyof typeof ShortUrlObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
