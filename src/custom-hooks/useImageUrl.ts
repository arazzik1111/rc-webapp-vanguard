import { PublicWidgetData } from '@stores/public-widgets-data.store';

export const useImageUrl = (url: string) => {
  if (url.includes('base64')) {
    return url;
  }

  if (url.includes('https://')) {
    return url;
  }

  const { host } = PublicWidgetData.getInstance().get();
  return (host ?? '') + url;
};
