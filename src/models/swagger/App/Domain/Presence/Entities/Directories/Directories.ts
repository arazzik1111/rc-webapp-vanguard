import { Directory } from '@models/swagger/App/Domain/Presence/Entities/Directories/Directory';

export const DirectoriesObjectType = {
  App_Domain_Presence_Entities_Directories_Directories: 'App\\Domain\\Presence\\Entities\\Directories\\Directories',
};

export const DirectoriesObjectTypeStrict = {
  App_Domain_Presence_Entities_Directories_Directories: 'App\\Domain\\Presence\\Entities\\Directories\\Directories',
} as const;

export type Directories = {
  elements?: Directory[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoriesObjectType)[keyof typeof DirectoriesObjectType];
};
