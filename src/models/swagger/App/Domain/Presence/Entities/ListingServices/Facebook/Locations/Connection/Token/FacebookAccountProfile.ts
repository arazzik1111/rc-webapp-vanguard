import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { PersonGender } from '@models/swagger/App/Domain/Common/Entities/Persons/PersonGender';

export const FacebookAccountProfileObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Connection_Token_FacebookAccountProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Connection\\Token\\FacebookAccountProfile',
};

export const FacebookAccountProfileObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Connection_Token_FacebookAccountProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Connection\\Token\\FacebookAccountProfile',
} as const;

export type FacebookAccountProfile = {
  /**
   * The facebook user's ID
   */
  id?: string;
  contactInfos?: ContactInfos;
  profilePicture?: string;
  /**
   * The last name of the person
   */
  lastName?: string;
  /**
   * The first name of the person
   */
  firstName?: string;
  /**
   * Title that is used in the salutation
   */
  title?: string;
  /**
   * The academic title of the person
   */
  academicTitle?: string;
  /**
   * The job title of the person
   */
  jobTitle?: string;
  gender?: PersonGender;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookAccountProfileObjectType)[keyof typeof FacebookAccountProfileObjectType];
};
