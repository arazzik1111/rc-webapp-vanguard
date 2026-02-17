import { GoogleLocationAttributes } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Attributes/GoogleLocationAttributes';

export type GoogleAttributesPatchRequestDto = {
  attributes?: GoogleLocationAttributes;
};
