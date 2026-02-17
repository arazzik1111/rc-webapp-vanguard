import { getQueryParam } from '@helpers/url-params';
import { PublicWidgetData } from '@stores/public-widgets-data.store';

export const getPathId = (url?: string): number => {
  if (!url) {
    url = window.location.href.toString();
  }

  let backup = localStorage.getItem('backupSiteId') || -1;
  if (!backup || backup === -1) {
    backup = getQueryParam('siteId');
  }

  if (typeof backup === 'string') {
    backup = parseInt(backup);
    if (isNaN(backup) && !!backup) {
      return -1;
    }
  }

  // used to set a location id by a public widget
  const instance = PublicWidgetData.getInstance();
  const { locationId } = instance.get();
  if (locationId) {
    return parseInt(locationId);
  }

  const match = url.match(/(?:\/)(\d+)(?:$|[?#\/])/);

  // if (!match && queryParam) {
  //   return parseInt(queryParam);
  // }

  if (!match) {
    return backup;
  }

  return parseInt(match[1]) ?? backup;
};

export const getPathIdAsStr = (url?: string): string => {
  return `${getPathId(url)}`;
};
