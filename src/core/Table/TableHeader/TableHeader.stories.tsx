
import { TableHeader, TableHeaderProps } from "./TableHeader";
import React, {createContext} from "react";
import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import {mapStorybookActionToProps} from "@test-utils/map-storybook-action-to-props";
import {TableData} from "@vanguard/Table/Table.mock";
import {TableColumnProps, TableContextType, TableOptionsProps} from "@vanguard/Table/Table";

export default SbDecorator({
  title: "Vanguard/Table/TableHeader",
  component: TableHeader,
    extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories 
 * If the storybook user did not add anything this will be chosen 
 * */
const defaultProps: TableHeaderProps = {
};

const TableProvider = createContext<TableContextType>({});
export const TableHeaderStory = (props:TableHeaderProps) => {

  const mockData = TableData;
  const contextStories = {
    data: {
      options: mockData.options,
      columns: mockData.columns,
      collections: mockData.collections
    },
    pagination: {
      total: 0,
      limit: 0,
      offset: 0,
      page: 0,
      minPage: 0,
      maxPage: 0,
      step: 1
    },
  }

  return (
    <TableProvider.Provider value={contextStories}>
      <table>
          <TableHeader provider={TableProvider} />
      </table>
    </TableProvider.Provider>
  );
};

