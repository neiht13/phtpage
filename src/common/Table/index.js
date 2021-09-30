import * as CSS from "./styles";
import {Card, Table} from "antd";

const TableX = ({id, dataSource, columns}) => (
    <CSS.Table>
        <Card>
            <Table dataSource={dataSource} columns={columns} pagination={{pageSize: 7}}
                   locale={{emptyText: "Không có dữ liệu"}} scroll={{x: 1200, y: 400}}/>
        </Card>
    </CSS.Table>

);


export default TableX;
