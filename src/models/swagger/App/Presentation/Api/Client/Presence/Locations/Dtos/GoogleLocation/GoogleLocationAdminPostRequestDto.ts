export const GoogleLocationAdminPostRequestDtoRole = {
  OWNER: 'OWNER',
  MANAGER: 'MANAGER',
};

export const GoogleLocationAdminPostRequestDtoRoleStrict = {
  OWNER: 'OWNER',
  MANAGER: 'MANAGER',
} as const;

export type GoogleLocationAdminPostRequestDto = {
  /**
   * The email address to invite as admin
   */
  email: string;
  /**
   * Specifies the role that this admin uses with the specified Account or Location
   *  Allowed Values:
   * -   `OWNER`
   * -   `MANAGER`
   *
   */
  role?: (typeof GoogleLocationAdminPostRequestDtoRole)[keyof typeof GoogleLocationAdminPostRequestDtoRole];
};
