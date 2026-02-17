import { DirectoryPartner } from '@models/swagger/App/Domain/Presence/Entities/Directories/Partners/DirectoryPartner';

export const DirectoryPartnersObjectType = {
  App_Domain_Presence_Entities_Directories_Partners_DirectoryPartners:
    'App\\Domain\\Presence\\Entities\\Directories\\Partners\\DirectoryPartners',
};

export const DirectoryPartnersObjectTypeStrict = {
  App_Domain_Presence_Entities_Directories_Partners_DirectoryPartners:
    'App\\Domain\\Presence\\Entities\\Directories\\Partners\\DirectoryPartners',
} as const;

export type DirectoryPartners = {
  elements?: DirectoryPartner[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryPartnersObjectType)[keyof typeof DirectoryPartnersObjectType];
};
