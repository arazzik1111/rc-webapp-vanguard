import { DirectoryListingError } from '@models/swagger/App/Domain/Presence/Entities/Directories/DirectoryListingError';

export const DirectoryListingErrorsObjectType = {
  App_Domain_Presence_Entities_Directories_DirectoryListingErrors:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryListingErrors',
};

export const DirectoryListingErrorsObjectTypeStrict = {
  App_Domain_Presence_Entities_Directories_DirectoryListingErrors:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryListingErrors',
} as const;

export type DirectoryListingErrors = {
  elements?: DirectoryListingError[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryListingErrorsObjectType)[keyof typeof DirectoryListingErrorsObjectType];
};
