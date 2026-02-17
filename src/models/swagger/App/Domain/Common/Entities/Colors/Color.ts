export const ColorObjectType = {
  App_Domain_Common_Entities_Colors_Color: 'App\\Domain\\Common\\Entities\\Colors\\Color',
};

export const ColorObjectTypeStrict = {
  App_Domain_Common_Entities_Colors_Color: 'App\\Domain\\Common\\Entities\\Colors\\Color',
} as const;

export type Color = {
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ColorObjectType)[keyof typeof ColorObjectType];
};
