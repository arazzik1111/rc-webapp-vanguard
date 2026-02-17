import { rcWindow } from '@stores/window.store';

class UrlService {
  url: URL;

  constructor() {
    this.url = new URL(rcWindow.location.href);
  }

  getUrl(): URL {
    return this.url;
  }

  getQueryParam(param: string): string | null {
    return this.url.searchParams.get(param);
  }
}

export const urlService = new UrlService();
