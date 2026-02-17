export type BlPhoneNumber = {
  number: string;
  type: string;
};
export type BusinessProcessorBusinessListing = {
  business_name: string; // filter full text query -> AUTOCOMPLETE  -> filter by keys
  business_status: 'operational'; // Other ones ,
  country_code: string; // filter by keys
  language_code: string; // filter by keys
  created_day: string; // ct > 10 10 2021 filter by keys
  created_time: number;
  domain: string;
  emails: string[];
  external_id: string;
  formatted_address: string; // full text quey
  formatted_address_local: string; // full text quey
  latitude: number;
  listing_details_url: string;
  longitude: number;
  media: string[];
  opening_hours: string[];
  phone_numbers: BlPhoneNumber[];
  socials: string[];
  status: 'active'; // other ones
  updated_day: string;
  updated_time: number;
  website: string;
  _id: string;
  _info: { place_id: string };
  _key: string;
  _rev: string;
};
