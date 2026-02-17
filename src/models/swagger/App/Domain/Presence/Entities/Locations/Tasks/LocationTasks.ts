import { LocationTask } from '@models/swagger/App/Domain/Presence/Entities/Locations/Tasks/LocationTask';

export const LocationTasksObjectType = {
  App_Domain_Presence_Entities_Locations_Tasks_LocationTasks:
    'App\\Domain\\Presence\\Entities\\Locations\\Tasks\\LocationTasks',
};

export const LocationTasksObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Tasks_LocationTasks:
    'App\\Domain\\Presence\\Entities\\Locations\\Tasks\\LocationTasks',
} as const;

export type LocationTasks = {
  elements?: LocationTask[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationTasksObjectType)[keyof typeof LocationTasksObjectType];
};
