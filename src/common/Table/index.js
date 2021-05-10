import * as CSS from "./styles";
import {Table} from "antd";

const TableX = ({ id, dataSource, columns }) => (
  <CSS.Table id={id}>
    <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 7 }} locale={{emptyText: "Không có dữ liệu"}} />
  </CSS.Table>

);


export default TableX;
