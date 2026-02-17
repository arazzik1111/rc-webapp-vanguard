import { GaSuggestedAdsSchema } from '@models/swagger//GaSuggestedAdsSchema';

export type GaSuggestedAdsResponseSchema = {
  status?: number;
  data?: GaSuggestedAdsSchema;
  message?: string;
};
