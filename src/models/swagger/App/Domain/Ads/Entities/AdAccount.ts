import { AdKeywords } from '@models/swagger/App/Domain/Ads/Entities/AdKeywords/AdKeywords';
import { MetaAdAccountSettings } from '@models/swagger/App/Domain/Ads/Entities/Facebook/MetaAdAccountSettings';
import { GoogleAdAccountSettings } from '@models/swagger/App/Domain/Ads/Entities/Google/GoogleAdAccountSettings';
import { BoostCampaigns } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostCampaigns';
import { FacebookConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Connection/FacebookConnection';
import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const AdAccountObjectType = {
  App_Domain_Ads_Entities_AdAccount: 'App\\Domain\\Ads\\Entities\\AdAccount',
};

export const AdAccountObjectTypeStrict = {
  App_Domain_Ads_Entities_AdAccount: 'App\\Domain\\Ads\\Entities\\AdAccount',
} as const;

export type AdAccount = {
  location?: Location;
  /**
   * The id of the Location
   */
  locationId?: number;
  metaSettings?: MetaAdAccountSettings;
  googleSettings?: GoogleAdAccountSettings;
  keywords?: AdKeywords;
  boostCampaigns?: BoostCampaigns;
  facebookConnection?: FacebookConnection;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AdAccountObjectType)[keyof typeof AdAccountObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
