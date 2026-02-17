export enum ErrorsKeys {
  REQUIRED = 'validation_required', // -> This field is required
  NR_GT = '%field_name% must be greater then %gt%',
  NR_LT = '%field_name% must be lower then %lt%',
  NR_GTE = '%field_name% must be greater or equal to %gte%',
  NR_LTE = '%field_name% must be lower or equal to %lte%',
  NR_IS_VALID = '%field_name% must be a valid number',
  MIN_LEN = 'validation_minLength', // -> Please enter at least {minLength} characters (you have inserted only  {length} character(s))
  MAX_LEN = 'validation_maxLength', // -> Please enter no more than {maxLength} characters (you entered {length} characters).
  URL_NOT_ALLOWED = 'Text contains URL or is missing a space after a period (.)',
  URL_FORMAT = 'Please enter a valid URL',
  PATH_FORMAT = 'Some characters are not allowed in path, for example: # < > [ ] { } * ±',
  SPECIAL_CHARS_NOT_ALLOWED = 'Some characters aren’t allowed, for example: # < > [ ] { } * ±',
  MULTIPLE_SPACES_NOT_ALLOWED = 'Multiple spaces between words or characters are not allowed',
  EXCLAMATION_MARKS_NOT_ALLOWED = 'Exclamation mark is not allowed',
  FULL_STOP_MARKS_NOT_ALLOWED = 'Full Stop mark is not allowed',
  TEXT_AFTER_COMMA_OR_PERIOD_NOT_ALLOWED = 'Please ensure there is a space after special symbols like ,.| for better readability',
  ONLY_SPACES_NOT_ALLOWED = 'You are not allowed to have only spaces',
  FULL_CAPITALIZATION_NOT_ALLOWED = 'Text cannot contain only capital letters',
  EXCESSIVE_CAPITALIZATION_NOT_ALLOWED = 'Excessive uppercase letters is not allowed. Please use fewer capitals.',
  PATH_NOT_ALLOWED = 'Some characters aren’t allowed, for example: /',
  AT_NOT_ALLOWED = 'You don’t have to add the @ symbol',
  AT_DOMAIN_NOT_ALLOWED = "The email doesn’t need to have the '@%domain%' written",
  WRONG_DOMAIN = "You don’t have to add the @ symbol. The email must be on the '@%domain%'",
  NO_REGEX_MATCH = '%field_name% must match %regex%',
  INVALID_PHONE = 'validate-phoneNumberLength', // -> Your phone number is wrong
  INCORRECT_PHONE = 'validation_incorrect-phone', // ->
  INVALID_EMAIL = 'validation_validate-email', // -> Please enter a valid Email address. For example "fred@domain.com".
  NOT_IN_ARRAY = '%field_name% must not belong to the disallowed items list: (%notIn%)', // IMPORTANT!! This is not used into production yet. If you need to use it, please discuss with concepting team for creating a proper key
  PASSWORD_MIN_LEN = 'Please enter at least 4 characters.',
  PASSWORD_MAX_LEN = 'Please enter no more than 100 characters.',
  ROOT_DOMAIN_INVALID = 'The domain must include %rootDomain%',
  INVALID_HEX_COLOR = 'HEX value is incorrect. If you have problems use the color picker next to this field.',
}

export enum CustomErrorsKeys {
  DULPICATIONS_NOT_ALLOWED = "You can't add the same %field_name% text",
  PUBLISHING_PRIMARY_PHONE_REQUIRED = 'Phone number is required in order to publish',
  ADDRESS_NOT_PRECISE = 'Address is not precise, missing address number',
  DOMAIN_NOT_VALID = 'Domain is not valid',
  ONLY_PERSONAL_WEBSITE = 'You can add only links from your websites: %rootDomain%',
  SERVICE_AREAS_OVERLAPPING = '%serviceAreaName% can’t be added because it overlaps with %overlappedServiceArea%',
  SERVICE_AREA_DUPLICATED = '%serviceAreaName% can’t be added twice',
  SERVICE_AREA_MIN_ALLOWED = 'At least one location must be selected',
  SERVICE_AREA_MAX_ALLOWED = 'You’ve added the maximum of locations allowed.',
  SERVICE_AREA_MAX_ALLOWED_BASED_ON_SUBSCRIPTION = 'Your subscription allows you to add up to %count% locations.',
  COUNTRY_AND_LANGUAGE_REQUIRED = 'You must choose a country and language.',
}
