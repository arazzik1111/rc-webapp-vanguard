import { ShortUrls } from '@models/swagger/App/Domain/Common/Entities/ShortUrls/ShortUrls';
import { ValidationErrors } from '@models/swagger/DDD/Infrastructure/Validation/ValidationErrors';

export type ShortUrlsBatchCreateResponseDto = {
  shortUrls: ShortUrls;
  shortUrlsValidationErrors?: ValidationErrors;
  invalidShortUrls?: ShortUrls;
};
