import { GaAccountKeywordSchemaMatchingType } from '@models/swagger/GaAccountKeywordSchema';

export const getMatchingType = (keyword: string): string => {
  // Determine if the keyword is Broad Match
  if (
    (keyword.indexOf('"') === -1 && keyword.indexOf('[') === -1 && keyword.indexOf(']') === -1) || // If the keyword does not contain any of the " or [ it means it is broad match
    keyword.length < 3 // If the keyword length is less than 3 it means it cannot contain a matching type
  ) {
    return GaAccountKeywordSchemaMatchingType.broad;
  }

  // Determine if the keyword is Phrase Match - "phrase example"
  if (keyword[0] === '"' && keyword.slice(Math.max(0, keyword.length - 1)) === '"') {
    return GaAccountKeywordSchemaMatchingType.phrase;
  }

  // Determine if the keyword is Exact Match - [exact example]
  if (keyword[0] === '[' && keyword.slice(Math.max(0, keyword.length - 1)) === ']') {
    return GaAccountKeywordSchemaMatchingType.exact;
  }

  // By default consider a keyword Broad Match
  return GaAccountKeywordSchemaMatchingType.broad;
};

export const formatKeywordToMatchingType = (
  keyword: string,
  matchingType: string = GaAccountKeywordSchemaMatchingType.broad,
): string => {
  if (!keyword) {
    return '';
  }
  // If the desired matching type is not Broad Match, firstly convert the keyword to broad match (pure state of the keyword without and other annotations)
  if (matchingType !== GaAccountKeywordSchemaMatchingType.broad) {
    keyword = formatKeywordToMatchingType(keyword); // Before
  }

  switch (matchingType) {
    case GaAccountKeywordSchemaMatchingType.broad:
      // If the first character of the keyword is " or [, remove it.
      if (keyword[0].includes('"') || keyword[0].includes('[')) {
        keyword = keyword.slice(1);
      }

      // If the last character of the keyword is " or ], remove it.
      if (
        keyword.slice(Math.max(0, keyword.length - 1)).includes('"') ||
        keyword.slice(Math.max(0, keyword.length - 1)).includes(']')
      ) {
        keyword = keyword.slice(0, Math.max(0, keyword.length - 1));
      }
      return keyword;
      break;

    case GaAccountKeywordSchemaMatchingType.phrase:
      return `"${keyword}"`;
      break;

    case GaAccountKeywordSchemaMatchingType.exact:
      return `[${keyword}]`;
      break;

    default:
      return keyword;
  }
};

export const extractKeywordStringFromFormattedKeyword = (keyword: string): string => {
  return formatKeywordToMatchingType(keyword, GaAccountKeywordSchemaMatchingType.broad);
};

export const cleanKeyword = (keywordName: string, matchingType: string): string => {
  let cleanKeyword = keywordName ?? '';

  cleanKeyword = cleanKeyword.toLowerCase(); // we should not have uppercase keywords

  // we remove space and + sign at the beginning of keywords
  const pattern = /^(\+| )+/;
  if (cleanKeyword && cleanKeyword.search(pattern) >= 0) {
    cleanKeyword = cleanKeyword.replace(pattern, '');
  }

  // commas are removed when editing or duplicating a single keyword
  cleanKeyword = cleanKeyword.replaceAll(',', '');
  cleanKeyword = formatKeywordToMatchingType(
    extractKeywordStringFromFormattedKeyword(cleanKeyword.trim()),
    matchingType,
  );

  return cleanKeyword;
};
