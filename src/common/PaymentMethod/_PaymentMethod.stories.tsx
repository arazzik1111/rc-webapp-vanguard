import { PaymentMethod, PaymentMethodProps, PaymentType } from "./PaymentMethod";
import React from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/PaymentMethod",
  component: PaymentMethod,
});

export const PaymentMethodCreditCardVisaStory = (props: PaymentMethodProps) => {
  var type = props.type ?? PaymentType.CreditCard;
  var data = props.data ?? { cardNumber: "XXXX XXXX XXXX 4242", expireDate: "02/23", type: "visa" };

  return (
    <div>
      <PaymentMethod type={type} data={data}></PaymentMethod>
    </div>
  );
};

export const PaymentMethodCreditCardMasterCardStory = (props: PaymentMethodProps) => {
  var type = props.type ?? PaymentType.CreditCard;
  var data = props.data ?? { cardNumber: "XXXX XXXX XXXX 4242", expireDate: "02/23", type: "masterCard" };

  return (
    <div>
      <PaymentMethod type={type} data={data}></PaymentMethod>
    </div>
  );
};

export const PaymentMethodCreditCardAmericanExpressStory = (props: PaymentMethodProps) => {
  var type = props.type ?? PaymentType.CreditCard;
  var data = props.data ?? { cardNumber: "XXXX XXXX XXXX 4242", expireDate: "02/23", type: "americanExpress" };

  return (
    <div>
      <PaymentMethod type={type} data={data}></PaymentMethod>
    </div>
  );
};

export const PaymentMethodCreditCardCarteBleueStory = (props: PaymentMethodProps) => {
  var type = props.type ?? PaymentType.CreditCard;
  var data = props.data ?? { cardNumber: "XXXX XXXX XXXX 4242", expireDate: "02/23", type: "carteBleue" };

  return (
    <div>
      <PaymentMethod type={type} data={data}></PaymentMethod>
    </div>
  );
};

export const PaymentMethodCreditCardDiscoverStory = (props: PaymentMethodProps) => {
  var type = props.type ?? PaymentType.CreditCard;
  var data = props.data ?? { cardNumber: "XXXX XXXX XXXX 4242", expireDate: "02/23", type: "discover" };

  return (
    <div>
      <PaymentMethod type={type} data={data}></PaymentMethod>
    </div>
  );
};

export const PaymentMethodSepaStory = (props: PaymentMethodProps) => {
  var type = props.type ?? PaymentType.Sepa;
  var data = props.data ?? {
    country: "United Kingdom",
    accountOwner: "Steve Buscemi",
    accountNumberOrIBAN: "XXXXXXXXXXXXXXXXXX5698",
  };

  return (
    <div>
      <PaymentMethod type={type} data={data}></PaymentMethod>
    </div>
  );
};
export const PaymentMethodPayPalStory = (props: PaymentMethodProps) => {
  var type = props.type ?? PaymentType.PayPal;
  var data = props.data ?? {};

  return (
    <div>
      <PaymentMethod type={type} data={data}></PaymentMethod>
    </div>
  );
};

export const PaymentMethodSepa = (props: PaymentMethodProps) => {
  var type = props.type ?? PaymentType.PayPal;
  var data = props.data ?? {};

  return (
    <div>
      <PaymentMethod
        type={PaymentType.Sepa}
        data={{
          country: "United Kingdom",
          accountOwner: "Steve Buscemi",
          accountNumberOrIBAN: "1111222233334444555699",
        }}
      />
    </div>
  );
};
