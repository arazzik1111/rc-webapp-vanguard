import { Color } from '@models/swagger/App/Domain/Common/Entities/Colors/Color';
import { Colors } from '@models/swagger/App/Domain/Common/Entities/Colors/Colors';
import { ColorShades } from '@models/swagger/App/Domain/Common/Entities/Colors/ColorShades';
import { GenericMediaItem } from '@models/swagger/DDD/Domain/Common/Entities/MediaItems/GenericMediaItem';

export const ProductThemeSettingObjectType = {
  App_Domain_Agency_Entities_Settings_ProductThemeSetting:
    'App\\Domain\\Agency\\Entities\\Settings\\ProductThemeSetting',
};

export const ProductThemeSettingObjectTypeStrict = {
  App_Domain_Agency_Entities_Settings_ProductThemeSetting:
    'App\\Domain\\Agency\\Entities\\Settings\\ProductThemeSetting',
} as const;

export type ProductThemeSetting = {
  logo?: GenericMediaItem;
  primaryColor?: Color;
  primaryShades?: ColorShades;
  secondaryColor?: Color;
  secondaryShades?: ColorShades;
  backgroundColor?: Color;
  chartColors?: Colors;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductThemeSettingObjectType)[keyof typeof ProductThemeSettingObjectType];
};
