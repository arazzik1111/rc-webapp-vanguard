import { PostError } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/PostError';

export const PostErrorsObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_PostErrors:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\PostErrors',
};

export const PostErrorsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_PostErrors:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\PostErrors',
} as const;

export type PostErrors = {
  /**
   * the Status Code returned by the error
   */
  code?: number;
  /**
   * The message of the error. This is mostly applicable for Meta (instagram / facebook) Post Errors
   */
  message?: string;
  /**
   * The status returned by the call
   */
  status?: string;
  elements?: PostError[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostErrorsObjectType)[keyof typeof PostErrorsObjectType];
};
