import { NonEmptyArray } from '@helpers/array-helpers';
import { ContentType, MediaItemFileType } from '@vanguard/Documents/Document.types';
import { MediaItemFile } from '@vanguard/Gallery/Gallery/Gallery';

import { MediaItemValidator } from './MediaItemValidator';

type VideoDurationValidatorProps = {
  minDuration?: number;
  maxDuration?: number;
};

export class VideoDurationValidator extends MediaItemValidator {
  applicableFileTypes: NonEmptyArray<MediaItemFileType> = [
    ContentType.VIDEO_ANY,
    ContentType.VIDEO_MP4,
    ContentType.VIDEO_MOV,
  ];

  videoDurationConfig?: VideoDurationValidatorProps;

  private resolveValidatePromise?: (files: MediaItemFile[] | null) => void;

  constructor(config: VideoDurationValidatorProps) {
    super();
    this.videoDurationConfig = config;
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

    if (
      (mediaItem.metadata?.videoMetadata?.duration ?? 0) > (this.videoDurationConfig?.maxDuration ?? Number.MAX_VALUE)
    ) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: 'Video duration exceeds maximum duration of %maxDuration% seconds.',
        replacements: { maxDuration: this.videoDurationConfig?.maxDuration },
      });
    }

    if ((mediaItem.metadata?.videoMetadata?.duration ?? 0) < (this.videoDurationConfig?.minDuration ?? 0)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: 'Video duration is less than minimum duration of %minDuration% seconds.',
        replacements: { minDuration: this.videoDurationConfig?.minDuration },
      });
    }

    return mediaItem;
  };
}
