import { GaCountrySchema } from '@models/swagger//GaCountrySchema';

export type GaPhoneConfirmationSchema = {
  countries?: GaCountrySchema[];
  currentCountry?: GaCountrySchema;
  eligible?: boolean;
  codeGenerationTimeout?: number;
  currentPhone?: string;
};
