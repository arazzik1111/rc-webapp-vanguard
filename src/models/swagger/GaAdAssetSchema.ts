import { GaAdAssetCalloutSchema } from '@models/swagger//GaAdAssetCalloutSchema';
import { GaAdAssetCallSchema } from '@models/swagger//GaAdAssetCallSchema';
import { GaAdAssetLocationSchema } from '@models/swagger//GaAdAssetLocationSchema';
import { GaAdAssetSitelinkSchema } from '@models/swagger//GaAdAssetSitelinkSchema';

export type GaAdAssetSchema = {
  id?: string;
  ad_account_id?: string;
  type?: string;
  data?: GaAdAssetCallSchema | GaAdAssetCalloutSchema | GaAdAssetSitelinkSchema | GaAdAssetLocationSchema;
  status?: string;
  isLoading?: boolean;
};
