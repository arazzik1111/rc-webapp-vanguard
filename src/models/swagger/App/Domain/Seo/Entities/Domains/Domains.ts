import { Domain } from '@models/swagger/App/Domain/Seo/Entities/Domains/Domain';

export const DomainsObjectType = {
  App_Domain_Seo_Entities_Domains_Domains: 'App\\Domain\\Seo\\Entities\\Domains\\Domains',
};

export const DomainsObjectTypeStrict = {
  App_Domain_Seo_Entities_Domains_Domains: 'App\\Domain\\Seo\\Entities\\Domains\\Domains',
} as const;

export type Domains = {
  elements?: Domain[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DomainsObjectType)[keyof typeof DomainsObjectType];
};
