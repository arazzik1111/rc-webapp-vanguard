import { NonEmptyArray } from '@helpers/array-helpers';
import { convertBytesToSizeString } from '@helpers/file-utils';
import { ContentType, MediaItemFileType } from '@vanguard/Documents/Document.types';
import { MediaItemFile } from '@vanguard/Gallery/Gallery/Gallery';

import { MediaItemValidator } from './MediaItemValidator';

type FileSizeValidatorProps = {
  minSize?: number;
  maxSize?: number;

  applicableFileTypes?: NonEmptyArray<MediaItemFileType>;
};

export class FileSizeValidator extends MediaItemValidator {
  applicableFileTypes: NonEmptyArray<MediaItemFileType> = [
    ContentType.IMAGE_ANY,
    ContentType.IMAGE_JPEG,
    ContentType.IMAGE_JPG,
    ContentType.IMAGE_PNG,
    ContentType.VIDEO_ANY,
    ContentType.VIDEO_MP4,
    ContentType.VIDEO_MOV,
    ContentType.APPLICATION_PDF,
    ContentType.UNKNOWN,
  ];

  fileSizeConfig?: FileSizeValidatorProps;

  private resolveValidatePromise?: (files: MediaItemFile[] | null) => void;

  constructor(config: FileSizeValidatorProps) {
    super();
    this.fileSizeConfig = config;
    if (config.applicableFileTypes) {
      this.applicableFileTypes = config.applicableFileTypes;
    }
  }

  validate = (files: MediaItemFile[]): Promise<MediaItemFile[] | null> => {
    return new Promise((resolve) => {
      this.resolveValidatePromise = resolve;
      this.validateMediaItems(files);
    });
  };

  private validateMediaItems = (mediaItems: MediaItemFile[]) => {
    const validatedMediaItems: MediaItemFile[] = [];

    for (const mediaItem of mediaItems) {
      validatedMediaItems.push(this.validateMediaItem(mediaItem));
    }

    this.resolveValidatePromise?.(validatedMediaItems);
    this.resolveValidatePromise = undefined;
  };

  private validateMediaItem = (mediaItem: MediaItemFile): MediaItemFile => {
    const { file } = mediaItem;

    mediaItem.isInvalid = mediaItem.isInvalid ?? false;
    mediaItem.validationErrors = mediaItem.validationErrors ?? [];

    if (!file || (mediaItem.fileType && !this.applicableFileTypes.includes(mediaItem.fileType))) {
      return mediaItem;
    }

    const fileType = (mediaItem.fileType as ContentType).split('/')[0];

    const fileTypeText = ['image', 'video'].includes(fileType) ? fileType : 'file';

    if (file.size > (this.fileSizeConfig?.maxSize ?? Number.MAX_VALUE)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: `The ${fileTypeText} size must be <b>smaller than %fileSize%</b>.`,
        replacements: { fileSize: convertBytesToSizeString(this.fileSizeConfig?.maxSize ?? 0) },
      });
    }

    if (file.size < (this.fileSizeConfig?.minSize ?? 0)) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: `The ${fileTypeText} size must be <b>bigger than %fileSize%</b>.`,
        replacements: { fileSize: convertBytesToSizeString(this.fileSizeConfig?.minSize ?? 0) },
      });
    }

    return mediaItem;
  };
}
