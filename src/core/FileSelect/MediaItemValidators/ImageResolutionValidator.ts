import { NonEmptyArray } from '@helpers/array-helpers';
import { getAspectRatioFormatted } from '@helpers/format-aspect-ratio';
import { ContentType, MediaItemFileType } from '@vanguard/Documents/Document.types';
import { MediaItemFile } from '@vanguard/Gallery/Gallery/Gallery';

import { IMAGE_VALIDATION_ERRORS } from '../validation-helpers/media-items-validations';
import { MediaItemValidator } from './MediaItemValidator';

type ImageResolutionValidatorProps = {
  minWidth?: number;
  maxWidth?: number;

  minHeight?: number;
  maxHeight?: number;

  minAspectRatio?: number;
  maxAspectRatio?: number;
};

export class ImageResolutionValidator extends MediaItemValidator {
  applicableFileTypes: NonEmptyArray<MediaItemFileType> = [
    ContentType.IMAGE_ANY,
    ContentType.IMAGE_JPEG,
    ContentType.IMAGE_JPG,
    ContentType.IMAGE_PNG,
  ];

  imageResolutionConfig?: ImageResolutionValidatorProps;

  private resolveValidatePromise?: (files: MediaItemFile[] | null) => void;

  constructor(config: ImageResolutionValidatorProps) {
    super();
    this.imageResolutionConfig = config;
  }

  validate = (files: MediaItemFile[]): Promise<MediaItemFile[] | null> => {
    return new Promise((resolve) => {
      this.resolveValidatePromise = resolve;
      this.validateImageFiles(files);
    });
  };

  private validateImageFiles = (mediaItems: MediaItemFile[]) => {
    const validatedMediaItems: MediaItemFile[] = [];

    for (const mediaItem of mediaItems) {
      validatedMediaItems.push(this.validateImage(mediaItem));
    }

    this.resolveValidatePromise?.(validatedMediaItems);
    this.resolveValidatePromise = undefined;
  };

  private validateImage = (mediaItem: MediaItemFile): MediaItemFile => {
    const { file } = mediaItem;

    mediaItem.isInvalid = mediaItem.isInvalid ?? false;
    mediaItem.validationErrors = mediaItem.validationErrors ?? [];

    if (!file || (mediaItem.fileType && !this.applicableFileTypes.includes(mediaItem.fileType))) {
      return mediaItem;
    }

    if ((mediaItem.metadata?.imageMetadata?.width ?? 0) > (this.imageResolutionConfig?.maxWidth ?? Number.MAX_VALUE)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: IMAGE_VALIDATION_ERRORS.RESOLUTION_TOO_LARGE,
        replacements: { imageSize: `${this.imageResolutionConfig?.maxWidth}px` },
      });
    }

    if ((mediaItem.metadata?.imageMetadata?.width ?? 0) < (this.imageResolutionConfig?.minWidth ?? 0)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: IMAGE_VALIDATION_ERRORS.RESOLUTION_TOO_SMALL,
        replacements: { imageSize: `${this.imageResolutionConfig?.minWidth}px` },
      });
    }

    if (
      (mediaItem.metadata?.imageMetadata?.height ?? 0) > (this.imageResolutionConfig?.maxHeight ?? Number.MAX_VALUE)
    ) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: IMAGE_VALIDATION_ERRORS.RESOLUTION_TOO_LARGE,
        replacements: { imageSize: `${this.imageResolutionConfig?.maxWidth}px` },
      });
    }

    if ((mediaItem.metadata?.imageMetadata?.height ?? 0) < (this.imageResolutionConfig?.minHeight ?? 0)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: IMAGE_VALIDATION_ERRORS.RESOLUTION_TOO_SMALL,
        replacements: { imageSize: `${this.imageResolutionConfig?.minWidth}px` },
      });
    }

    const aspectRatio =
      (mediaItem.metadata?.imageMetadata?.width ?? 0) / (mediaItem.metadata?.imageMetadata?.height ?? 1);

    if (aspectRatio > (this.imageResolutionConfig?.maxAspectRatio ?? Number.MAX_VALUE)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: IMAGE_VALIDATION_ERRORS.ASPECT_RATIO_NOT_IN_LIMITS,
        replacements: {
          min_aspect_ratio: getAspectRatioFormatted(this.imageResolutionConfig?.minAspectRatio ?? 1) ?? '',
          max_aspect_ratio: getAspectRatioFormatted(this.imageResolutionConfig?.maxAspectRatio ?? 1) ?? '',
        },
      });
    }

    if (aspectRatio < (this.imageResolutionConfig?.minAspectRatio ?? 0)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: IMAGE_VALIDATION_ERRORS.ASPECT_RATIO_NOT_IN_LIMITS,
        replacements: {
          min_aspect_ratio: getAspectRatioFormatted(this.imageResolutionConfig?.minAspectRatio ?? 1) ?? '',
          max_aspect_ratio: getAspectRatioFormatted(this.imageResolutionConfig?.maxAspectRatio ?? 1) ?? '',
        },
      });
    }

    return mediaItem;
  };
}
