import * as React from "react";
import Paper from "@material-ui/core/Paper";

import {
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
  SortingState,
  IntegratedSorting,
  FilteringState,
  IntegratedFiltering
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel,
  TableFilterRow
} from "@devexpress/dx-react-grid-material-ui";

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: "id", title: "ID" },
        { name: "product", title: "Product" },
        { name: "owner", title: "Owner" }
      ],
      rows: [
        { id: 0, product: "ABCD", owner: "DevExpress" },
        { id: 1, product: "BCDA Reactive", owner: "DevExpress" },
        { id: 2, product: "CDBA", owner: "DevExpress" },
        { id: 3, product: "DCBA Reactive", owner: "DevExpress" }
      ],
      selection: []
    };

    this.changeSelection = selection => this.setState({ selection });
  }

  render() {
    const { rows, columns, selection } = this.state;

    return (
      <div>
        <span>Total rows selected: {selection.length}</span>
        <Paper>
          <Grid rows={rows} columns={columns}>
            <FilteringState defaultFilters={[]} />
            <IntegratedFiltering />
            <SortingState
              defaultSorting={[{ columnName: "owner", direction: "asc" }]}
            />
            <IntegratedSorting />
            <PagingState defaultCurrentPage={0} pageSize={6} />
            <SelectionState
              selection={selection}
              onSelectionChange={this.changeSelection}
            />
            <IntegratedPaging />
            <IntegratedSelection />

            <Table />
            <TableSelection showSelectAll />
            <TableHeaderRow showSortingControls />
            <TableFilterRow />
            <PagingPanel />
          </Grid>
        </Paper>
      </div>
    );
  }
}
