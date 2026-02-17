import { Domain } from '@models/swagger/App/Domain/Seo/Entities/Domains/Domain';

export type RankingsBusiness = {
  domain?: Domain;
  /**
   * Google Maps ID (cid), for which to monitor rankings
   */
  googleMapsId?: string;
};
