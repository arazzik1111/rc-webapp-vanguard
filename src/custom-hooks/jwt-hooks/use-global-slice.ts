import { useAppDispatch } from '@custom-hooks/use-app-dispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { GlobalSlice } from '../../global.slice';
// import { RootState } from "../../rootReducer";

/**
 * @deprecated REPLACE WITH data from requests
 * @todo Consider merging this with settings.store.ts and making a useSettings hook
 */
export const useGlobalSlice = () => {
  const dispatch = useAppDispatch();
  const reduxData = useSelector((state: any) => state.GlobalReducer);
  const {
    setJwt,
    setUsername,
    setFirstname,
    setLastname,
    setLanguageCode,
    setCurrency,
    setLocale,
    setIsFreeUser,
    setSubscriptionsProducts,
    setHasPaidSubscription,
    setId,
    setSupportSystem,
    setApiUserId,
    setIsLoaded,
  } = GlobalSlice;

  useEffect(() => {
    if (reduxData.isLoaded) {
      return;
    }

    const jwt = JSON.parse(localStorage.getItem('userService') ?? '{}');
    if (jwt && !reduxData.isLoaded) {
      dispatch(setJwt(jwt));
      if (jwt.username) {
        dispatch(setUsername(jwt.username));
      }
      if (jwt.firstname) {
        dispatch(setFirstname(jwt.firstname));
      }
      if (jwt.lastname) {
        dispatch(setLastname(jwt.lastname));
      }
      if (jwt.languageCode) {
        dispatch(setLanguageCode(jwt.languageCode));
      }
      if (jwt.currency) {
        dispatch(setCurrency(jwt.currency));
      }
      if (jwt.locale) {
        dispatch(setLocale(jwt.locale));
      }
      if (jwt.isFreeUser) {
        dispatch(setIsFreeUser(jwt.isFreeUser));
      }
      if (jwt.subscriptionsProducts) {
        dispatch(setSubscriptionsProducts(jwt.subscriptionsProducts));
      }
      if (jwt.hasPaidSubscription) {
        dispatch(setHasPaidSubscription(jwt.hasPaidSubscription));
      }
      if (jwt.id) {
        dispatch(setId(jwt.id));
      }
      if (jwt.supportSystem) {
        dispatch(setSupportSystem(jwt.supportSystem));
      }
      if (jwt.apiUserId) {
        dispatch(setApiUserId(jwt.apiUserId));
      }
      setIsLoaded(true);
    }
  }, []);

  return reduxData;
};
