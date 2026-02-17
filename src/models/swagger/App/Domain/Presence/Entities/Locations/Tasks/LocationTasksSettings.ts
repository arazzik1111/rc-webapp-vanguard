export const LocationTasksSettingsObjectType = {
  App_Domain_Presence_Entities_Locations_Tasks_LocationTasksSettings:
    'App\\Domain\\Presence\\Entities\\Locations\\Tasks\\LocationTasksSettings',
};

export const LocationTasksSettingsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Tasks_LocationTasksSettings:
    'App\\Domain\\Presence\\Entities\\Locations\\Tasks\\LocationTasksSettings',
} as const;

export type LocationTasksSettings = {
  /**
   * The target Radius set for the Ad account
   */
  reassignTasks?: boolean;
  /**
   * A variable that controls whether the user's target location is local or nationwide
   */
  initiallyValidated?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationTasksSettingsObjectType)[keyof typeof LocationTasksSettingsObjectType];
};
