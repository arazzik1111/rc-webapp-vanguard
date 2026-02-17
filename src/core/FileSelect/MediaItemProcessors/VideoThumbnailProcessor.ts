import { NonEmptyArray } from '@helpers/array-helpers';
import { ContentType, MediaItemFileType } from '@vanguard/Documents/Document.types';
import { MediaItemFile } from '@vanguard/Gallery/Gallery/Gallery';

import { MediaItemProcessor } from './MediaItemProcessor';

type VideoThumbnailProcessorProps = {};

export class VideoThumbnailProcessor extends MediaItemProcessor {
  applicableFileTypes: NonEmptyArray<MediaItemFileType> = [
    ContentType.VIDEO_ANY,
    ContentType.VIDEO_MP4,
    ContentType.VIDEO_MOV,
  ];

  private resolveProcessorPromise?: (files: MediaItemFile[] | null) => void;

  constructor(config: VideoThumbnailProcessorProps) {
    super();
  }

  process = (mediaItems: MediaItemFile[]): Promise<MediaItemFile[] | null> => {
    return new Promise((resolve) => {
      this.resolveProcessorPromise = resolve;
      this.generateThumbnails(mediaItems);
    });
  };

  /**
   * Generates thumbnails for the provided media items.
   *
   * This method processes an array of media items, generating a thumbnail for each item
   * if applicable. If a media item does not have a file or its file type is not supported,
   * it is added to the processed media items array without modification. If a thumbnail
   * is successfully generated, the media item is updated with the public thumbnail URL.
   *
   * @param mediaItems - An array of media items to process.
   * @returns A promise that resolves with the processed media items, each potentially
   *          updated with a public thumbnail URL.
   */
  private generateThumbnails = async (mediaItems: MediaItemFile[]) => {
    const processedMediaItems: MediaItemFile[] = [];

    for (const mediaItem of mediaItems) {
      const { file } = mediaItem;

      if (!file || (mediaItem.fileType && !this.applicableFileTypes.includes(mediaItem.fileType))) {
        processedMediaItems.push(mediaItem);
        continue;
      }

      const thumbnail = await this.getThumbnail(file);

      if (!thumbnail) {
        processedMediaItems.push(mediaItem);
        continue;
      }

      processedMediaItems.push({
        ...mediaItem,
        publicThumbnailUrl: thumbnail,
      });
    }

    this.resolveProcessorPromise?.(processedMediaItems);
    this.resolveProcessorPromise = undefined;
  };

  /**
   * Generates a thumbnail image from a video file or blob.
   *
   * @param file - The video file or blob from which to generate the thumbnail.
   * @returns A promise that resolves to a data URL string representing the thumbnail image, or null if the thumbnail could not be generated.
   */
  private getThumbnail = async (file: File | Blob): Promise<string | null> => {
    const video = document.createElement('video');
    video.src = URL.createObjectURL(file);
    video.currentTime = 1;
    video.width = 128;
    video.height = 128;
    video.muted = true;
    video.setAttribute('crossOrigin', 'anonymous');

    return new Promise((resolve) => {
      video.addEventListener('loadeddata', () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const context = canvas.getContext('2d');
        if (!context) {
          resolve(null);
          return;
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL());
      });
    });
  };
}
