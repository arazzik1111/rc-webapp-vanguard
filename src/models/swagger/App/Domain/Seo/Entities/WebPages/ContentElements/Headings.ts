import { AIGeneratedHeadings } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/AI/AIGeneratedHeadings';
import { Heading } from '@models/swagger/App/Domain/Seo/Entities/WebPages/ContentElements/Heading';

export const HeadingsObjectType = {
  App_Domain_Seo_Entities_WebPages_ContentElements_Headings:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\Headings',
};

export const HeadingsObjectTypeStrict = {
  App_Domain_Seo_Entities_WebPages_ContentElements_Headings:
    'App\\Domain\\Seo\\Entities\\WebPages\\ContentElements\\Headings',
} as const;

export type Headings = {
  aiGeneratedVersions?: AIGeneratedHeadings;
  elements?: Heading[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof HeadingsObjectType)[keyof typeof HeadingsObjectType];
};
