import { BoostAdCreativeCallToActionValue } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdCreativeCallToActionValue';

export const BoostAdCreativeCallToActionType = {
  BOOK_NOW: 'BOOK_NOW',
  DOWNLOAD: 'DOWNLOAD',
  GET_QUOTE: 'GET_QUOTE',
  GET_SHOWTIMES: 'GET_SHOWTIMES',
  LEARN_MORE: 'LEARN_MORE',
  LISTEN_NOW: 'LISTEN_NOW',
  SHOP_NOW: 'SHOP_NOW',
  SIGN_UP: 'SIGN_UP',
  SUBSCRIBE: 'SUBSCRIBE',
  WATCH_MORE: 'WATCH_MORE',
  APPLY_NOW: 'APPLY_NOW',
  BUY_TICKETS: 'BUY_TICKETS',
  CONTACT_US: 'CONTACT_US',
  GET_OFFER: 'GET_OFFER',
  GET_PROMOTIONS: 'GET_PROMOTIONS',
  PAY_TO_ACCESS: 'PAY_TO_ACCESS',
  REQUEST_TIME: 'REQUEST_TIME',
  ORDER_NOW: 'ORDER_NOW',
  SEND_UPDATES: 'SEND_UPDATES',
  PLAY_GAME: 'PLAY_GAME',
  CALL_NOW: 'CALL_NOW',
  WHATSAPP_MESSAGE: 'WHATSAPP_MESSAGE',
  INSTALL_APP: 'INSTALL_APP',
  INSTALL_MOBILE_APP: 'INSTALL_MOBILE_APP',
  USE_APP: 'USE_APP',
  USE_MOBILE_APP: 'USE_MOBILE_APP',
  GET_DIRECTIONS: 'GET_DIRECTIONS',
  VISIT_PROFILE: 'VISIT_PROFILE',
  NO_BUTTON: 'NO_BUTTON',
};

export const BoostAdCreativeCallToActionTypeStrict = {
  BOOK_NOW: 'BOOK_NOW',
  DOWNLOAD: 'DOWNLOAD',
  GET_QUOTE: 'GET_QUOTE',
  GET_SHOWTIMES: 'GET_SHOWTIMES',
  LEARN_MORE: 'LEARN_MORE',
  LISTEN_NOW: 'LISTEN_NOW',
  SHOP_NOW: 'SHOP_NOW',
  SIGN_UP: 'SIGN_UP',
  SUBSCRIBE: 'SUBSCRIBE',
  WATCH_MORE: 'WATCH_MORE',
  APPLY_NOW: 'APPLY_NOW',
  BUY_TICKETS: 'BUY_TICKETS',
  CONTACT_US: 'CONTACT_US',
  GET_OFFER: 'GET_OFFER',
  GET_PROMOTIONS: 'GET_PROMOTIONS',
  PAY_TO_ACCESS: 'PAY_TO_ACCESS',
  REQUEST_TIME: 'REQUEST_TIME',
  ORDER_NOW: 'ORDER_NOW',
  SEND_UPDATES: 'SEND_UPDATES',
  PLAY_GAME: 'PLAY_GAME',
  CALL_NOW: 'CALL_NOW',
  WHATSAPP_MESSAGE: 'WHATSAPP_MESSAGE',
  INSTALL_APP: 'INSTALL_APP',
  INSTALL_MOBILE_APP: 'INSTALL_MOBILE_APP',
  USE_APP: 'USE_APP',
  USE_MOBILE_APP: 'USE_MOBILE_APP',
  GET_DIRECTIONS: 'GET_DIRECTIONS',
  VISIT_PROFILE: 'VISIT_PROFILE',
  NO_BUTTON: 'NO_BUTTON',
} as const;

export const BoostAdCreativeCallToActionObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdCreativeCallToAction:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdCreativeCallToAction',
};

export const BoostAdCreativeCallToActionObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdCreativeCallToAction:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdCreativeCallToAction',
} as const;

export type BoostAdCreativeCallToAction = {
  /**
   * The type of the action. Not all types can be used for all ads. Consider which type can be used based on the objective of your campaign.
   *  Allowed Values:
   * -   `BOOK_NOW`: Book now type for cta
   * -   `DOWNLOAD`: Download type for cta
   * -   `GET_QUOTE`: Get quote type for cta
   * -   `GET_SHOWTIMES`: Get showtimes type for cta
   * -   `LEARN_MORE`: Learn more type for cta
   * -   `LISTEN_NOW`: Listen now type for cta
   * -   `SHOP_NOW`: Shop now type for cta
   * -   `SIGN_UP`: Sign up type for cta
   * -   `SUBSCRIBE`: Subscribe type for cta
   * -   `WATCH_MORE`: Watch more type for cta
   * -   `APPLY_NOW`: Apply now type for cta
   * -   `BUY_TICKETS`: Buy ticket type for cta
   * -   `CONTACT_US`: Contact us type for cta
   * -   `GET_OFFER`: Get offer type for cta
   * -   `GET_PROMOTIONS`: Get promotions type for cta
   * -   `PAY_TO_ACCESS`: Pay to access type for cta
   * -   `REQUEST_TIME`: Request time type for cta
   * -   `ORDER_NOW`: Order now type for cta
   * -   `SEND_UPDATES`: Send updates type for cta
   * -   `PLAY_GAME`: Play game type for cta
   * -   `CALL_NOW`: Call now type for cta
   * -   `WHATSAPP_MESSAGE`: Whatsapp message type for cta
   * -   `INSTALL_APP`: Install app type for cta
   * -   `INSTALL_MOBILE_APP`: Install mobile app type for cta
   * -   `USE_APP`: Use app type for cta
   * -   `USE_MOBILE_APP`: Use mobile app type for cta
   * -   `GET_DIRECTIONS`: Get directions type for cta
   * -   `VISIT_PROFILE`: Pay to access type for cta
   * -   `NO_BUTTON`: No button type for cta
   *
   */
  type?: (typeof BoostAdCreativeCallToActionType)[keyof typeof BoostAdCreativeCallToActionType];
  value?: BoostAdCreativeCallToActionValue;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdCreativeCallToActionObjectType)[keyof typeof BoostAdCreativeCallToActionObjectType];
};
