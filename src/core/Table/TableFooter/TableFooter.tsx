import { alignItemsCenter, dFlex } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { AnimatedConditional } from '@vanguard/AnimatedConditional/AnimatedConditional';
import { TableContextType, TableProvider } from '@vanguard/Table/Table';
import { FooterPagination } from '@vanguard/Table/TableFooter/FooterPagination/FooterPagination';
import { FooterShowMore } from '@vanguard/Table/TableFooter/FooterShowMore/FooterShowMore';
import React, { Context, ReactNode, useContext } from 'react';

import { FooterShowLess } from './FooterShowLess/FooterShowLess';
import styles from './TableFooter.module.scss';

export interface TableFooterProps {
  children?: ReactNode | undefined;
  provider?: Context<TableContextType>;
}

export const TableFooter = (props: TableFooterProps) => {
  const { children, provider = TableProvider } = props;
  const context = useContext<TableContextType>(provider);
  const { data } = context;
  const columns = data?.columns ?? [];
  const columnsCount = columns?.length;

  const limit = context.pagination?.limit ?? 1;
  const total = context.pagination?.total ?? 1;

  return (
    <tfoot>
      <tr className={styles.tableFooter}>
        <td colSpan={columnsCount}>
          <div className={classNames(dFlex, alignItemsCenter)}>
            <AnimatedConditional condition={limit <= total && total > 6}>
              <div className={styles.sideLeft}>
                <FooterShowLess isHidden={limit < total} />
                <FooterShowMore isHidden={limit === total} />
              </div>
            </AnimatedConditional>
            <div className={classNames(dFlex, alignItemsCenter, styles.sideRight)}>
              <FooterPagination />
            </div>
          </div>
          {children ?? null}
        </td>
      </tr>
    </tfoot>
  );
};
