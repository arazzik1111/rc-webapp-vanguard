import { alignItemsCenter, dFlex, mr1 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { CreditCard, CreditCardType } from '@vanguard/CreditCard/CreditCard';
import { FontWeights, Text } from '@vanguard/Text/Text';
import React from 'react';
import SVG from 'react-inlinesvg';

import LogoPaymentPayPal from './images/LogoPaymentPayPal.svg';
import LogoPaymentSepa from './images/LogoPaymentSepa.svg';
import styles from './PaymentMethod.module.scss';

export enum PaymentType {
  CreditCard = 'cc',
  PayPal = 'wlt',
  Sepa = 'elv',
  CreditCardAllpago = 'cc_ap',
}
export interface CreditCardDataProps {
  cardNumber: string;
  expireDate: string;
  type: CreditCardType;
}

export interface PayPalDataProps {}

export interface SepaDataProps {
  country: string;
  accountOwner: string;
  accountNumberOrIBAN: string;
}

export interface PaymentMethodProps {
  type: string;
  data: CreditCardDataProps | PayPalDataProps | SepaDataProps;
}

export const CreditCardComponent = (data: CreditCardDataProps | PayPalDataProps | SepaDataProps) => {
  const { cardNumber, expireDate, type } = data as CreditCardDataProps;

  return (
    <div className={styles.paymentContainer}>
      <CreditCard type={type} disabled={false} small={false} />
      <div>
        <Text fontWeight={FontWeights.bold} translate={false}>
          XXXX XXXX XXXX {cardNumber.slice(-4)}
        </Text>
        <div className={classNames(dFlex)}>
          <Text className={classNames(mr1)} color={'--n500'}>
            Expires on
          </Text>
          <Text fontWeight={FontWeights.bold} translate={false}>
            {expireDate}
          </Text>
        </div>
      </div>
    </div>
  );
};

export const SepaComponent = (data: CreditCardDataProps | PayPalDataProps | SepaDataProps) => {
  const { country, accountOwner, accountNumberOrIBAN } = data as SepaDataProps;

  return (
    <div className={styles.paymentContainer}>
      <SVG src={LogoPaymentSepa} width={58} height={38} />
      <div>
        <div className={classNames(dFlex)}>
          <Text className={classNames(mr1)} color={'--n500'}>
            Country
          </Text>
          <Text fontWeight={FontWeights.bold}>{country}</Text>
        </div>
        <div className={classNames(dFlex)}>
          <Text className={classNames(mr1)} color={'--n500'}>
            Account owner
          </Text>
          <Text fontWeight={FontWeights.bold}>{accountOwner}</Text>
        </div>
        <div>
          <Text className={classNames(mr1)} color={'--n500'}>
            Account number or IBAN
          </Text>
          <Text fontWeight={FontWeights.bold} translate={false} textWrap={'no-wrap'}>
            XXXXXXXXXXXXXXXXXX{accountNumberOrIBAN.slice(-4)}
          </Text>
        </div>
      </div>
    </div>
  );
};

export const PayPalComponent = () => {
  return (
    <div className={styles.paymentContainer}>
      <SVG src={LogoPaymentPayPal} width={84} height={36} />
      <Text color={'--n500'} className={classNames(dFlex, alignItemsCenter)}>
        You are using PayPal
      </Text>
    </div>
  );
};

export const PaymentMethod = (props: PaymentMethodProps) => {
  const { type, data } = props;

  switch (type) {
    case PaymentType.CreditCard:
      return <ComponentContainer testId={'credit-card-component'}>{CreditCardComponent(data)}</ComponentContainer>;
    case PaymentType.PayPal:
      return <ComponentContainer testId={'paypal-component'}>{PayPalComponent()}</ComponentContainer>;
    case PaymentType.Sepa:
      return <ComponentContainer testId={'sepa-component'}>{SepaComponent(data)}</ComponentContainer>;
    default:
      return null;
  }
};
