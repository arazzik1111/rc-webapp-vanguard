import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { GoogleIds } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Common/GoogleIds';
import { GoogleCategories } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategories';
import { Listings } from '@models/swagger/App/Domain/Presence/Entities/Locations/Listings/Listings';
import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { LocationMediaItems } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItems';
import { Posts } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Posts';
import { SocialAccounts } from '@models/swagger/App/Domain/Presence/Entities/Social/SocialAccounts';
import { LocationCompetitorReputation } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Competitors/Reputation/LocationCompetitorReputation';
import { LocationComptitorSeo } from '@models/swagger/App/Domain/Seo/Entities/Locations/Competitors/Seo/LocationComptitorSeo';
import { RankingsBusiness } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsBusinesses/RankingsBusiness';
import { Website } from '@models/swagger/App/Domain/Seo/Entities/Website';

export const LocationCompetitorSource = {
  CUSTOMER_SELECTED: 'CUSTOMER_SELECTED',
  GOOGLE: 'GOOGLE',
};

export const LocationCompetitorSourceStrict = {
  CUSTOMER_SELECTED: 'CUSTOMER_SELECTED',
  GOOGLE: 'GOOGLE',
} as const;

export const LocationCompetitorObjectType = {
  App_Domain_Presence_Entities_Locations_Competitors_LocationCompetitor:
    'App\\Domain\\Presence\\Entities\\Locations\\Competitors\\LocationCompetitor',
};

export const LocationCompetitorObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Competitors_LocationCompetitor:
    'App\\Domain\\Presence\\Entities\\Locations\\Competitors\\LocationCompetitor',
} as const;

export type LocationCompetitor = {
  /**
   * General multipurpose externalId
   */
  externalId?: string;
  socialAccounts?: SocialAccounts;
  googleIds?: GoogleIds;
  listings?: Listings;
  /**
   * The id of the Location the Competitor belongs to
   */
  locationId?: string | number;
  location?: Location;
  company?: Company;
  /**
   * The name of the Competitor
   */
  name?: string;
  categories?: GoogleCategories;
  mediaItems?: LocationMediaItems;
  contactInfos?: ContactInfos;
  address?: PostalAddress;
  /**
   * Competitor's WebsiteId
   */
  websiteId?: number;
  website?: Website;
  seo?: LocationComptitorSeo;
  /**
   * If true, competitor is monitored in RADAR system
   */
  usedForRadar?: boolean;
  /**
   * If true, competitor was manually selected by client
   */
  autoSelected?: boolean;
  reputation?: LocationCompetitorReputation;
  /**
   * Source of the competitor data
   *  Allowed Values:
   * -   `CUSTOMER_SELECTED`: Source of the competitor data Customer Selected
   * -   `GOOGLE`: Source of the competitor data Google
   *
   */
  source?: (typeof LocationCompetitorSource)[keyof typeof LocationCompetitorSource];
  /**
   * If competitors are of source GOOGLE, visibilityScore represents the visibility based on given or known keywords
   */
  visibilityScore?: number;
  /**
   * In some circumstances the location itself is returned alongside it's competitors, if true, this competitor represents the location itself
   */
  isOwnLocation?: boolean;
  posts?: Posts;
  rankingsBusiness?: RankingsBusiness;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationCompetitorObjectType)[keyof typeof LocationCompetitorObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
