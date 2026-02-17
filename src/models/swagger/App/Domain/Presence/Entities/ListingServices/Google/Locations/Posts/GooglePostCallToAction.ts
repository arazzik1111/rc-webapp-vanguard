export const GooglePostCallToActionActionType = {
  ACTION_TYPE_UNSPECIFIED: 'ACTION_TYPE_UNSPECIFIED',
  BOOK: 'BOOK',
  ORDER: 'ORDER',
  SHOP: 'SHOP',
  LEARN_MORE: 'LEARN_MORE',
  SIGN_UP: 'SIGN_UP',
  GET_OFFER: 'GET_OFFER',
  CALL: 'CALL',
  SIGNUP: 'SIGNUP',
};

export const GooglePostCallToActionActionTypeStrict = {
  ACTION_TYPE_UNSPECIFIED: 'ACTION_TYPE_UNSPECIFIED',
  BOOK: 'BOOK',
  ORDER: 'ORDER',
  SHOP: 'SHOP',
  LEARN_MORE: 'LEARN_MORE',
  SIGN_UP: 'SIGN_UP',
  GET_OFFER: 'GET_OFFER',
  CALL: 'CALL',
  SIGNUP: 'SIGNUP',
} as const;

export type GooglePostCallToAction = {
  /**
   * Action type of the Google CTA
   *  Allowed Values:
   * -   `ACTION_TYPE_UNSPECIFIED`: Type unspecified.
   * -   `BOOK`: This post wants a user to book an appointment/table/etc..
   * -   `ORDER`: This post wants a user to order something.
   * -   `SHOP`: This post wants a user to browse a product catalog.
   * -   `LEARN_MORE`: This post wants a user to learn more (at their website).
   * -   `SIGN_UP`: This post wants a user to register/sign up/join something.
   * -   `GET_OFFER`: Deprecated. Use OFFER in LocalPostTopicType to create a post with offer content.
   * -   `CALL`: This post wants a user to call the business.
   * -   `SIGNUP`: This post wants a user to sign up.
   *
   */
  actionType?: (typeof GooglePostCallToActionActionType)[keyof typeof GooglePostCallToActionActionType];
  /**
   * URL of the Google CTA
   */
  url?: string;
};
