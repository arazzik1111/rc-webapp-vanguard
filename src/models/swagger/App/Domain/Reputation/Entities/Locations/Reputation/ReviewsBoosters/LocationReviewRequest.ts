import { QRCode } from '@models/swagger/App/Domain/Common/Entities/QRCode/QRCode';
import { ShortUrl } from '@models/swagger/App/Domain/Common/Entities/ShortUrls/ShortUrl';
import { LocationReviewRequestImage } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequestImage';
import { LocationReviewRequestPdf } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequestPdf';
import { LocationReviewRequestTemplate } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequestTemplate';
import { LocationReviewRequestUrl } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequestUrl';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const LocationReviewRequestObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequest:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequest',
};

export const LocationReviewRequestObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequest:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequest',
} as const;

export type LocationReviewRequest = {
  /**
   * The ID of the associated LocationReviewRequestUrl
   */
  locationReviewRequestUrlId: number;
  /**
   * The ID of the associated LocationReviewRequestTemplate
   */
  locationReviewRequestTemplateId: number;
  /**
   * The identifier of the LocationReviewRequest md5(LocationReviewRequest + $this->id)
   */
  identifier?: string;
  shortUrl?: ShortUrl;
  qrCode?: QRCode;
  locationReviewRequestUrl?: LocationReviewRequestUrl;
  locationReviewRequestTemplate?: LocationReviewRequestTemplate;
  locationReviewRequestImage?: LocationReviewRequestImage;
  locationReviewRequestPdf?: LocationReviewRequestPdf;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationReviewRequestObjectType)[keyof typeof LocationReviewRequestObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
