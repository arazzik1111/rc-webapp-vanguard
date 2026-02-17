export const HtmlContentObjectType = {
  App_Domain_Common_Entities_WebContent_HtmlContent: 'App\\Domain\\Common\\Entities\\WebContent\\HtmlContent',
};

export const HtmlContentObjectTypeStrict = {
  App_Domain_Common_Entities_WebContent_HtmlContent: 'App\\Domain\\Common\\Entities\\WebContent\\HtmlContent',
} as const;

export type HtmlContent = {
  /**
   * HTML content as text
   */
  content?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof HtmlContentObjectType)[keyof typeof HtmlContentObjectType];
};
