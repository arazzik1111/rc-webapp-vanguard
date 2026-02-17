import { CONTENT_TYPE_IMAGE_JPEG } from '@vanguard/Documents/Document.types';

import { InternalFile } from '../MediaItemSelectInput';
import { MediaItemTransformer } from './MediaItemTransformer';

/// IMPORTANT!!! THIS FILE IS NOT USED IN THE APPLICATION AND IS ONLY FOR CODE EXAMPLE PURPOSES
/// IF YOU NEED A VIDEO TRIMMER TRANSFORMER, YOU NEED TO IMPLEMENT IT YOURSELF IN THIS FILE.

export class VideoTrimmerTransformer extends MediaItemTransformer {
  applicableFileTypes: [typeof CONTENT_TYPE_IMAGE_JPEG];
  // type: "VideoTrimmer";
  useVideoTrimmer: boolean;
  closeAfterTrim?: boolean;

  private resolveTransformPromise?: (file: InternalFile[] | null) => void;

  transform = (files: InternalFile[]): Promise<InternalFile[] | null> => {
    return new Promise((resolve) => {
      this.resolveTransformPromise = resolve; // Store resolve function
    });
  };
}
