import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';
import { Directory } from '@models/swagger/App/Domain/Presence/Entities/Directories/Directory';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const DirectoryCountryObjectType = {
  App_Domain_Presence_Entities_Directories_DirectoryCountry:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryCountry',
};

export const DirectoryCountryObjectTypeStrict = {
  App_Domain_Presence_Entities_Directories_DirectoryCountry:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryCountry',
} as const;

export type DirectoryCountry = {
  /**
   * The id of the associated Country
   */
  countryId?: number;
  country?: Country;
  /**
   * The id of the associated Directory
   */
  directoryId?: number;
  /**
   * If true, the Directory is supported by Yext in the given Country
   */
  isActiveOnYext?: boolean;
  /**
   * If true, the Directory is supported by Argus in the given Country
   */
  isActiveOnArgus?: boolean;
  /**
   * If true, the Directory is supported as a Review Source
   */
  isActiveReviewSource?: boolean;
  directory?: Directory;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryCountryObjectType)[keyof typeof DirectoryCountryObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
