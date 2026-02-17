export const UberallCategoryObjectType = {
  App_Domain_Common_Entities_Categories_UberallCategory: 'App\\Domain\\Common\\Entities\\Categories\\UberallCategory',
};

export const UberallCategoryObjectTypeStrict = {
  App_Domain_Common_Entities_Categories_UberallCategory: 'App\\Domain\\Common\\Entities\\Categories\\UberallCategory',
} as const;

export type UberallCategory = {
  /**
   * The name of the category
   */
  name?: string;
  /**
   * The full route of the category from it's parent concatenated with '>'
   */
  route?: string;
  /**
   * Alias string based on the category name
   */
  alias?: string;
  /**
   * The parent category id
   */
  parentCategoryId?: number;
  parentCategory?: UberallCategory;
  /**
   * Whether this is a customer selectable category or not. Too general categories are not selectable
   */
  isSelectable?: boolean;
  /**
   * Whether the category is active or not
   */
  isActive?: boolean;
  /**
   * Whether this is a customer selectable category or not. Too general categories are not selectable
   */
  type?: string;
  /**
   * Whether this is an explicit category, e.g. sexual services or not
   */
  isExplicitContent?: boolean;
  /**
   * Whether this is a sensitive category, e.g. banking services, relevant for fraud detection
   */
  isSensitiveCategory?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UberallCategoryObjectType)[keyof typeof UberallCategoryObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
