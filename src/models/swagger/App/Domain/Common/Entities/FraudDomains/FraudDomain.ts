export const FraudDomainObjectType = {
  App_Domain_Common_Entities_FraudDomains_FraudDomain: 'App\\Domain\\Common\\Entities\\FraudDomains\\FraudDomain',
};

export const FraudDomainObjectTypeStrict = {
  App_Domain_Common_Entities_FraudDomains_FraudDomain: 'App\\Domain\\Common\\Entities\\FraudDomains\\FraudDomain',
} as const;

export type FraudDomain = {
  /**
   * The fraud domain as string
   */
  domain?: string;
  /**
   * The number of times the domain has been flagged as fraud because of insufficient funds
   */
  insufficientFundsIncidentCount?: number;
  /**
   * The number of times the domain has been flagged as fraud because of intentional failed payment
   */
  intentionalFailedPaymentIncidentCount?: number;
  /**
   * Is the domain a common domain
   */
  isCommonDomain?: boolean;
  /**
   * The id of the phishing target
   */
  phishingTargetId?: number;
  /**
   * The risk score of the domain being a common domain
   */
  commonDomainRiskScore?: number | number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FraudDomainObjectType)[keyof typeof FraudDomainObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
