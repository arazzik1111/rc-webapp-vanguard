import { Locale } from '@models/swagger/App/Domain/Common/Entities/Locales/Locale';
import { ReputationDimension } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Dimensions/ReputationDimension';

export const ReputationDimensionsObjectType = {
  App_Domain_Reputation_Entities_Reputation_Dimensions_ReputationDimensions:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Dimensions\\ReputationDimensions',
};

export const ReputationDimensionsObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Dimensions_ReputationDimensions:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Dimensions\\ReputationDimensions',
} as const;

export type ReputationDimensions = {
  /**
   * Start date from first considered Review
   */
  startDate?: string;
  /**
   * End date from last considered Review
   */
  endDate?: string;
  interfaceLocale?: Locale;
  elements?: ReputationDimension[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationDimensionsObjectType)[keyof typeof ReputationDimensionsObjectType];
};
