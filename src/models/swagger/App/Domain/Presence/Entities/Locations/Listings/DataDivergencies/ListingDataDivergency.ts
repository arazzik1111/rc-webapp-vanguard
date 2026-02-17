import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { Keywords } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keywords';
import { LocationCategories } from '@models/swagger/App/Domain/Presence/Entities/Locations/Categories/LocationCategories';
import { Description } from '@models/swagger/App/Domain/Presence/Entities/Locations/Description/Description';
import { LocationServiceAreas } from '@models/swagger/App/Domain/Presence/Entities/Locations/ServiceAreas/LocationServiceAreas';
import { OpeningHours } from '@models/swagger/App/Domain/Presence/Entities/OpeningHours/OpeningHours';
import { Website } from '@models/swagger/App/Domain/Seo/Entities/Website';

export const ListingDataDivergencyDataStatus = {
  AVAILABLE: 'AVAILABLE',
  NOT_IMPLEMENTED: 'NOT_IMPLEMENTED',
  NOT_AVAILABLE: 'NOT_AVAILABLE',
};

export const ListingDataDivergencyDataStatusStrict = {
  AVAILABLE: 'AVAILABLE',
  NOT_IMPLEMENTED: 'NOT_IMPLEMENTED',
  NOT_AVAILABLE: 'NOT_AVAILABLE',
} as const;

export const ListingDataDivergencySyncStatus = {
  IN_SYNC: 'IN_SYNC',
  NOT_IN_SYNC: 'NOT_IN_SYNC',
};

export const ListingDataDivergencySyncStatusStrict = {
  IN_SYNC: 'IN_SYNC',
  NOT_IN_SYNC: 'NOT_IN_SYNC',
} as const;

export const ListingDataDivergencyType = {
  POSTAL_ADDRESS: 'POSTAL_ADDRESS',
  COMPANY: 'COMPANY',
  WEBSITE: 'WEBSITE',
  DESCRIPTION: 'DESCRIPTION',
  CONTACTINFOS: 'CONTACTINFOS',
  KEYWORDS: 'KEYWORDS',
  OPENINGHOURS: 'OPENINGHOURS',
  CATEGORIES: 'CATEGORIES',
  LOCATIONSERVICEAREAS: 'LOCATIONSERVICEAREAS',
};

export const ListingDataDivergencyTypeStrict = {
  POSTAL_ADDRESS: 'POSTAL_ADDRESS',
  COMPANY: 'COMPANY',
  WEBSITE: 'WEBSITE',
  DESCRIPTION: 'DESCRIPTION',
  CONTACTINFOS: 'CONTACTINFOS',
  KEYWORDS: 'KEYWORDS',
  OPENINGHOURS: 'OPENINGHOURS',
  CATEGORIES: 'CATEGORIES',
  LOCATIONSERVICEAREAS: 'LOCATIONSERVICEAREAS',
} as const;

export const ListingDataDivergencyObjectType = {
  App_Domain_Presence_Entities_Locations_Listings_DataDivergencies_ListingDataDivergency:
    'App\\Domain\\Presence\\Entities\\Locations\\Listings\\DataDivergencies\\ListingDataDivergency',
};

export const ListingDataDivergencyObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Listings_DataDivergencies_ListingDataDivergency:
    'App\\Domain\\Presence\\Entities\\Locations\\Listings\\DataDivergencies\\ListingDataDivergency',
} as const;

export type ListingDataDivergency = {
  /**
   * The type of ListingService the comparation is done for
   */
  listingServiceType?: string;
  /**
   * Represents the status of this information on the Argus enginge for this directory, either the information is available, not available or not implemented
   *  Allowed Values:
   * -   `AVAILABLE`: Data type is available
   * -   `NOT_IMPLEMENTED`: Data type is not implemented
   * -   `NOT_AVAILABLE`: Data type is not available
   *
   */
  dataStatus?: (typeof ListingDataDivergencyDataStatus)[keyof typeof ListingDataDivergencyDataStatus];
  /**
   * Depicts wheather the information is correct or not correct, if the engine does not support this type of data, we consider it in sync
   *  Allowed Values:
   * -   `IN_SYNC`: Data is in sync
   * -   `NOT_IN_SYNC`: Data is not in sync
   *
   */
  syncStatus?: (typeof ListingDataDivergencySyncStatus)[keyof typeof ListingDataDivergencySyncStatus];
  /**
   * If true, data on Location is the same as on last sync, and therefore an external change has occured
   */
  hasExternalDataChanges?: boolean;
  /**
   * Type of discrepancy
   *  Allowed Values:
   * -   `POSTAL_ADDRESS`: Divergencies on address
   * -   `COMPANY`: Divergencies on company / name
   * -   `WEBSITE`: Divergencies on website
   * -   `DESCRIPTION`: Divergencies on description
   * -   `CONTACTINFOS`: Divergencies on contactinfos
   * -   `KEYWORDS`: Divergencies on keywords
   * -   `OPENINGHOURS`: Divergencies on openinghours
   * -   `CATEGORIES`: Divergencies on categories
   * -   `LOCATIONSERVICEAREAS`: Divergencies on ServiceAreas
   *
   */
  type?: (typeof ListingDataDivergencyType)[keyof typeof ListingDataDivergencyType];
  /**
   * Scoring of the data quality
   */
  score?: number;
  /**
   * The Data that is present on current Location
   */
  dataOnLocation?:
    | PostalAddress
    | Company
    | ContactInfos
    | Website
    | Description
    | Keywords
    | OpeningHours
    | LocationCategories
    | LocationServiceAreas;
  /**
   * The Data that is present on directory
   */
  dataOnDirectory?:
    | PostalAddress
    | Company
    | ContactInfos
    | Website
    | Description
    | Keywords
    | OpeningHours
    | LocationCategories
    | LocationServiceAreas;
  dataOnLastSync?:
    | PostalAddress
    | Company
    | ContactInfos
    | Website
    | Description
    | Keywords
    | OpeningHours
    | LocationCategories
    | LocationServiceAreas;
  dataToBeUsedForLocationUpdate?:
    | PostalAddress
    | Company
    | ContactInfos
    | Website
    | Description
    | Keywords
    | OpeningHours
    | LocationCategories
    | LocationServiceAreas;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ListingDataDivergencyObjectType)[keyof typeof ListingDataDivergencyObjectType];
};
