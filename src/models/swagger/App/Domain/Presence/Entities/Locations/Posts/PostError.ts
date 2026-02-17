export const PostErrorObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_PostError:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\PostError',
};

export const PostErrorObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_PostError:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\PostError',
} as const;

export type PostError = {
  /**
   * The message we receive on callback for the error
   */
  message?: string;
  /**
   * The main error code received on callback
   */
  code?: number;
  /**
   * The sub-error code referencing subcases. Mostly applicable to Google Post Errors
   */
  subErrorCode?: number;
  /**
   * The value which caused the error to happen
   */
  value?: string;
  /**
   * The type of field in which the error triggered
   */
  field?: string;
  /**
   * The category of error triggered. Mostly applicable to Google Post Errors
   */
  type?: string;
  /**
   * The status returned by the call
   */
  status?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostErrorObjectType)[keyof typeof PostErrorObjectType];
};
