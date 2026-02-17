import { GaSuggestedAdSchema } from '@models/swagger//GaSuggestedAdSchema';

export type GaSuggestedAdsSchema = {
  searchBarKeyword?: string;
  offset?: number;
  limit?: number;
  totalAds?: number;
  totalActiveAds?: number;
  ads?: GaSuggestedAdSchema[];
};
