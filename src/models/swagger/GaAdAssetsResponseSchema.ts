import { GaAdAssetSchema } from '@models/swagger//GaAdAssetSchema';

export type GaAdAssetsResponseSchema = {
  status?: number;
  data?: GaAdAssetSchema[];
  message?: string;
};
