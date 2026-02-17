import { Role } from '@models/swagger/App/Domain/Common/Entities/Roles/Role';

export const RolesObjectType = {
  App_Domain_Common_Entities_Roles_Roles: 'App\\Domain\\Common\\Entities\\Roles\\Roles',
};

export type Roles = {
  /**
   * Whether the client is admin or not
   */
  isAdmin?: boolean;
  elements?: Role[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RolesObjectType)[keyof typeof RolesObjectType];
};
