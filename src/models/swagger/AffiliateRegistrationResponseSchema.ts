import { AffiliateRegistrationSchema } from '@models/swagger//AffiliateRegistrationSchema';

export type AffiliateRegistrationResponseSchema = {
  status?: number;
  data?: AffiliateRegistrationSchema;
  message?: string;
};
