import { LocationReviewRequestEmails } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/LocationReviewRequestEmails';
import { ReviewSources } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewSources/ReviewSources';

export const ArgusLocationReputationMigrationScrappingStatus = {
  NONE: 'NONE',
  PENDING: 'PENDING',
  ONGOING: 'ONGOING',
  DONE: 'DONE',
  FAILED: 'FAILED',
};

export const ArgusLocationReputationMigrationScrappingStatusStrict = {
  NONE: 'NONE',
  PENDING: 'PENDING',
  ONGOING: 'ONGOING',
  DONE: 'DONE',
  FAILED: 'FAILED',
} as const;

export const ArgusLocationReputationMigrationDataType = {
  location: 'location',
  customers: 'customers',
  listingProfiles: 'listingProfiles',
  widgets: 'widgets',
};

export const ArgusLocationReputationMigrationDataTypeStrict = {
  location: 'location',
  customers: 'customers',
  listingProfiles: 'listingProfiles',
  widgets: 'widgets',
} as const;

export const ArgusLocationReputationMigrationObjectType = {
  App_Domain_Presence_Repo_Argus_Locations_ArgusLocationReputationMigration:
    'App\\Domain\\Presence\\Repo\\Argus\\Locations\\ArgusLocationReputationMigration',
};

export const ArgusLocationReputationMigrationObjectTypeStrict = {
  App_Domain_Presence_Repo_Argus_Locations_ArgusLocationReputationMigration:
    'App\\Domain\\Presence\\Repo\\Argus\\Locations\\ArgusLocationReputationMigration',
} as const;

export type ArgusLocationReputationMigration = {
  /**
   * The rC's location ID
   */
  locationId?: number;
  /**
   * The External Business ID from Vendasta
   */
  externalBusinessId?: string;
  /**
   * Weather the data has been scraped or not
   *  Allowed Values:
   * -   `NONE`: Scrapping status None
   * -   `PENDING`: Scrapping status Pending
   * -   `ONGOING`: Scrapping status Ongoing
   * -   `DONE`: Scrapping status Done
   * -   `FAILED`: Scrapping status Failed
   *
   */
  scrappingStatus?: (typeof ArgusLocationReputationMigrationScrappingStatus)[keyof typeof ArgusLocationReputationMigrationScrappingStatus];
  /**
   * The type of data to be retrieved
   *  Allowed Values:
   * -   `location`: Location data type of the scraped data
   * -   `customers`: Customers data type of the scraped data
   * -   `listingProfiles`: Reviews sources data type of the scraped data
   * -   `widgets`: Widgets data type of the scraped data
   *
   */
  dataType?: (typeof ArgusLocationReputationMigrationDataType)[keyof typeof ArgusLocationReputationMigrationDataType];
  locationReviewRequestEmails?: LocationReviewRequestEmails;
  reviewSources?: ReviewSources;
  /**
   * Weather the Reputation widget is present or not
   */
  hasReputationWidget?: boolean;
  /**
   * Weather the Reviews widget is present or not
   */
  hasReviewWidget?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ArgusLocationReputationMigrationObjectType)[keyof typeof ArgusLocationReputationMigrationObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
