import { isInEmbededEnv } from '@helpers/is-in-embeded-env';
import { rcWindow } from '@stores/window.store';

export const updateImageUrlWithBaseRequest = (url?: string) => {
  if (!url || url.startsWith('http:') || url.startsWith('https:') || url.startsWith('data:image')) {
    return url;
  }

  if (isInEmbededEnv()) {
    return url;
  }

  const workspace = rcWindow.__ENDPOINT_ENV__;
  const base = workspace ? `https://${workspace}.rankingcoach.com` : 'https://rankingcoach.com';

  return `${base}/${url}`;
};
