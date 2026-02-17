import { classNames } from '@helpers/classNames';
import { TableContextType, TableProvider } from '@vanguard/Table/Table';
import React, { Context, ReactNode, useContext } from 'react';

import { FontWeights, Text, TextTypes } from '../../Text/Text';
import styles from './TableHeader.module.scss';

export interface TableHeaderProps {
  order?: string | undefined;
  children?: ReactNode | undefined;
  className?: string | undefined;
  provider?: Context<TableContextType>;
  hasGreyTheme?: boolean;
}

export const TableHeader = (props: TableHeaderProps) => {
  const { children, order = undefined, className = undefined, provider = TableProvider, hasGreyTheme } = props;

  const context = useContext<TableContextType>(provider);
  const { data } = context;
  const columns = data?.columns ?? [];
  const options = data?.options ?? {};
  const columnsCount = columns?.length;

  return (
    <thead className={classNames('vanguard-table-head', 'table-head', className, styles.tableHead)}>
      <tr>
        {columns?.length
          ? columns.map((item: any, i: number) => {
              const orderClass = ''; //order && order === item.alias ? styles.columnSortDesc : styles.columnSortAsc;
              const centerClass = item.center && item.center === true ? styles.tableCentered : '';
              const endClass = item.end && item.end === true ? styles.tableEnd : '';
              const stickyClass = item.sticky && item.sticky === true ? styles.tableSticky : '';
              const seamShadowClass = item.seamShadow ? styles.tableSeamShadow : '';
              const greyClass = hasGreyTheme ? styles.greyTheme : '';
              const cssClasses = [orderClass];
              return (
                <th
                  key={i}
                  className={classNames(
                    'vanguard-table-cell',
                    'table-cell',
                    styles.tableCell,
                    stickyClass,
                    seamShadowClass,
                    greyClass,
                    cssClasses.join(', '),
                  )}
                  style={item?.styles ? { ...item.styles } : undefined}
                >
                  <div className={classNames(centerClass, endClass)}>
                    {typeof item.text !== 'string' ? (
                      item.text()
                    ) : (
                      <Text type={TextTypes.text} fontWeight={FontWeights.bold}>
                        {item.text}
                      </Text>
                    )}
                  </div>
                </th>
              );
            })
          : null}
      </tr>
    </thead>
  );
};

TableHeader.styles = styles;
