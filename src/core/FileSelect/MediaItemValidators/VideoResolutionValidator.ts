import { NonEmptyArray } from '@helpers/array-helpers';
import { getAspectRatioFormatted } from '@helpers/format-aspect-ratio';
import { ContentType, MediaItemFileType } from '@vanguard/Documents/Document.types';
import { MediaItemFile } from '@vanguard/Gallery/Gallery/Gallery';

import { VIDEO_VALIDATION_ERRORS } from '../validation-helpers/media-items-validations';
import { MediaItemValidator } from './MediaItemValidator';

type VideoResolutionValidatorProps = {
  minWidth?: number;
  maxWidth?: number;

  minHeight?: number;
  maxHeight?: number;

  minAspectRatio?: number;
  maxAspectRatio?: number;
};

export class VideoResolutionValidator extends MediaItemValidator {
  applicableFileTypes: NonEmptyArray<MediaItemFileType> = [
    ContentType.VIDEO_ANY,
    ContentType.VIDEO_MP4,
    ContentType.VIDEO_MOV,
  ];

  videoResolutionConfig?: VideoResolutionValidatorProps;

  private resolveValidatePromise?: (files: MediaItemFile[] | null) => void;

  constructor(config: VideoResolutionValidatorProps) {
    super();
    this.videoResolutionConfig = config;
  }

  validate = (files: MediaItemFile[]): Promise<MediaItemFile[] | null> => {
    return new Promise((resolve) => {
      this.resolveValidatePromise = resolve;
      this.validateVideoFiles(files);
    });
  };

  private validateVideoFiles = (mediaItems: MediaItemFile[]) => {
    const validatedMediaItems: MediaItemFile[] = [];

    for (const mediaItem of mediaItems) {
      validatedMediaItems.push(this.validateVideo(mediaItem));
    }

    this.resolveValidatePromise?.(validatedMediaItems);
    this.resolveValidatePromise = undefined;
  };

  private validateVideo = (mediaItem: MediaItemFile): MediaItemFile => {
    const { file } = mediaItem;

    mediaItem.isInvalid = mediaItem.isInvalid ?? false;
    mediaItem.validationErrors = mediaItem.validationErrors ?? [];

    if (!file || (mediaItem.fileType && !this.applicableFileTypes.includes(mediaItem.fileType))) {
      return mediaItem;
    }

    if ((mediaItem.metadata?.videoMetadata?.width ?? 0) > (this.videoResolutionConfig?.maxWidth ?? Number.MAX_VALUE)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: VIDEO_VALIDATION_ERRORS.WIDTH_TOO_LARGE,
        replacements: { maxWidth: this.videoResolutionConfig?.maxWidth },
      });
    }

    if ((mediaItem.metadata?.videoMetadata?.width ?? 0) < (this.videoResolutionConfig?.minWidth ?? 0)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: VIDEO_VALIDATION_ERRORS.WIDTH_TOO_SMALL,
        replacements: { minWidth: this.videoResolutionConfig?.minWidth },
      });
    }

    if (
      (mediaItem.metadata?.videoMetadata?.height ?? 0) > (this.videoResolutionConfig?.maxHeight ?? Number.MAX_VALUE)
    ) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: VIDEO_VALIDATION_ERRORS.HEIGHT_TOO_LARGE,
        replacements: { maxHeight: this.videoResolutionConfig?.maxHeight },
      });
    }

    if ((mediaItem.metadata?.videoMetadata?.height ?? 0) < (this.videoResolutionConfig?.minHeight ?? 0)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: VIDEO_VALIDATION_ERRORS.HEIGHT_TOO_SMALL,
        replacements: { minHeight: this.videoResolutionConfig?.minHeight },
      });
    }

    const aspectRatio =
      (mediaItem.metadata?.videoMetadata?.width ?? 0) / (mediaItem.metadata?.videoMetadata?.height ?? 1);

    if (aspectRatio > (this.videoResolutionConfig?.maxAspectRatio ?? Number.MAX_VALUE)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: VIDEO_VALIDATION_ERRORS.ASPECT_RATIO_TOO_BIG,
        replacements: { maxAspectRatio: getAspectRatioFormatted(this.videoResolutionConfig?.maxAspectRatio ?? 1) },
      });
    }

    if (aspectRatio < (this.videoResolutionConfig?.minAspectRatio ?? 0)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: VIDEO_VALIDATION_ERRORS.ASPECT_RATIO_TOO_SMALL,
        replacements: { minAspectRatio: getAspectRatioFormatted(this.videoResolutionConfig?.minAspectRatio ?? 1) },
      });
    }

    return mediaItem;
  };
}
