import { NonEmptyArray } from '@helpers/array-helpers';
import { MediaItemFileType } from '@vanguard/Documents/Document.types';
import { MediaItemFile } from '@vanguard/Gallery/Gallery/Gallery';

/**
 * Abstract class representing a processor for media items.
 *
 * @abstract
 */
export abstract class MediaItemProcessor {
  /**
   * An array of applicable file types that this processor can handle.
   */
  abstract applicableFileTypes: NonEmptyArray<MediaItemFileType>;

  /**
   * Processes the given media items.
   *
   * @param mediaItems - An array of media items to be processed.
   * @returns A promise that resolves to an array of processed media items or null.
   */
  abstract process: (mediaItems: MediaItemFile[]) => Promise<MediaItemFile[] | null>;

  /**
   * Checks if the processor can process any of the given files.
   *
   * @param files - An array of media item files to check.
   * @returns A boolean indicating whether the processor can process any of the files.
   */
  readonly canProcessFiles = (files: MediaItemFile[]): boolean => {
    // Check if at least one file type matches an applicable file type
    return files.some((file) => this.applicableFileTypes.includes(file.file?.type as MediaItemFileType));
  };

  /**
   * Applies the processor to the given files if applicable.
   *
   * @param files - An array of media item files to process.
   * @returns A promise that resolves to an array of processed media items or null.
   */
  readonly applyProcessor: (files: MediaItemFile[]) => Promise<MediaItemFile[] | null> = (files) => {
    if (!this.canProcessFiles(files)) {
      return new Promise((resolve) => {
        resolve(files);
      });
    }
    return this.process(files);
  };
}
