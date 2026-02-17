import { classNames } from '@helpers/classNames';
import { IconNames } from '@vanguard/Icon/IconNames';
import { CtaWithIcon } from '@vanguard/Table/common/CtaWithIcon/CtaWithIcon';
import { TableContextType, TableProvider } from '@vanguard/Table/Table';
import { FontWeights, Text } from '@vanguard/Text/Text';
import React, { useContext, useEffect, useState } from 'react';

import styles from './FooterPagination.module.scss';

export type TablePaginationProps = {
  total: number;
  limit: number;
  offset: number;
  page: number;
  minPage: number;
  maxPage: number;
  step: number;
};

export interface FooterPaginationProps {
  isHidden?: boolean;
}

export const FooterPagination = (props: FooterPaginationProps) => {
  const { isHidden = false } = props;

  const [disabled, setDisabled] = useState<boolean>(false);
  const [disabledNext, setDisabledNext] = useState<boolean>(false);
  const [disabledBack, setDisabledBack] = useState<boolean>(false);

  const context = useContext<TableContextType>(TableProvider);
  const { data, onNextPage, onPrevPage, pagination } = context;
  const columns = data?.columns ?? [];

  const minPage = pagination?.minPage ?? 1;
  const maxPage = pagination?.maxPage ?? undefined;
  const limit = pagination?.limit ?? 1;
  const offset = pagination?.offset ?? 0;
  const total = pagination?.total ?? 1;
  const page = (offset + limit) / limit;

  if (isHidden) {
    return null;
  }

  useEffect(() => {
    if (offset + limit >= total) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    setDisabledNext(parseInt(String(page)) == parseInt(String(maxPage)));
    setDisabledBack(parseInt(String(page)) == parseInt(String(minPage)));
  }, [pagination]);

  return (
    <>
      <CtaWithIcon
        disabled={disabledBack}
        onClick={(evt) => {
          onPrevPage && onPrevPage(offset);
        }}
        className={classNames(styles.spacer, styles.linkColor, styles.disabled)}
        icon={IconNames.caretRight}
        position={'left'}
      >
        <Text fontWeight={FontWeights.medium} color={disabledBack ? 'var(--n300)' : 'var(--brand-color)'}>
          Back
        </Text>
      </CtaWithIcon>
      <CtaWithIcon
        disabled={disabledNext}
        onClick={(evt) => {
          onNextPage && onNextPage(offset);
        }}
        className={classNames(styles.linkColor)}
        icon={IconNames.caretLeft}
        position={'right'}
      >
        <Text fontWeight={FontWeights.medium} color={disabledNext ? 'var(--n300)' : 'var(--brand-color)'}>
          Next
        </Text>
      </CtaWithIcon>
    </>
  );
};
