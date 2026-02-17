export type CreateCampaignBody = {
  _key?: string;
  campaignId?: string;
  keywords?: { text: string; language: string }[];
  location?: {
    cannonical: string;
    lat: number;
    long: number;
    country_code: string;
  }[];
  categories?: string[];
  rankings_min?: number;
  rankings_max?: number;
  is_mock_campaign?: boolean;
  allow_without_website?: boolean;
  check_ads?: boolean;
  ads_marker?: string;
  check_cms?: boolean;
  search_granularity?: 'city' | 'suburb' | 'adaptive' | '';
  allow_cms_list?: [];
  exclude_cms_list?: [];
  exclude_campaign_list?: [];
  exclude_if_previous_campaign?: boolean;
};
