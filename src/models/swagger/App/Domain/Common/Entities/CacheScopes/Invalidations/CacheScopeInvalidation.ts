import { Project } from '@models/swagger/App/Domain/Common/Entities/Projects/Project';
import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';
import { Account } from '@models/swagger/DDD/Domain/Common/Entities/Accounts/Account';

export const CacheScopeInvalidationCacheScope = {
  FEATURE_FLAGS: 'FEATURE_FLAGS',
  SUBSCRIPTIONS: 'SUBSCRIPTIONS',
  LOCATION_LISTINGSERVICES: 'LOCATION_LISTINGSERVICES',
  LOCATION_REPUTATION_REVIEWS: 'LOCATION_REPUTATION_REVIEWS',
  LOCATION_LISTINGS: 'LOCATION_LISTINGS',
  LOCATION_REVIEW_REQUEST: 'LOCATION_REVIEW_REQUEST',
  LOCATION_POSTS: 'LOCATION_POSTS',
  ACCOUNT_ROLES: 'ACCOUNT_ROLES',
};

export const CacheScopeInvalidationCacheScopeStrict = {
  FEATURE_FLAGS: 'FEATURE_FLAGS',
  SUBSCRIPTIONS: 'SUBSCRIPTIONS',
  LOCATION_LISTINGSERVICES: 'LOCATION_LISTINGSERVICES',
  LOCATION_REPUTATION_REVIEWS: 'LOCATION_REPUTATION_REVIEWS',
  LOCATION_LISTINGS: 'LOCATION_LISTINGS',
  LOCATION_REVIEW_REQUEST: 'LOCATION_REVIEW_REQUEST',
  LOCATION_POSTS: 'LOCATION_POSTS',
  ACCOUNT_ROLES: 'ACCOUNT_ROLES',
} as const;

export const CacheScopeInvalidationObjectType = {
  App_Domain_Common_Entities_CacheScopes_Invalidations_CacheScopeInvalidation:
    'App\\Domain\\Common\\Entities\\CacheScopes\\Invalidations\\CacheScopeInvalidation',
};

export const CacheScopeInvalidationObjectTypeStrict = {
  App_Domain_Common_Entities_CacheScopes_Invalidations_CacheScopeInvalidation:
    'App\\Domain\\Common\\Entities\\CacheScopes\\Invalidations\\CacheScopeInvalidation',
} as const;

export type CacheScopeInvalidation = {
  account?: Account;
  /**
   * The name of the CacheScope
   *  Allowed Values:
   * -   `FEATURE_FLAGS`
   * -   `SUBSCRIPTIONS`
   * -   `LOCATION_LISTINGSERVICES`
   * -   `LOCATION_REPUTATION_REVIEWS`
   * -   `LOCATION_LISTINGS`
   * -   `LOCATION_REVIEW_REQUEST`
   * -   `LOCATION_POSTS`
   * -   `ACCOUNT_ROLES`
   *
   */
  cacheScope: (typeof CacheScopeInvalidationCacheScope)[keyof typeof CacheScopeInvalidationCacheScope];
  /**
   * The id of the Project for which the cache scope needs to be invalidated
   */
  projectId?: number;
  project?: Project;
  /**
   * The id of the Location for which the cache scope needs to be invalidated
   */
  locationId?: number;
  location?: Location;
  /**
   * The id of the Account for which the cache scope needs to be invalidated
   */
  accountId?: number;
  /**
   * If set, this counter is decremented each time the cacheScope is invalidated
   */
  numberOfTimesToInvalidateCache?: number;
  /**
   * If set, the cache scope is invalidated until current time exceeded this date time
   */
  invalidateUntil?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CacheScopeInvalidationObjectType)[keyof typeof CacheScopeInvalidationObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
