import { GaAdAssetSchema } from '@models/swagger//GaAdAssetSchema';

export type GaAdAssetsSchema = {
  call?: GaAdAssetSchema[];
  sitelink?: GaAdAssetSchema[];
  gmb?: GaAdAssetSchema[];
  local?: GaAdAssetSchema[];
  callout?: GaAdAssetSchema[];
};
