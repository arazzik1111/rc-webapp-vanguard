import { Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Day } from '@models/swagger//Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Day';

export type Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Object = {
  openingHoursData?: Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Day[];
  alwaysOpen?: boolean;
  noHoursAvailable?: boolean;
  openOnSelectedHours?: boolean;
  openingHoursNotes?: string;
  showAmPm?: boolean;
};
