import { classNames } from '@helpers/classNames';
import { lazyImport } from '@helpers/lazy-import';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Render } from '@vanguard/Render/Render';
import { TablePaginationProps } from '@vanguard/Table/TableFooter/FooterPagination/FooterPagination';
import { TableFooter } from '@vanguard/Table/TableFooter/TableFooter';
import { TableHeader } from '@vanguard/Table/TableHeader/TableHeader';
import { TextReplacements } from '@vanguard/Text/Text';
import React, { createContext, ReactNode, Suspense, useEffect, useState } from 'react';

import { TablePlaceholder, TableRowPlaceholder } from './common/TablePlaceholder/TablePlaceholder';
import styles from './Table.module.scss';

const TableBody = lazyImport(() => import('@vanguard/Table/TableBody/TableBody'), 'TableBody');

export type BlurredMessageProps = {
  blurredMessage?: string;
  hideBlurredMessage?: boolean;
  blurredCta?: {
    text: string;
    cta: () => void;
  };
};

export type TableDataProps = {
  options?: TableOptionsProps;
  columns?: Array<TableColumnProps>;
  collections?: Array<TableRowProps>;
  replacements?: TextReplacements;
} & BlurredMessageProps;

export interface TableOptionsPostOrPrefixProps {
  columnAlias: string;
  value: ReactNode | string | ((param: any, row: any) => ReactNode);
  valueParam?: string | number;
  style?: React.CSSProperties;
}

export interface TableOptionsProps {
  postfixForColumn?: Array<TableOptionsPostOrPrefixProps>;
  prefixForColumn?: Array<TableOptionsPostOrPrefixProps>;
}

export interface TableColumnProps {
  alias: string;
  text: ReactNode | string;
  center?: boolean;
  end?: boolean;
  sticky?: boolean;
  seamShadow?: boolean;
  styles?: object;
}

export type TableRowProps = {
  isBlurred?: boolean;
  postfixForColumn?: Array<TableOptionsPostOrPrefixProps> | null;
  prefixForColumn?: Array<TableOptionsPostOrPrefixProps> | null;
  [key: string]: any;
} & {};

export type TableProps = {
  containerClassName?: string;
  className?: string;
  pagination?: TablePaginationProps;
  data?: TableDataProps;
  onNextPage?: (currentOffset: number) => void;
  onPrevPage?: (currentOffset: number) => void;
  onShowMore?: (currentLimit?: number) => void;
  onShowLess?: (currentLimit?: number) => void;
  isLoading?: boolean;
  hideFooter?: boolean;
  replacements?: TextReplacements;
  hasGreyBody?: boolean;
} & BlurredMessageProps;

export type TableContextType = {
  data?: TableDataProps;
  pagination?: TablePaginationProps;
  onNextPage?: (payload: number) => void;
  onPrevPage?: (payload: number) => void;
  onShowMore?: (payload?: number) => void;
  onShowLess?: (payload?: number) => void;
};
export const TableProvider = createContext<TableContextType>({});

export const Table = (props: TableProps) => {
  let {
    // eslint-disable-next-line prefer-const
    containerClassName = '',
    // eslint-disable-next-line prefer-const
    className = '',
    pagination = {
      total: 0,
      limit: 0,
      offset: 0,
      page: 0,
      minPage: 0,
      maxPage: 0,
      step: 1,
    },
    // eslint-disable-next-line prefer-const
    data = {
      options: {},
      columns: [],
      collections: [],
    },
    // eslint-disable-next-line prefer-const
    onNextPage = undefined,
    // eslint-disable-next-line prefer-const
    onPrevPage = undefined,
    // eslint-disable-next-line prefer-const
    onShowMore = undefined,
    // eslint-disable-next-line prefer-const
    isLoading = false,
    // eslint-disable-next-line prefer-const
    onShowLess = undefined,

    // eslint-disable-next-line prefer-const
    hideFooter = false,
  } = props;

  const { blurredMessage, blurredCta, replacements, hideBlurredMessage, hasGreyBody } = props;
  const tableDataColections = data.collections ?? [];
  const tableDataColumns = data.columns ?? [];
  const tableDataOptions = data.options ?? {};
  const totalCount = pagination.total;

  const [rowsData, setRowsData] = useState<Array<any>>(tableDataColections);
  const [columnsData, setColumnsData] = useState<Array<TableColumnProps>>(tableDataColumns);
  const [optionsData, setOptions] = useState<object>(tableDataOptions);

  const [total, setTotal] = useState<number>(pagination.total);
  const [offset, setOffset] = useState<number>(pagination.offset);
  const [limit, setLimit] = useState<number>(pagination.limit);
  const [page, setPage] = useState<number>(pagination.page);
  const [paginationData, setPaginationData] = useState<TablePaginationProps>(pagination);

  useEffect(() => {
    if (hideFooter) {
      setLimit(0);
      setOffset(0);
      setPage(1);
    }
  }, [hideFooter]);

  useEffect(() => {
    tableDataColumns && setColumnsData(tableDataColumns);
    tableDataColections && setRowsData(tableDataColections);
    tableDataOptions && setOptions(tableDataOptions);

    if (limit > 0) {
      //console.log('something changed... data, pagination, limit or offset');
      const newPage = (offset + limit) / limit;
      pagination = {
        total: pagination.total ?? 0,
        limit: pagination.limit,
        offset: pagination.offset,
        minPage: pagination.minPage,
        maxPage: pagination.maxPage,
        step: pagination.step,
        page: newPage,
      };
      pagination && setPaginationData(pagination);
      totalCount && setTotal(totalCount);
      newPage && setPage(newPage);
    }
  }, [data]);

  const context: TableContextType = {
    data: {
      options: { ...optionsData },
      columns: [...columnsData],
      collections: [...rowsData],
      blurredMessage: blurredMessage,
      hideBlurredMessage: hideBlurredMessage,
      blurredCta: blurredCta,
      replacements: replacements,
    },

    pagination: paginationData,
    onNextPage,
    onPrevPage,
    onShowMore,
    onShowLess,
  };

  if (isLoading) {
    return <TablePlaceholder />;
  }

  /*
  console.log("Limit:", limit);
  console.log("Offset:", offset);
  console.log("Page:", page);
  */

  return (
    <TableProvider.Provider value={{ ...context }}>
      <ComponentContainer className={classNames(styles.container, containerClassName)}>
        <table className={classNames(styles.table, className)}>
          <Render if={!!columnsData}>
            <TableHeader
              order={columnsData && columnsData[0].alias}
              className={classNames(styles.tableHead)}
              hasGreyTheme={hasGreyBody}
            />
            <Suspense
              fallback={
                <tbody>
                  <tr>
                    <td>
                      <TableRowPlaceholder />
                    </td>
                  </tr>
                </tbody>
              }
            >
              <TableBody hasGreyBody={hasGreyBody} />
            </Suspense>
            <Render if={!hideFooter}>
              <TableFooter />
            </Render>
          </Render>
        </table>
      </ComponentContainer>
    </TableProvider.Provider>
  );
};
