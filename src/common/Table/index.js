import * as CSS from "./styles";
import {Table} from "antd";

const TableX = ({ id, dataSource, columns }) => (
  <CSS.Table>
    <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 7 }} locale={{emptyText: "Không có dữ liệu"}} scroll={{ x: 2000, y: 400 }}/>
  </CSS.Table>

);


export default TableX;
