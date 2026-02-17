export const DirectoryPartnerObjectType = {
  App_Domain_Presence_Entities_Directories_Partners_DirectoryPartner:
    'App\\Domain\\Presence\\Entities\\Directories\\Partners\\DirectoryPartner',
};

export const DirectoryPartnerObjectTypeStrict = {
  App_Domain_Presence_Entities_Directories_Partners_DirectoryPartner:
    'App\\Domain\\Presence\\Entities\\Directories\\Partners\\DirectoryPartner',
} as const;

export type DirectoryPartner = {
  /**
   * The name of the network
   */
  name?: string;
  /**
   * The alias of the network
   */
  alias?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryPartnerObjectType)[keyof typeof DirectoryPartnerObjectType];
};
