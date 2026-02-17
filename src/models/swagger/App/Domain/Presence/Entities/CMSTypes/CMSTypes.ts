import { CMSType } from '@models/swagger/App/Domain/Presence/Entities/CMSTypes/CMSType';

export const CMSTypesObjectType = {
  App_Domain_Presence_Entities_CMSTypes_CMSTypes: 'App\\Domain\\Presence\\Entities\\CMSTypes\\CMSTypes',
};

export type CMSTypes = {
  elements?: CMSType[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CMSTypesObjectType)[keyof typeof CMSTypesObjectType];
};
