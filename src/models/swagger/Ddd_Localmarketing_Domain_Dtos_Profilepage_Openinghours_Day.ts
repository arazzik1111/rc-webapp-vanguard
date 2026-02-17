import { Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Interval } from '@models/swagger//Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Interval';

export type Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Day = {
  open?: boolean;
  openAllDay?: boolean;
  dayOfWeek?: string;
  openingHours?: Ddd_Localmarketing_Domain_Dtos_Profilepage_Openinghours_Interval[];
};
