import { OrderSummary, OrderSummaryProps } from "./OrderSummary";
import React from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/OrderSummary",
  component: OrderSummary,
});

export const OrderSummaryStory = (props: OrderSummaryProps) => {
  var orderItems = props.orderItems ?? [
    {
      name: "rankingCoach 360",
      type: "subscription",
      priceWithCurrency: "60.00$",
    },
    {
      name: "Ads Prepaid Budget",
      type: "adsCredit",
      priceWithCurrency: "50.00$",
      discount: null,
      description: null,
    },
  ];
  var vat = props.vat ?? { percentage: 0.2, vatWithCurrency: "19.00$" };
  var totalWithCurrency = props.totalWithCurrency ?? "114.00$";

  return (
    <div>
      <OrderSummary orderItems={orderItems} vat={vat} totalWithCurrency={totalWithCurrency}></OrderSummary>
    </div>
  );
};

export const OrderSummaryStoryWithDiscount = (props: OrderSummaryProps) => {
  var orderItems = props.orderItems ?? [
    {
      name: "rankingCoach 360",
      type: "subscription",
      priceWithCurrency: "60.00$",
      discount: { name: "25% Discounted Price (Voucher)", priceWithDiscountWithCurrency: "20.00$" },
      description: {
        name: "Monthly subscription",
        details: ["Get top rankings on Google", "Master Google Ads", "Establish local visibility"],
      },
    },
    {
      name: "Ads Prepaid Budget",
      type: "adsCredit",
      priceWithCurrency: "50.00$",
      discount: null,
      description: null,
    },
  ];
  var vat = props.vat ?? { percentage: 0.2, vatWithCurrency: "19.00$" };
  var totalWithCurrency = props.totalWithCurrency ?? "114.00$";

  return (
    <div>
      <OrderSummary orderItems={orderItems} vat={vat} totalWithCurrency={totalWithCurrency}></OrderSummary>
    </div>
  );
};

export const OrderSummaryWithPercentage = () => {
  return (
    <OrderSummary
      orderItems={[
        {
          name: "rankingCoach 360",
          type: "subscription",
          priceWithCurrency: "60.00$",
        },
        {
          name: "Ads Prepaid Budget",
          type: "adsCredit",
          priceWithCurrency: "50.00$",
          discount: null,
          description: null,
        },
      ]}
      vat={{ percentage: 0.2, vatWithCurrency: "19.00$" }}
      totalWithCurrency="114.00$"
    />
  );
};
