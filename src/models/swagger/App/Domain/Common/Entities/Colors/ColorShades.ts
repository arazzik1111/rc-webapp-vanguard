import { Color } from '@models/swagger/App/Domain/Common/Entities/Colors/Color';

export const ColorShadesObjectType = {
  App_Domain_Common_Entities_Colors_ColorShades: 'App\\Domain\\Common\\Entities\\Colors\\ColorShades',
};

export const ColorShadesObjectTypeStrict = {
  App_Domain_Common_Entities_Colors_ColorShades: 'App\\Domain\\Common\\Entities\\Colors\\ColorShades',
} as const;

export type ColorShades = {
  /**
   * If set, the properties will be serialized with <prefix><grade> e.g. p50, nl100 etc.
   */
  displayPrefix?: string;
  shade50?: Color;
  shade100?: Color;
  shade200?: Color;
  shade300?: Color;
  shade400?: Color;
  shade500?: Color;
  shade600?: Color;
  shade700?: Color;
  shade800?: Color;
  shade900?: Color;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ColorShadesObjectType)[keyof typeof ColorShadesObjectType];
};
