import { dFlex, dFlexColumn, mt1, pl1 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { GaAccountOrderItemsItemAdditionalProjectsSchema } from '@models/swagger/GaAccountOrderItemsItemAdditionalProjectsSchema';
import { GaAccountOrderItemsItemDescriptionSchema } from '@models/swagger/GaAccountOrderItemsItemDescriptionSchema';
import { GaAccountOrderItemsItemDiscountSchema } from '@models/swagger/GaAccountOrderItemsItemDiscountSchema';
import { AnimatedConditional } from '@vanguard/AnimatedConditional/AnimatedConditional';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { FontWeights, Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

import styles from './OrderSummary.module.scss';

export interface OrderItemProps {
  name: string;
  type: string;
  priceWithCurrency: string;
  discount?: GaAccountOrderItemsItemDiscountSchema | null;
  description?: GaAccountOrderItemsItemDescriptionSchema | null;
  additionalProjects?: GaAccountOrderItemsItemAdditionalProjectsSchema | null;
}

export interface VatProps {
  percentage: number;
  vatWithCurrency: string;
}

export interface OrderSummaryProps {
  orderItems: OrderItemProps[];
  vat: VatProps;
  totalWithCurrency: string;
}

export const OrderSummary = (props: OrderSummaryProps) => {
  const { orderItems, vat, totalWithCurrency } = props;
  const { percentage, vatWithCurrency } = vat;
  return (
    <ComponentContainer testId="order-summary-component">
      <div className={styles.orderSummaryContainer}>
        <Text fontWeight={FontWeights.regular}>Order summary</Text>
        <div className={styles.orderSummaryItems}>
          {orderItems.map((orderItem, idx) => {
            return (
              <div className={classNames(dFlex, dFlexColumn)} key={idx}>
                <div className={styles.orderSummaryItem}>
                  <Text fontWeight={FontWeights.bold}>{orderItem.name}</Text>
                  <Text
                    fontWeight={FontWeights.regular}
                    className={orderItem.discount != null ? styles.strike : ''}
                    translate={false}
                  >
                    {orderItem.priceWithCurrency}
                  </Text>
                </div>
                {orderItem.discount && orderItem.type == 'subscription' ? (
                  <div className={classNames(styles.orderSummaryItem)}>
                    <Text fontWeight={FontWeights.regular} color={'--s500'}>
                      {orderItem.discount?.name}
                    </Text>
                    <Text fontWeight={FontWeights.regular} color={'--s500'} translate={false}>
                      {orderItem.discount.priceWithDiscount}
                    </Text>
                  </div>
                ) : (
                  ''
                )}
                {orderItem.description && orderItem.type == 'subscription' ? (
                  <div>
                    <Text fontWeight={FontWeights.regular} type={TextTypes.textHelp}>
                      {orderItem.description.name}
                    </Text>
                    <div className={classNames(dFlex, dFlexColumn, pl1)}>
                      {orderItem.description.details &&
                        orderItem.description.details.map((detail, idx) => {
                          return (
                            <Text fontWeight={FontWeights.regular} type={TextTypes.textHelp} key={idx}>
                              {detail}
                            </Text>
                          );
                        })}
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {orderItem.additionalProjects && orderItem.type == 'subscription' ? (
                  <div className={classNames(styles.orderSummaryItem, mt1)}>
                    <Text fontWeight={FontWeights.regular} type={TextTypes.textHelp}>
                      {orderItem.additionalProjects.name}
                    </Text>
                    <Text fontWeight={FontWeights.regular} translate={false}>
                      {orderItem.additionalProjects.priceWithCurrency}
                    </Text>
                  </div>
                ) : (
                  ''
                )}
              </div>
            );
          })}

          <AnimatedConditional condition={vatWithCurrency != ''}>
            <div className={styles.orderSummaryItemVoucher}>
              <div className={styles.inlineBlock}>
                <Text fontWeight={FontWeights.regular}>VAT</Text>
                <Text fontWeight={FontWeights.regular} translate={false}>
                  ({percentage}%)
                </Text>
              </div>
              <Text fontWeight={FontWeights.regular} translate={false}>
                {vatWithCurrency}
              </Text>
            </div>
          </AnimatedConditional>
        </div>

        <div className={styles.orderSummaryItem}>
          <div className={styles.inlineBlock}>
            <Text fontWeight={FontWeights.regular}>Total</Text>
            <Text fontWeight={FontWeights.regular} translate={false}>
              :
            </Text>
          </div>
          <Text fontWeight={FontWeights.bold} className={styles.totalSum} translate={false}>
            {totalWithCurrency}
          </Text>
        </div>
      </div>
    </ComponentContainer>
  );
};
