import {Bean, ICompFactory, Component, Autowired, Context} from "ag-grid-community";
import {RowGroupColumnsPanel} from "./sideBar/columns/columnDrop/rowGroupColumnsPanel";

@Bean('rowGroupCompFactory')
export class RowGroupCompFactory implements ICompFactory {

    @Autowired('context') private context: Context;

    public create(): Component {

        let rowGroupComp = new RowGroupColumnsPanel(true);
        this.context.wireBean(rowGroupComp);

        return rowGroupComp;
    }
}