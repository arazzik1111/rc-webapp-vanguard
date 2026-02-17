export const DirectoryEngineStatusObjectType = {
  App_Domain_Presence_Entities_Directories_DirectoryEngineStatus:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryEngineStatus',
};

export const DirectoryEngineStatusObjectTypeStrict = {
  App_Domain_Presence_Entities_Directories_DirectoryEngineStatus:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryEngineStatus',
} as const;

export type DirectoryEngineStatus = {
  /**
   * If true, the Directory is supported by Argus in general
   */
  isActiveOnArgus?: boolean;
  /**
   * Country short codes where the directory is supported on Argus
   */
  argusActiveCountryShortCodes?: string[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryEngineStatusObjectType)[keyof typeof DirectoryEngineStatusObjectType];
};
