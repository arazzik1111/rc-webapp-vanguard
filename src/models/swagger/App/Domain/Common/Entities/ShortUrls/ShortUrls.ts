import { ShortUrl } from '@models/swagger/App/Domain/Common/Entities/ShortUrls/ShortUrl';

export const ShortUrlsObjectType = {
  App_Domain_Common_Entities_ShortUrls_ShortUrls: 'App\\Domain\\Common\\Entities\\ShortUrls\\ShortUrls',
};

export const ShortUrlsObjectTypeStrict = {
  App_Domain_Common_Entities_ShortUrls_ShortUrls: 'App\\Domain\\Common\\Entities\\ShortUrls\\ShortUrls',
} as const;

export type ShortUrls = {
  elements?: ShortUrl[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ShortUrlsObjectType)[keyof typeof ShortUrlsObjectType];
};
