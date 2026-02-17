export const DirectoryListingErrorType = {
  UNAVAILABLE_REASON: 'UNAVAILABLE_REASON',
  WARNING: 'WARNING',
  UNDEFINED: 'UNDEFINED',
};

export const DirectoryListingErrorTypeStrict = {
  UNAVAILABLE_REASON: 'UNAVAILABLE_REASON',
  WARNING: 'WARNING',
  UNDEFINED: 'UNDEFINED',
} as const;

export const DirectoryListingErrorObjectType = {
  App_Domain_Presence_Entities_Directories_DirectoryListingError:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryListingError',
};

export const DirectoryListingErrorObjectTypeStrict = {
  App_Domain_Presence_Entities_Directories_DirectoryListingError:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryListingError',
} as const;

export type DirectoryListingError = {
  /**
   * The Code for Directory listing error
   */
  code?: string;
  /**
   * The Type for Directory listing error
   *  Allowed Values:
   * -   `UNAVAILABLE_REASON`: Error listing message
   * -   `WARNING`: Warning listing message
   * -   `UNDEFINED`: Undefined listing message
   *
   */
  type?: (typeof DirectoryListingErrorType)[keyof typeof DirectoryListingErrorType];
  /**
   * The adapted Message we will display
   */
  displayMessage?: string;
  /**
   * Whether a solution will be displayed or not
   */
  displaySolution?: boolean;
  /**
   * The solution message
   */
  solutionMessage?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryListingErrorObjectType)[keyof typeof DirectoryListingErrorObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
