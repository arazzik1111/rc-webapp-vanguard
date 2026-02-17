import { useImageUrl } from '@custom-hooks/useImageUrl';
import { useEffect, useState } from 'react';

export const useLazyImage = (url: string) => {
  url = useImageUrl(url);

  const [isLazyLoading, setIsLazyLoading] = useState(true);
  const [isLazyError, setIsLazyError] = useState(false);

  useEffect(() => {
    setIsLazyLoading(true);
    setIsLazyError(false);

    const img = new Image();
    img.onload = () => {
      setIsLazyLoading(false);
    };
    img.onerror = () => {
      setIsLazyLoading(false);
      setIsLazyError(true);
    };

    img.src = url;
  }, []);

  return {
    isLazyLoading,
    isLazyError,
    setIsLazyLoading,
    setIsLazyError,
  };
};
