export const ResponsiveSearchAdRestrictionCertificationRequired = {
  GAMBLING_LICENSE: 'GAMBLING_LICENSE',
  LIQUOR_LICENSE: 'LIQUOR_LICENSE',
  FINANCIAL_REGULATORY: 'FINANCIAL_REGULATORY',
  HEALTHCARE_APPROVAL: 'HEALTHCARE_APPROVAL',
  POLITICAL_REGISTRATION: 'POLITICAL_REGISTRATION',
};

export const ResponsiveSearchAdRestrictionCertificationRequiredStrict = {
  GAMBLING_LICENSE: 'GAMBLING_LICENSE',
  LIQUOR_LICENSE: 'LIQUOR_LICENSE',
  FINANCIAL_REGULATORY: 'FINANCIAL_REGULATORY',
  HEALTHCARE_APPROVAL: 'HEALTHCARE_APPROVAL',
  POLITICAL_REGISTRATION: 'POLITICAL_REGISTRATION',
} as const;

export const ResponsiveSearchAdRestrictionObjectType = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Restrictions_ResponsiveSearchAdRestriction:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Restrictions\\ResponsiveSearchAdRestriction',
};

export const ResponsiveSearchAdRestrictionObjectTypeStrict = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Restrictions_ResponsiveSearchAdRestriction:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Restrictions\\ResponsiveSearchAdRestriction',
} as const;

export type ResponsiveSearchAdRestriction = {
  /**
   * The descriptive name of the restriction
   */
  name?: string;
  /**
   * A decsription for description with examples
   */
  description?: string;
  /**
   * Indicates if the ad is not allowed.
   *
   * Meaning: The ad content is completely prohibited and cannot be used under any circumstances.
   * Example: Ads for counterfeit goods, dangerous products or services, enabling dishonest behavior, etc.
   */
  forbidden?: boolean;
  /**
   * Indicates if the ad is restricted.
   *
   * Meaning: The ad is allowed but comes with certain limitations. These limitations can be based on target audience, geographical location, or required certifications.
   * Example: Ads for gambling, healthcare and medicines, political content, financial services, etc.
   */
  restricted?: boolean;
  /**
   * Indicates if the ad should target only an adult audience.
   *
   * Meaning: The ad content is explicitly for adults and should only be shown to an adult audience.
   * Example: Ads for adult content like adult toys or adult dating services.
   */
  targetOnlyAdultAudience?: boolean;
  /**
   * Indicates if the ad should not target minors.
   *
   * Meaning: The ad content is generally acceptable for a broader audience but should not be specifically targeted at minors.
   * Example: Ads for alcoholic beverages, gambling games, etc.
   */
  notTargetMinors?: boolean;
  /**
   * Specifies the type of certification required, if any.
   *
   * Meaning: The type of certification or approval required to run the ad. This is applicable for restricted ads that require some form of certification.
   * Example: Gambling license for gambling ads, healthcare approval for healthcare ads, etc.
   *  Allowed Values:
   * -   `GAMBLING_LICENSE`: Required for ads related to gambling and games.
   * You'll often need a gambling license from the jurisdiction where you intend to advertise.
   * -   `LIQUOR_LICENSE`: May be required for alcoholic beverages in some jurisdictions.
   * -   `FINANCIAL_REGULATORY`: Required for financial services.
   * You may need to be registered with financial regulatory bodies, like the SEC in the U.S. for investment products.
   * -   `HEALTHCARE_APPROVAL`: Required for healthcare and medicine-related ads.
   * You may need approval from healthcare authorities, like the FDA in the U.S., to advertise prescription medications.
   * -   `POLITICAL_REGISTRATION`: Required for political content.
   * In some jurisdictions, you may need to register as a political advertiser.
   *
   */
  certificationRequired?: (typeof ResponsiveSearchAdRestrictionCertificationRequired)[keyof typeof ResponsiveSearchAdRestrictionCertificationRequired];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ResponsiveSearchAdRestrictionObjectType)[keyof typeof ResponsiveSearchAdRestrictionObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
