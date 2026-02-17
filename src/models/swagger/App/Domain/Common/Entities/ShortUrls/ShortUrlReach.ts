import { DateValue } from '@models/swagger/DDD/Domain/Common/Entities/Charts/DateValue';

export const ShortUrlReachObjectType = {
  App_Domain_Common_Entities_ShortUrls_ShortUrlReach: 'App\\Domain\\Common\\Entities\\ShortUrls\\ShortUrlReach',
};

export const ShortUrlReachObjectTypeStrict = {
  App_Domain_Common_Entities_ShortUrls_ShortUrlReach: 'App\\Domain\\Common\\Entities\\ShortUrls\\ShortUrlReach',
} as const;

export type ShortUrlReach = {
  totalReach?: number;
  /**
   * The name of the DateValue Sequence / Series
   */
  name?: string;
  elements?: DateValue[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ShortUrlReachObjectType)[keyof typeof ShortUrlReachObjectType];
};
