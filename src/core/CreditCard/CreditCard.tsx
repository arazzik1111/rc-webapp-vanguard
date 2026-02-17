import { useDynamicImport } from '@custom-hooks/use-dynamic-import/use-dynamic-import';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import React from 'react';
import SVG from 'react-inlinesvg';

export enum CreditCardType {
  Visa = 'visa',
  MasterCard = 'masterCard',
  AmericanExpress = 'americanExpress',
  Discover = 'discover',
  CarteBleue = 'carteBleue',
  Placeholder = 'placeholder',
}

export interface CreditCardProps {
  type: CreditCardType;
  disabled: boolean;
  small: boolean;
  testId?: string;
}

export const CreditCard = (props: CreditCardProps) => {
  const { type, disabled, small, testId } = props;

  let name = 'Placeholder';
  switch (type) {
    case CreditCardType.Visa:
      name = 'Visa';
      break;
    case CreditCardType.MasterCard:
      name = 'MasterCard';
      break;
    case CreditCardType.AmericanExpress:
      name = 'AmericanExpress';
      break;
    case CreditCardType.Discover:
      name = 'Discover';
      break;
    case CreditCardType.CarteBleue:
      name = 'CarteBleue';
      break;
  }

  const width = small ? 40 : 74;
  const height = small ? 24 : 48;

  const { SvgIcon, loading, error } = useDynamicImport(
    `creditCard/${small ? 'small' : 'large'}/${disabled ? 'disabled' : 'enabled'}/CreditCard${name}.svg`,
  );

  return (
    <ComponentContainer testId={testId}>
      <SVG src={SvgIcon} width={width} height={height} />
    </ComponentContainer>
  );
};
