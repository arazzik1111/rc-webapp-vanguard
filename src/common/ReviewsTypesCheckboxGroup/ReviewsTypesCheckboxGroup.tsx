import { useAppDispatch } from '@custom-hooks/use-app-dispatch';
import { alignItemsCenter, dFlex, gap2 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { CheckBox } from '@vanguard/CheckBox/CheckBox';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import React from 'react';
import { useSelector } from 'react-redux';

export interface ReviewsTypesCheckboxGroupProps {
  reducer?: any;
  slice?: any;
}

export const ReviewsTypesCheckboxGroup = (props: ReviewsTypesCheckboxGroupProps) => {
  const { reducer, slice } = props;

  const dispatch = useAppDispatch();

  const { setReviewsIntegration } = slice;
  const { reviewsIntegration } = useSelector(reducer) as any;

  const {
    automaticallyReplyToGoodReviews = false,
    automaticallyReplyToBadReviews = false,
    automaticallyReplyToNeutralReviews = false,
  } = reviewsIntegration ?? {};

  return (
    <ComponentContainer className={classNames(dFlex, alignItemsCenter, gap2)}>
      <CheckBox
        className="review-type"
        checked={
          automaticallyReplyToGoodReviews || automaticallyReplyToNeutralReviews || automaticallyReplyToBadReviews
        }
        intermediate={
          (!automaticallyReplyToGoodReviews ||
            !automaticallyReplyToBadReviews ||
            !automaticallyReplyToNeutralReviews) &&
          !(automaticallyReplyToGoodReviews && automaticallyReplyToBadReviews && automaticallyReplyToNeutralReviews)
        }
        onChange={(e) => {
          dispatch(
            setReviewsIntegration({
              ...reviewsIntegration,
              automaticallyReplyToGoodReviews: e.target.checked,
              automaticallyReplyToNeutralReviews: e.target.checked,
              automaticallyReplyToBadReviews: e.target.checked,
            }),
          );
        }}
        label={'All'}
      />
      <CheckBox
        className="review-type"
        checked={automaticallyReplyToGoodReviews}
        onChange={(e) => {
          dispatch(
            setReviewsIntegration({
              ...reviewsIntegration,
              automaticallyReplyToGoodReviews: e.target.checked,
            }),
          );
        }}
        label={'Positive'}
      />
      <CheckBox
        className="review-type"
        checked={automaticallyReplyToNeutralReviews}
        onChange={(e) => {
          dispatch(
            setReviewsIntegration({
              ...reviewsIntegration,
              automaticallyReplyToNeutralReviews: e.target.checked,
            }),
          );
        }}
        label={'Neutral'}
      />
      <CheckBox
        className="review-type"
        checked={automaticallyReplyToBadReviews}
        onChange={(e) => {
          dispatch(
            setReviewsIntegration({
              ...reviewsIntegration,
              automaticallyReplyToBadReviews: e.target.checked,
            }),
          );
        }}
        label={'Negative'}
      />
    </ComponentContainer>
  );
};
