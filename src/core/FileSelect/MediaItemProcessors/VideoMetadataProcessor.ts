import { NonEmptyArray } from '@helpers/array-helpers';
import { ContentType, MediaItemFileType } from '@vanguard/Documents/Document.types';
import { MediaItemFile, VideoMetadata } from '@vanguard/Gallery/Gallery/Gallery';

import { MediaItemProcessor } from './MediaItemProcessor';

type VideoMetadataProcessorProps = {};

export class VideoMetadataProcessor extends MediaItemProcessor {
  applicableFileTypes: NonEmptyArray<MediaItemFileType> = [
    ContentType.VIDEO_ANY,
    ContentType.VIDEO_MP4,
    ContentType.VIDEO_MOV,
  ];

  private resolveProcessorPromise?: (files: MediaItemFile[] | null) => void;

  constructor(config: VideoMetadataProcessorProps) {
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

      const videoMetadata = await this.extractVideoMetadata(file);

      if (!videoMetadata) {
        processedMediaItems.push(mediaItem);
        continue;
      }

      processedMediaItems.push({
        ...mediaItem,
        metadata: {
          ...mediaItem.metadata,
          videoMetadata: {
            ...mediaItem.metadata?.videoMetadata,
            ...videoMetadata,
          },
        },
      });
    }

    this.resolveProcessorPromise?.(processedMediaItems);
    this.resolveProcessorPromise = undefined;
  };

  private extractVideoMetadata = async (videoFile: File | Blob): Promise<VideoMetadata> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');

      video.preload = 'metadata';

      video.onloadedmetadata = () => {
        const metadata: VideoMetadata = {
          duration: video.duration,
          width: video.videoWidth,
          height: video.videoHeight,
        };

        // Clean up the video element to avoid memory leaks
        URL.revokeObjectURL(video.src);

        resolve(metadata);
      };

      video.onerror = (e) => {
        reject(new Error('Error reading video metadata'));
      };

      video.src = URL.createObjectURL(videoFile);
    });
  };
}
