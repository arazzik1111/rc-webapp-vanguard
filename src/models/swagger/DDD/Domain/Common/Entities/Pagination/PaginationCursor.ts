export const PaginationCursorObjectType = {
  DDD_Domain_Common_Entities_Pagination_PaginationCursor: 'DDD\\Domain\\Common\\Entities\\Pagination\\PaginationCursor',
};

export const PaginationCursorObjectTypeStrict = {
  DDD_Domain_Common_Entities_Pagination_PaginationCursor: 'DDD\\Domain\\Common\\Entities\\Pagination\\PaginationCursor',
} as const;

export type PaginationCursor = {
  /**
   * Cursor of current / requested result set
   */
  current?: string;
  /**
   * Cursor of previous result set
   */
  previous?: string;
  /**
   * Cursor of next result set
   */
  next?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PaginationCursorObjectType)[keyof typeof PaginationCursorObjectType];
};
