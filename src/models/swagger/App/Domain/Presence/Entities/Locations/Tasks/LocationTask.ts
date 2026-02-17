import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const LocationTaskObjectType = {
  App_Domain_Presence_Entities_Locations_Tasks_LocationTask:
    'App\\Domain\\Presence\\Entities\\Locations\\Tasks\\LocationTask',
};

export const LocationTaskObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Tasks_LocationTask:
    'App\\Domain\\Presence\\Entities\\Locations\\Tasks\\LocationTask',
} as const;

export type LocationTask = {
  /**
   * The name of the CMS
   */
  name?: string;
  /**
   * The alias of the CMS
   */
  comment?: string;
  /**
   * The priority of the CMS
   */
  taskId?: number;
  /**
   * Whether the CMS is enabled or not
   */
  locationId?: number;
  /**
   * The img name or url of the CMS
   */
  keywordId?: number;
  /**
   * The alias of the CMS
   */
  landingPageId?: number;
  /**
   * The CSS class of the CMS
   */
  resourceKey?: string;
  /**
   * The version of the CMS
   */
  taskStatusId?: number;
  validationStatus?: string;
  /**
   * Whether the CMS is shown on public pages
   */
  validationDetails?: string;
  /**
   * Whether the CMS is an online shop
   */
  dependenciesFulfilled?: boolean;
  /**
   * The detection name of the CMS
   */
  ignoreTask?: boolean;
  toBeDeleted?: boolean;
  initiallyValidated?: boolean;
  individualParams?: string;
  urlLink?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationTaskObjectType)[keyof typeof LocationTaskObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
