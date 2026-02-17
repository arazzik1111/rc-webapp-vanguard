import { getPathId, getPathIdAsStr } from '@helpers/get-path-id';
import { ParamType, parseParams } from '@stores/store-helpers/parse-params';

export enum ROUTES_INDEX {
  INDEX = '/customer/index/index',
}

export enum ROUTES_GMB {
  GMB_MANAGE_LOCATION = 'https://business.google.com/',
  GMB_REQUEST_LISTING_REINSTATEMENT = 'https://support.google.com/business/troubleshooter/2690129?authuser=1',
  GMB_GUIDELINESS = 'https://support.google.com/business/answer/3038177?authuser=1',
  GMB_GUIDELINESS_SUSPENDED = 'https://support.google.com/business/answer/4569145?hl=en',
  GMB_GUIDELINESS_DUPLICATE = 'https://support.google.com/business/topic/13279949?hl=en&ref_topic=11498229&sjid=3668226632872771348-EU',
}

export enum ROUTES_IG {
  IG_CONFIGURE_BUSINESS_ACCOUNT = 'https://www.facebook.com/business/help/502981923235522',
}

export enum ROUTES_GOOGLE_ANALYTICS {
  HOW_TO_CREATE_GA4 = 'https://analytics.google.com/analytics/web',
  HOW_TO_MIGRATE_TO_GA4 = 'https://support.google.com/analytics/answer/10759417?hl=en&sjid=3137195963315559718-EU&visit_id=21686125128547-5880185647886482363&rd=1',
}

export enum ROUTES_TASKS {
  SEO = '/customer/tasks/process/seo',
}

export enum ROUTES_RADAR {
  FEED_NOTIFICATIONS = '/customer/index/vision',
}

export enum ROUTES_REPORT {
  SEO = '/customer/reports/type/seo',
}

export enum ROUTES_SEO {
  GA4 = '/customer/seo/web_analytics',
}

export enum ROUTES_ADS {
  BASE = '/customer/rsa',
}

export enum ROUTES_PRESENCE {
  DASHBOARD = '/customer/presence/dashboard',
  PROFILE = '/customer/presence/profile',
  FINE_TUNING = '/customer/presence/fine_tuning',
  LISTINGS = '/customer/presence/listings',
  INSIGHTS = '/customer/presence/insights',
}

export enum ROUTES_ENGAGEMENT {
  DASHBOARD = '/customer/engagement/dashboard/',
  POSTS = '/customer/engagement/posts/',
  BOOSTS = '/customer/engagement/boosts/',
  CHAT = '/customer/engagement/chat/',
  EVENTS = '/customer/engagement/events/',
  INSIGHTS = '/customer/engagement/insights/',
  OFFERS = '/customer/engagement/offers/',
  PRODUCTS = '/customer/engagement/products/',
  PLANNER = '/customer/engagement/planner/',
  CONNECTIONS = '/customer/engagement/connections/',
}

export enum ROUTES_REPUTATION {
  DASHBOARD = '/customer/reputation/dashboard/',
  REVIEWS = '/customer/reputation/reviews/',
  INSIGHTS = '/customer/reputation/insights/',
  REVIEW_BOOSTER = '/customer/reputation/review_booster',
  CUSTOMER_LIST = '/customer/reputation/customer_list',
  PRINT_MATERIALS = '/customer/reputation/print_materials',
  REVIEW_SOURCES = '/customer/reputation/review_sources',
  REPUTATION_WIDGET = '/customer/reputation/reputation_widget',
  REVIEW_COLLECTOR = '/customer/reputation/review_widget',
}

export enum ROUTES_UPGRADE {
  UPGRADE_TO_PRESENCE = '/customer/onboarding?upgradeTo=local', // @todo Confirm the link, seems not to work
  UPGRADE_TO_ADS = '/customer/onboarding?upgradeTo=ads#ads',
}

export enum ROUTES_VAYU {
  SETUP_INDEX = '/customer/setup/index',
  SETUP_DELETE_SITE = '/customer/business/delete_site',
  EDIT_SETUP_DATA = '/customer/setup/data/__LOCATION_ID__?edit=true',
  EDIT_COMPETITORS = '/customer/setup/competitors/__LOCATION_ID__?edit=true',
  EDIT_KEYWORDS = '/customer/setup/keywords/__LOCATION_ID__?edit=true',
  EDIT_OPERATING_AREA = '/customer/setup/operating_zones/__LOCATION_ID__?edit=true',
  CONNECT_GBP = '/customer/setup/google_business/__LOCATION_ID__',
  PUBLISH_DIRECTORIES = '/customer/setup/listings_and_publishing/__LOCATION_ID__',

  SETUP_DATA = '/customer/setup/data',
  SETUP_ADDRESS = '/customer/setup/address/__LOCATION_ID__',
  SETUP_COMPETITORS = '/customer/setup/competitors/__LOCATION_ID__',
  SETUP_CATEGORIES = '/customer/setup/categories/__LOCATION_ID__',
  SETUP_KEYWORDS = '/customer/setup/keywords/__LOCATION_ID__',
  SETUP_SUMMARY = '/customer/setup/summary/__LOCATION_ID__',
}

export enum ROUTES_SETTINGS {
  GENERAL = '/customer/settings/generalSettings/__LOCATION_ID__',
  ASSISTANT = '/customer/settings/assistantSettings',
}

export type ROUTES =
  | ROUTES_PRESENCE
  | ROUTES_REPUTATION
  | ROUTES_UPGRADE
  | ROUTES_ADS
  | ROUTES_GMB
  | ROUTES_IG
  | ROUTES_VAYU
  | ROUTES_ENGAGEMENT
  | ROUTES_RADAR
  | ROUTES_REPORT
  | ROUTES_TASKS
  | ROUTES_SETTINGS
  | ROUTES_INDEX
  | ROUTES_SEO;

type NavServiceOpts = {
  includeLocationInPath?: boolean;
  queryParams?: ParamType;
};

class NavigationService {
  goTo(route: ROUTES, opts?: NavServiceOpts) {
    let locationHref = route as string;

    if (opts) {
      if (opts?.includeLocationInPath) {
        locationHref += getPathId().toString();
      }

      if (!!opts?.queryParams) {
        locationHref += parseParams(opts.queryParams);
      }
    }

    if (route.includes('__LOCATION_ID__')) {
      locationHref = locationHref.replace('__LOCATION_ID__', getPathIdAsStr());
    }

    window.location.href = locationHref;
  }

  openExternalLink(url: string) {
    window.open(url, '_blank');
  }

  reload() {
    window.location.reload();
  }
}

export const navigationService = new NavigationService();
