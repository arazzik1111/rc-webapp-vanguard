import { CMSType } from '@models/swagger/App/Domain/Seo/Entities/CMSTypes/CMSType';

export const CMSTypesObjectType = {
  App_Domain_Seo_Entities_CMSTypes_CMSTypes: 'App\\Domain\\Seo\\Entities\\CMSTypes\\CMSTypes',
};

export const CMSTypesObjectTypeStrict = {
  App_Domain_Seo_Entities_CMSTypes_CMSTypes: 'App\\Domain\\Seo\\Entities\\CMSTypes\\CMSTypes',
} as const;

export type CMSTypes = {
  elements?: CMSType[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CMSTypesObjectType)[keyof typeof CMSTypesObjectType];
};
