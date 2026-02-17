import { NonEmptyArray } from '@helpers/array-helpers';
import { ContentType, MediaItemFileType } from '@vanguard/Documents/Document.types';
import { MediaItemFile } from '@vanguard/Gallery/Gallery/Gallery';

/**
 * Abstract class representing a media item validator.
 * Subclasses should implement the `applicableFileTypes` and `validate` methods.
 */
export abstract class MediaItemValidator {
  /**
   * An array of file types that this validator can handle.
   */
  abstract applicableFileTypes: NonEmptyArray<MediaItemFileType>;

  /**
   * Validates the given array of media item files.
   * @param files - The array of media item files to validate.
   * @returns A promise that resolves to an array of validated media item files or null if validation fails.
   */
  abstract validate: (files: MediaItemFile[]) => Promise<MediaItemFile[] | null>;

  /**
   * Checks if the validator can validate at least one of the given files.
   * @param files - The array of media item files to check.
   * @returns True if at least one file type matches an applicable file type, otherwise false.
   */
  readonly canValidateFiles = (files: MediaItemFile[]): boolean => {
    // If the validator can handle any file type, return true
    if (this.applicableFileTypes.includes(ContentType.FILE_ANY)) {
      return true;
    }

    // Check if at least one file type matches an applicable file type
    return files.some((file) => this.applicableFileTypes.includes(file.fileType as MediaItemFileType));
  };

  /**
   * Applies the validator to the given array of media item files.
   * If the validator cannot validate any of the files, it resolves with the original files.
   * @param files - The array of media item files to validate.
   * @returns A promise that resolves to an array of validated media item files or null if validation fails.
   */
  readonly applyValidator: (files: MediaItemFile[]) => Promise<MediaItemFile[] | null> = (files) => {
    if (!this.canValidateFiles(files)) {
      return new Promise((resolve) => {
        resolve(files);
      });
    }
    return this.validate(files);
  };
}
