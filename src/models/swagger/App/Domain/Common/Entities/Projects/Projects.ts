import { Project } from '@models/swagger/App/Domain/Common/Entities/Projects/Project';

export const ProjectsObjectType = {
  App_Domain_Common_Entities_Projects_Projects: 'App\\Domain\\Common\\Entities\\Projects\\Projects',
};

export const ProjectsObjectTypeStrict = {
  App_Domain_Common_Entities_Projects_Projects: 'App\\Domain\\Common\\Entities\\Projects\\Projects',
} as const;

export type Projects = {
  elements?: Project[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProjectsObjectType)[keyof typeof ProjectsObjectType];
};
