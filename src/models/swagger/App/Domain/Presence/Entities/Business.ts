import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { Project } from '@models/swagger/App/Domain/Common/Entities/Projects/Project';
import { Locations } from '@models/swagger/App/Domain/Presence/Entities/Locations/Locations';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BusinessObjectType = {
  App_Domain_Presence_Entities_Business: 'App\\Domain\\Presence\\Entities\\Business',
};

export const BusinessObjectTypeStrict = {
  App_Domain_Presence_Entities_Business: 'App\\Domain\\Presence\\Entities\\Business',
} as const;

export type Business = {
  /**
   * The id of the project associated to the business
   */
  projectId?: number;
  project?: Project;
  locations?: Locations;
  company?: Company;
  address?: PostalAddress;
  contactInfos?: ContactInfos;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BusinessObjectType)[keyof typeof BusinessObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
