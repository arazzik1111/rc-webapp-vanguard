import { Currency } from '@models/swagger/App/Domain/Common/Entities/Money/Currency';

export const MoneyAmountObjectType = {
  App_Domain_Common_Entities_Money_MoneyAmount: 'App\\Domain\\Common\\Entities\\Money\\MoneyAmount',
};

export const MoneyAmountObjectTypeStrict = {
  App_Domain_Common_Entities_Money_MoneyAmount: 'App\\Domain\\Common\\Entities\\Money\\MoneyAmount',
} as const;

export type MoneyAmount = {
  currency?: Currency;
  amount?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MoneyAmountObjectType)[keyof typeof MoneyAmountObjectType];
};
