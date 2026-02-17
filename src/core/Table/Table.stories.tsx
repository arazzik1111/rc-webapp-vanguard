
import {Table, TableDataProps, TableProps, TableRowProps} from "./Table";
import React, {useEffect, useState } from "react";
import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import {mapStorybookActionToProps} from "@test-utils/map-storybook-action-to-props";
import {TableData} from "@vanguard/Table/Table.mock";
import {useTableData} from "@vanguard/Table/hooks/use-table-data";
import {TablePaginationProps} from "@vanguard/Table/TableFooter/FooterPagination/FooterPagination";

export default SbDecorator({
  title: "Vanguard/Table",
  component: Table,
  extra: {
    argTypes: {
      ...disableControls(["children"]),
      isLoading: {
        defaultValue: false,
      },
    }
  },
});

/**
 * Default props of all the stories 
 * If the storybook user did not add anything this will be chosen 
 * */
const defaultProps: TableProps = {
};

export const TableStory = (props:TableProps) => {

  const [limit, setLimit] = useState<number>(1);
  const [tableLoading, setTableLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [tableProps, setTableProps] = useState<TableProps | null>(null);
  const step = 1;

  let mockData = {...TableData};
  if(!mockData.collections)
    mockData.collections = [];
  let count = mockData.collections?.length ?? 0;

  let tablePropsObject = {
    data: {
      columns: mockData.columns,
      collections: mockData?.collections?.slice(offset, offset+limit),
      options: mockData.options
    },
    pagination: {
      total: count,
      limit: limit,
      offset: offset,
      page: Math.floor(offset / limit),
      minPage: 1,
      maxPage: Math.ceil(count / limit) ?? 1,
      step: step
    },
    onNextPage: ( currentOffset:number) => {
      setOffset(currentOffset + limit);
    },
    onPrevPage: ( currentOffset:number) => {
      setOffset(currentOffset - limit);
    },
    onShowMore: ( currentLimit:number) => {
      setLimit(currentLimit + step);
    },
    onShowLess: ( currentLimit:number) => {
      setLimit(currentLimit - step);
    }
  };

  useEffect( () => {
    setTableProps(tablePropsObject);
  },[limit, offset]);

  useEffect( () => {
    setTimeout(() => {
      setTableLoading(false);
    }, 5000);
  },[]);

  if(!tableProps) return null;

  /**
  * Here we can add story specific props
  * */
  props = Object.assign(props, tableProps);
  // const propsMock = mapStorybookActionToProps(props, {
  //   ...defaultProps,
  // });

  return (
      <Table isLoading={tableLoading} {...props} />
  );
};

