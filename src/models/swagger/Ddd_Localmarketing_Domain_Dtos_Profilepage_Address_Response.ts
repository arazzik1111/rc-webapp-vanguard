import { Ddd_Localmarketing_Domain_Dtos_Profilepage_Address_Components } from '@models/swagger//Ddd_Localmarketing_Domain_Dtos_Profilepage_Address_Components';
import { Ddd_Localmarketing_Domain_Dtos_Profilepage_Address_Geocode } from '@models/swagger//Ddd_Localmarketing_Domain_Dtos_Profilepage_Address_Geocode';

export type Ddd_Localmarketing_Domain_Dtos_Profilepage_Address_Response = {
  formattedAddress?: string;
  geocode?: Ddd_Localmarketing_Domain_Dtos_Profilepage_Address_Geocode;
  addressComponents?: Ddd_Localmarketing_Domain_Dtos_Profilepage_Address_Components;
};
