import { PostMediaItems } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/MediaItems/PostMediaItems';
import { ValidationErrors } from '@models/swagger/DDD/Infrastructure/Validation/ValidationErrors';

export type PostMediaItemsPatchResponseDto = {
  mediaItems?: PostMediaItems;
  imageInfoValidationErrors?: ValidationErrors;
  /**
   * The identifier of the location image for which the base64 is not decodeable
   */
  invalidBase64Identifiers?: string[];
};
