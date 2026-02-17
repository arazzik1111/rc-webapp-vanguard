import { DirectoryCountries } from '@models/swagger/App/Domain/Presence/Entities/Directories/DirectoryCountries';
import { DirectoryPartners } from '@models/swagger/App/Domain/Presence/Entities/Directories/Partners/DirectoryPartners';
import { DirectorySetting } from '@models/swagger/App/Domain/Presence/Entities/Directories/Settings/DirectorySetting';

export const DirectoryType = {
  SEARCH_ENGINE: 'SEARCH_ENGINE',
  BUSINESS_DIRECTORY: 'BUSINESS_DIRECTORY',
  SEARCH_VOICE_DISCOVERY: 'SEARCH_VOICE_DISCOVERY',
  NAVIGATION_SYSTEM: 'NAVIGATION_SYSTEM',
  SOCIAL_MEDIA: 'SOCIAL_MEDIA',
  HOSPITALITY: 'HOSPITALITY',
};

export const DirectoryTypeStrict = {
  SEARCH_ENGINE: 'SEARCH_ENGINE',
  BUSINESS_DIRECTORY: 'BUSINESS_DIRECTORY',
  SEARCH_VOICE_DISCOVERY: 'SEARCH_VOICE_DISCOVERY',
  NAVIGATION_SYSTEM: 'NAVIGATION_SYSTEM',
  SOCIAL_MEDIA: 'SOCIAL_MEDIA',
  HOSPITALITY: 'HOSPITALITY',
} as const;

export const DirectoryObjectType = {
  App_Domain_Presence_Entities_Directories_Directory: 'App\\Domain\\Presence\\Entities\\Directories\\Directory',
};

export const DirectoryObjectTypeStrict = {
  App_Domain_Presence_Entities_Directories_Directory: 'App\\Domain\\Presence\\Entities\\Directories\\Directory',
} as const;

export type Directory = {
  /**
   * The name of the business directory
   */
  name?: string;
  /**
   * The name of the business directory translated in the language of the provided country
   */
  localizedName?: string;
  /**
   * The unique alias of the business directory
   */
  alias?: string;
  /**
   * The unique alias of the business directory within Argus
   */
  argusAlias?: string;
  /**
   * The type of the business directory, e.g. navigation_system
   *  Allowed Values:
   * -   `SEARCH_ENGINE`: Internet search engine
   * -   `BUSINESS_DIRECTORY`: Classical online business directories, e.g. Yellowpages
   * -   `SEARCH_VOICE_DISCOVERY`: Voice assistants and discovery search engines, e.g., SIRI, Foursquare
   * -   `NAVIGATION_SYSTEM`: Navigation systems, usually using offline data
   * -   `SOCIAL_MEDIA`: Social media platforms
   * -   `HOSPITALITY`: Hospitality-related Directories
   *
   */
  type?: (typeof DirectoryType)[keyof typeof DirectoryType];
  /**
   * The order priority of the business directory
   */
  priority?: number;
  /**
   * The root url of the business directory
   */
  url?: string;
  /**
   * Whether the directory is active / operational or not
   */
  isActive?: boolean;
  /**
   * Whether the directory is active on Argus
   */
  isActiveOnArgus?: boolean;
  /**
   * Whether the directory is managed by us or an external ListingService
   */
  isSelfManaged?: boolean;
  /**
   * Whether the directory is a review source
   */
  isActiveReviewSource?: boolean;
  /**
   * The logo file name without ending of the directory
   */
  directoryLogo?: string;
  /**
   * The public logo URL of the directory
   */
  directoryLogoUrl?: string;
  /**
   * Directory name on Uberall ListingService
   */
  uberallName?: string;
  /**
   * Directory name on Yext ListingService
   */
  yextName?: string;
  /**
   * The id of the Directory the current Directory depends on
   */
  dependsOnDirectoryId?: number;
  dependsOnDirectory?: Directory;
  setting?: DirectorySetting;
  partners?: DirectoryPartners;
  directoryCountries?: DirectoryCountries;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryObjectType)[keyof typeof DirectoryObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
