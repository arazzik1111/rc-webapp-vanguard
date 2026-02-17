import { NonEmptyArray } from '@helpers/array-helpers';
import { MediaItemFileType } from '@vanguard/Documents/Document.types';

import { InternalFile } from '../MediaItemSelectInput';

/**
 * Abstract base class for transforming media items based on specific file types.
 * Subclasses should define applicable file types and provide a transform function.
 */
export abstract class MediaItemTransformer {
  /**
   * Specifies the file types that this transformer can handle.
   * Must be a non-empty array of `MediaItemFileType` values.
   */
  abstract applicableFileTypes: NonEmptyArray<MediaItemFileType>;

  /**
   * Asynchronous method to transform files of applicable types.
   * Should be implemented by subclasses to perform the transformation logic.
   *
   * @param files - An array of files to be transformed.
   * @returns A promise that resolves to an array of transformed files or null.
   */
  abstract transform: (files: InternalFile[]) => Promise<InternalFile[] | null>;

  /**
   * Determines if any of the provided files have a type that matches the applicable file types.
   * This check is used to determine if the transformer should be applied to the file set.
   *
   * @param files - An array of files to check.
   * @returns True if at least one file matches an applicable file type, false otherwise.
   */
  readonly canTransformFiles = (files: InternalFile[]): boolean => {
    // Check if at least one file type matches an applicable file type
    return files.some((file) => this.applicableFileTypes.includes(file.file.type as MediaItemFileType));
  };

  /**
   * Applies the transformation to files if they contain at least one applicable file type.
   * Uses `transform` if the file types match; otherwise, returns the original files.
   *
   * @param files - An array of files to potentially transform.
   * @returns A promise that resolves to the transformed files if applicable, or the original files.
   */
  readonly applyTransformer: (files: InternalFile[]) => Promise<InternalFile[] | null> = (files) => {
    if (!this.canTransformFiles(files)) {
      return new Promise((resolve) => {
        resolve(files);
      });
    }
    return this.transform(files);
  };
}
