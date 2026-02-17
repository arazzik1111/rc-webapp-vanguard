import { Color } from '@models/swagger/App/Domain/Common/Entities/Colors/Color';

export const ColorsObjectType = {
  App_Domain_Common_Entities_Colors_Colors: 'App\\Domain\\Common\\Entities\\Colors\\Colors',
};

export const ColorsObjectTypeStrict = {
  App_Domain_Common_Entities_Colors_Colors: 'App\\Domain\\Common\\Entities\\Colors\\Colors',
} as const;

export type Colors = {
  elements?: Color[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ColorsObjectType)[keyof typeof ColorsObjectType];
};
