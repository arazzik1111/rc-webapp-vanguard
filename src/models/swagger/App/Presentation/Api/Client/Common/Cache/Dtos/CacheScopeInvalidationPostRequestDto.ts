import { CacheScopeInvalidation } from '@models/swagger/App/Domain/Common/Entities/CacheScopes/Invalidations/CacheScopeInvalidation';

export type CacheScopeInvalidationPostRequestDto = {
  cacheScopeInvalidation: CacheScopeInvalidation;
};
