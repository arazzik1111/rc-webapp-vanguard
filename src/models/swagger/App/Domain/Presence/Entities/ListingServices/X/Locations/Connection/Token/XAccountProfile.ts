import { PersonGender } from '@models/swagger/App/Domain/Common/Entities/Persons/PersonGender';

export const XAccountProfileObjectType = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Connection_Token_XAccountProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Connection\\Token\\XAccountProfile',
};

export const XAccountProfileObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Connection_Token_XAccountProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Connection\\Token\\XAccountProfile',
} as const;

export type XAccountProfile = {
  /**
   * The X user's ID
   */
  id?: string;
  profilePicture?: string;
  profileUrl?: string;
  userName?: string;
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
  objectType: (typeof XAccountProfileObjectType)[keyof typeof XAccountProfileObjectType];
};
