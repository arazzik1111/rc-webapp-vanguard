import { NonEmptyArray } from '@helpers/array-helpers';
import { ContentType, MediaItemFileType } from '@vanguard/Documents/Document.types';
import { MediaItemFile } from '@vanguard/Gallery/Gallery/Gallery';

import { MediaItemValidator } from './MediaItemValidator';

type FileTypeValidatorProps = {
  acceptedTypes: ContentType[];

  applicableFileTypes?: NonEmptyArray<MediaItemFileType>;
};

export class FileTypeValidator extends MediaItemValidator {
  applicableFileTypes: NonEmptyArray<MediaItemFileType> = [ContentType.FILE_ANY];

  fileTypeConfig?: FileTypeValidatorProps;

  private resolveValidatePromise?: (files: MediaItemFile[] | null) => void;

  constructor(config: FileTypeValidatorProps) {
    super();
    this.fileTypeConfig = config;
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

    if (!file || (mediaItem.fileType && !this.fileTypeConfig?.acceptedTypes.includes(mediaItem.fileType))) {
      mediaItem.isInvalid = true;
      mediaItem.validationErrors.push({
        text: 'File format is not supported.',
      });
    }

    return mediaItem;
  };
}
