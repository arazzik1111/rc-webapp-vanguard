export type ListPageSliceType<PossibleFilters extends string> = {
  // possibleFilters?: PossibleFilters[];
  summary: Record<`${PossibleFilters}Count`, number | undefined>;
  // checkBoxFilters: ListPageCheckboxes[];

  itemsRequestLoading: boolean;
  itemsRequestError: boolean;

  hasMore: boolean;

  filtersModified: boolean;
  showEmptyState: boolean;
  initialLoad: boolean;
};
