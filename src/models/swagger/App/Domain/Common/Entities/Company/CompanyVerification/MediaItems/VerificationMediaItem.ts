import { VerificationMediaItemContent } from '@models/swagger/App/Domain/Common/Entities/Company/CompanyVerification/MediaItems/VerificationMediaItemContent';
import { VerificationMediaItemSettings } from '@models/swagger/App/Domain/Common/Entities/Company/CompanyVerification/MediaItems/VerificationMediaItemSettings';

export const VerificationMediaItemType = {
  DOCUMENT: 'DOCUMENT',
};

export const VerificationMediaItemTypeStrict = {
  DOCUMENT: 'DOCUMENT',
} as const;

export const VerificationMediaItemObjectType = {
  App_Domain_Common_Entities_Company_CompanyVerification_MediaItems_VerificationMediaItem:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\MediaItems\\VerificationMediaItem',
};

export const VerificationMediaItemObjectTypeStrict = {
  App_Domain_Common_Entities_Company_CompanyVerification_MediaItems_VerificationMediaItem:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\MediaItems\\VerificationMediaItem',
} as const;

export type VerificationMediaItem = {
  /**
   * The type of the media item
   *  Allowed Values:
   * -   `DOCUMENT`: Document type for media item
   *
   */
  type?: (typeof VerificationMediaItemType)[keyof typeof VerificationMediaItemType];
  /**
   * The location id of the Identification Media Item
   */
  locationId?: number;
  /**
   * Internal unique Identifier of the Photo
   */
  identifier?: string;
  settings?: VerificationMediaItemSettings;
  identificationMediaItemContent?: VerificationMediaItemContent;
  /**
   * Public URL of the mediaitem
   */
  publicUrl?: string;
  /**
   * Description can be displayed on directories
   */
  description?: string;
  /**
   * - Represents the number of views
   */
  viewCount?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof VerificationMediaItemObjectType)[keyof typeof VerificationMediaItemObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
