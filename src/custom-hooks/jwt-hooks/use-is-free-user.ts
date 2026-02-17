import { useGlobalSlice } from './use-global-slice';

export const useIsFreeUser = (): boolean => {
  const { isFreeUser } = useGlobalSlice();
  return isFreeUser ?? false;
};
