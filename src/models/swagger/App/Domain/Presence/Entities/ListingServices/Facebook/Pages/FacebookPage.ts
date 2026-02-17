import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { PublicFacebookPosts } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Pages/Posts/PublicFacebookPosts';
import { Description } from '@models/swagger/App/Domain/Presence/Entities/Locations/Description/Description';
import { LocationMediaItems } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItems';
import { OpeningHours } from '@models/swagger/App/Domain/Presence/Entities/OpeningHours/OpeningHours';
import { Website } from '@models/swagger/App/Domain/Seo/Entities/Website';

export const FacebookPageObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Pages_FacebookPage:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Pages\\FacebookPage',
};

export const FacebookPageObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Pages_FacebookPage:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Pages\\FacebookPage',
} as const;

export type FacebookPage = {
  /**
   * The external id of the Facebook Page
   */
  pageId?: string;
  /**
   * The Facebook Page's name
   */
  pageName?: string;
  /**
   * The Facebook Page's username
   */
  userName?: string;
  /**
   * The Facebook Page's url
   */
  pageUrl?: string;
  company?: Company;
  contactInfos?: ContactInfos;
  address?: PostalAddress;
  website?: Website;
  mediaItems?: LocationMediaItems;
  description?: Description;
  /**
   * Specifies if the Facebook Page has the has new page experience or not
   */
  hasNewPageExperience?: boolean;
  openingHours?: OpeningHours;
  /**
   * The Facebook Page Profile Picture URL
   */
  pageProfilePictureUrl?: string;
  /**
   * The Facebook Page primary category
   */
  facebookCategoryName?: string;
  /**
   * Temporary status - used for opening hours update
   */
  temporaryStatus?: string;
  posts?: PublicFacebookPosts;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookPageObjectType)[keyof typeof FacebookPageObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
