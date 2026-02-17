export const MjmlContentObjectType = {
  App_Domain_Common_Entities_WebContent_MjmlContent: 'App\\Domain\\Common\\Entities\\WebContent\\MjmlContent',
};

export const MjmlContentObjectTypeStrict = {
  App_Domain_Common_Entities_WebContent_MjmlContent: 'App\\Domain\\Common\\Entities\\WebContent\\MjmlContent',
} as const;

export type MjmlContent = {
  /**
   * MJML content as text
   */
  content?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MjmlContentObjectType)[keyof typeof MjmlContentObjectType];
};
