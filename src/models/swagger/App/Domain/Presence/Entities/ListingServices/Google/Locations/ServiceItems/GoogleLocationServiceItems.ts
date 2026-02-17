import { GoogleLocationServiceItem } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/ServiceItems/GoogleLocationServiceItem';

export const GoogleLocationServiceItemsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_ServiceItems_GoogleLocationServiceItems:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\ServiceItems\\GoogleLocationServiceItems',
};

export const GoogleLocationServiceItemsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_ServiceItems_GoogleLocationServiceItems:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\ServiceItems\\GoogleLocationServiceItems',
} as const;

export type GoogleLocationServiceItems = {
  elements?: GoogleLocationServiceItem[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationServiceItemsObjectType)[keyof typeof GoogleLocationServiceItemsObjectType];
};
