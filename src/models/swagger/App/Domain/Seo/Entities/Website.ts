import { CMSType } from '@models/swagger/App/Domain/Seo/Entities/CMSTypes/CMSType';
import { CMSTypes } from '@models/swagger/App/Domain/Seo/Entities/CMSTypes/CMSTypes';
import { Domain } from '@models/swagger/App/Domain/Seo/Entities/Domains/Domain';

export const WebsiteObjectType = {
  App_Domain_Seo_Entities_Website: 'App\\Domain\\Seo\\Entities\\Website',
};

export const WebsiteObjectTypeStrict = {
  App_Domain_Seo_Entities_Website: 'App\\Domain\\Seo\\Entities\\Website',
} as const;

export type Website = {
  domain?: Domain;
  /**
   * Website's current CMSType id
   */
  cmsTypeId?: number;
  cmsType?: CMSType;
  supportedCMSTypes?: CMSTypes;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof WebsiteObjectType)[keyof typeof WebsiteObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
