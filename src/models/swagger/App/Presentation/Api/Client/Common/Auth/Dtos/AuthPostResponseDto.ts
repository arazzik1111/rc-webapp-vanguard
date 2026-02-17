export type AuthPostResponseDto = {
  /**
   * The (long-lived or short-lived) token which is used to obtain an access token, this token cannot be used for login
   */
  refreshToken?: string;
  /**
   * The (short-lived or short-lived) access token for regular login operations
   */
  accessToken?: string;
};
