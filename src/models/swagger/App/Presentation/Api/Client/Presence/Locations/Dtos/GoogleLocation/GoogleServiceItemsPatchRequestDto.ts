import { GoogleLocationServiceItems } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/ServiceItems/GoogleLocationServiceItems';

export type GoogleServiceItemsPatchRequestDto = {
  serviceItems?: GoogleLocationServiceItems;
};
