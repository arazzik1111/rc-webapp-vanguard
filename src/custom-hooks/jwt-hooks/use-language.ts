import { useGlobalSlice } from '@custom-hooks/jwt-hooks/use-global-slice';

export const useLanguage = (): string => {
  const { languageCode } = useGlobalSlice();
  return languageCode ?? '';
};
