import { NonEmptyArray } from '@helpers/array-helpers';
import { ContentType, MediaItemFileType } from '@vanguard/Documents/Document.types';
import { ImageMetadata, MediaItemFile } from '@vanguard/Gallery/Gallery/Gallery';

import { MediaItemProcessor } from './MediaItemProcessor';

type ImageMetadataProcessorProps = {};

export class ImageMetadataProcessor extends MediaItemProcessor {
  applicableFileTypes: NonEmptyArray<MediaItemFileType> = [
    ContentType.IMAGE_ANY,
    ContentType.IMAGE_JPEG,
    ContentType.IMAGE_JPG,
    ContentType.IMAGE_PNG,
  ];

  private resolveProcessorPromise?: (files: MediaItemFile[] | null) => void;

  constructor(config: ImageMetadataProcessorProps) {
    super();
  }

  process = (mediaItems: MediaItemFile[]): Promise<MediaItemFile[] | null> => {
    return new Promise((resolve) => {
      this.resolveProcessorPromise = resolve;
      this.extractMetadataForMediaItems(mediaItems);
    });
  };

  private extractMetadataForMediaItems = async (mediaItems: MediaItemFile[]) => {
    const processedMediaItems: MediaItemFile[] = [];

    for (const mediaItem of mediaItems) {
      const { file } = mediaItem;

      if (!file || (mediaItem.fileType && !this.applicableFileTypes.includes(mediaItem.fileType))) {
        processedMediaItems.push(mediaItem);
        continue;
      }

      const imageMetadata = await this.extractImageMetadata(file);

      if (!imageMetadata) {
        processedMediaItems.push(mediaItem);
        continue;
      }

      processedMediaItems.push({
        ...mediaItem,
        metadata: {
          ...mediaItem.metadata,
          imageMetadata: {
            ...mediaItem.metadata?.imageMetadata,
            ...imageMetadata,
          },
        },
      });
    }

    this.resolveProcessorPromise?.(processedMediaItems);
    this.resolveProcessorPromise = undefined;
  };

  private extractImageMetadata = async (imageFile: File | Blob): Promise<ImageMetadata> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(imageFile);

      img.onload = () => {
        const width = img.width;
        const height = img.height;

        // Release the object URL after image loads
        URL.revokeObjectURL(url);

        const metadata: ImageMetadata = {
          width,
          height,
        };

        resolve(metadata);
      };

      img.onerror = (err) => {
        // Release the object URL if there's an error
        URL.revokeObjectURL(url);
        reject(new Error('Failed to load the image.'));
      };

      // Set the source of the image to the local file
      img.src = url;
    });
  };
}
