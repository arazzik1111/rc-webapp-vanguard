import { LocationMediaItems } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItems';
import { ValidationErrors } from '@models/swagger/DDD/Infrastructure/Validation/ValidationErrors';

export type LocationMediaItemsPostResponseDto = {
  mediaItems?: LocationMediaItems;
  imageInfoValidationErrors?: ValidationErrors;
  /**
   * The identifier of the location image for which the base64 is not decodeable
   */
  invalidBase64Identifiers?: string[];
};
