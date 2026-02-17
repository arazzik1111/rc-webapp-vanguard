export type FindAllQueryParams = {
  type?: 'business-categories' | 'keyword' | 'location';
  limit?: number;
  offset?: number;
};

export type FindAllBusinessCategories = {
  type?: 'business-categories';
  limit?: number;
  offset?: number;
};

export type FindAllKeywords = {
  type?: 'keyword';
  limit?: number;
  offset?: number;
};
