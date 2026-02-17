import { UpsellingLink } from '@models/swagger/App/Domain/Partner/Entities/Settings/UpsellingLinks/UpsellingLink';

export const UpsellingLinksObjectType = {
  App_Domain_Partner_Entities_Settings_UpsellingLinks_UpsellingLinks:
    'App\\Domain\\Partner\\Entities\\Settings\\UpsellingLinks\\UpsellingLinks',
};

export const UpsellingLinksObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_UpsellingLinks_UpsellingLinks:
    'App\\Domain\\Partner\\Entities\\Settings\\UpsellingLinks\\UpsellingLinks',
} as const;

export type UpsellingLinks = {
  elements?: UpsellingLink[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UpsellingLinksObjectType)[keyof typeof UpsellingLinksObjectType];
};
