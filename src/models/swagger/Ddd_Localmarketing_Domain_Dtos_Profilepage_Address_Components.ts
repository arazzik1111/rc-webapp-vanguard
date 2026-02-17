import { Ddd_Localmarketing_Domain_Dtos_Profilepage_Address_Country } from '@models/swagger//Ddd_Localmarketing_Domain_Dtos_Profilepage_Address_Country';

export type Ddd_Localmarketing_Domain_Dtos_Profilepage_Address_Components = {
  countriesList?: Ddd_Localmarketing_Domain_Dtos_Profilepage_Address_Country[];
  isAllowedToChangeCountry?: boolean;
  countryId?: number;
  country?: string;
  countryShortCode?: string;
  city?: string;
  postalcode?: string;
  addressFirstLine?: string;
  addressSecondLine?: string;
};
