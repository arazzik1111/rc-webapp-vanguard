export const RoleObjectType = {
  App_Domain_Common_Entities_Roles_Role: 'App\\Domain\\Common\\Entities\\Roles\\Role',
};

export type Role = {
  /**
   * The name of the role
   */
  name?: string;
  /**
   * The description of the role
   */
  description?: string;
  /**
   * The type of the role
   */
  type?: string;
  /**
   * Whether the role is an admin role or not
   */
  isAdminRole?: boolean;
  /**
   * The internal identifier of the entity
   */
  id?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RoleObjectType)[keyof typeof RoleObjectType];
};
