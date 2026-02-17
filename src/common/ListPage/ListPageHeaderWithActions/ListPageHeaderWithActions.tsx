import { ListPageProps } from "@common/ListPage/ListPage";
import React from "react";
import { ListPageActions } from "./ListPageActions/ListPageActions";
import { ListPageHeader } from "./ListPageHeader/ListPageHeader";
import styles from "./ListPageHeaderWithActions.module.scss";

export type ListPageHeaderWithActionsProps<T> = ListPageProps<T> & {
  testId?: string;
};
export const ListPageHeaderWithActions = <T,>(props: ListPageHeaderWithActionsProps<T>) => {
  const { title, filters = { elements: [], automaticRequest: false } } = props;

  /**
   * No Title and Filters
   */
  if (!title && !filters.elements.length) {
    return null;
  }

  /**
   * Return view
   * ---
   */
  return (
    <>
      <ListPageHeader {...props} />
      <ListPageActions {...props} />
    </>
  );
};
