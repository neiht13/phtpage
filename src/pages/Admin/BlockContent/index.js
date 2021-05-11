import {lazy, useEffect, useState} from "react";
import {Row, Col, Table, Select} from "antd";
import Zoom from "react-reveal/Zoom";
import { withTranslation } from "react-i18next";

import axios from "axios";
import * as CSS from "./styles";
import removeVietnamese from "../../../common/Utilities/ConvertViString";
import useForm from "../../../common/Form/useForm";
import {FileUpload} from "primereact/fileupload";
import {SelectButton} from "primereact/selectbutton";
import {MultiSelect} from "primereact/multiselect";

const Block = lazy(() => import("../../../components/Block"));
const Input = lazy(() => import("../../../common/Input"));
const Button = lazy(() => import("../../../common/Button"));
const TextArea = lazy(() => import("../../../common/TextArea"));

const Contact = ({ title, content, id, t }) => {
  const { values, setValues, errors, handleChange, handleSubmit, shouldSubmit, setShouldSubmit, setUrlForm , isNew, setIsNew} = useForm();
  const [menuBar, setMenuBar] = useState(null);
  useEffect(() =>{
    fetchMenu();
    setUrlForm("http://localhost:5000/menu_bar/new");
    if (shouldSubmit) {
      setShouldSubmit(false);
    }
  },[shouldSubmit])
  useEffect(() =>{
    fetchMenu();
    if (!isNew) {
      setUrlForm("http://localhost:5000/menu_bar/update");
    }
  },[isNew, shouldSubmit])
  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <Zoom cascade>
        <CSS.Span>{ErrorMessage}</CSS.Span>
      </Zoom>
    ) : (
      <CSS.Span />
    );
  };

  const fetchMenu = () => {
    axios.get('http://localhost:5000/menu_bar').then(res =>{
      setMenuBar(res.data)
    })
  }

  const deleteAction = (row) => {
    axios.post('http://localhost:5000/menu_bar/delete', {
      id: row.target.id
    }).then(res => {
      fetchMenu()
    })
  }

  const editAction = (row) => {
    console.log(row);
    setValues(row);
    setIsNew(false);
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      render: (i, row) =>
          <span>
            <i className={`fas fa-times`} style={{color: 'tomato', cursor: 'pointer'}}
               id={i} onClick={deleteAction}/>
            &nbsp;&nbsp;&nbsp;
            <i className={`fas fa-pencil-alt`} style={{cursor: 'pointer'}}
               id={i} onClick={(e) => editAction(row)}/>
          </span>
    },
  ];

  return (
      <div>
        {/*<Col lg={12} md={11} sm={24}>*/}
        {/*  <Footer padding={true} title={title} content={content} />*/}
        {/*</Col>*/}
          <CSS.Label>
            <CSS.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Row type="flex" justify="space-between" align="middle">
                <Col span={8}>
                  <Input
                      type="text"
                      name="Tiêu đề"
                      id="title"
                      required
                      value={values.title || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={16}>
                  <Input
                      type="text"
                      name="Mô tả"
                      id="text"
                      required
                      value={values.text || ""}
                      onChange={handleChange}
                  />
                </Col>
              </Row>
              <div>Thành phần phụ</div>
              <Row type="flex" justify="space-between" align="middle">
                <Col span={8}>
                  <Input
                      type="text"
                      name="Tiêu đề"
                      id="title"
                      required
                      value={values.title || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Mô tả"
                      id="text"
                      required
                      value={values.text || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Mô tả"
                      id="text"
                      required
                      value={values.text || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={8}>
                  <Input
                      type="text"
                      name="Tiêu đề"
                      id="title"
                      required
                      value={values.title || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Mô tả"
                      id="text"
                      required
                      value={values.text || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Mô tả"
                      id="text"
                      required
                      value={values.text || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={8}>
                  <Input
                      type="text"
                      name="Tiêu đề"
                      id="title"
                      required
                      value={values.title || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Mô tả"
                      id="text"
                      required
                      value={values.text || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Mô tả"
                      id="text"
                      required
                      value={values.text || ""}
                      onChange={handleChange}
                  />
                </Col>
              </Row>
              <div>Nút</div>
              <Row type="flex" justify="space-between" align="middle">
                <Col span={8}>
                  <Input
                      type="text"
                      name="Tên nút"
                      id="title"
                      required
                      value={values.title || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={8}>
                  <Input
                      type="text"
                      name="Đường dẫn đến"
                      id="text"
                      required
                      value={values.text || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={8}>
                  <Input
                      type="text"
                      name="Nền"
                      id="title"
                      required
                      value={values.title || ""}
                      onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row type="flex" justify="space-between" align="middle">
                <Col span={8}>
                  <Input
                      type="text"
                      name="Tên nút"
                      id="title"
                      required
                      value={values.title || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={8}>
                  <Input
                      type="text"
                      name="Đường dẫn đến"
                      id="text"
                      required
                      value={values.text || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={8}>
                  <Input
                      type="text"
                      name="Nền"
                      id="title"
                      required
                      value={values.title || ""}
                      onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row type="flex" justify="space-between" align="middle">
                <Col span={11}>
                  <div>Hình ảnh</div>

                  <FileUpload></FileUpload>
                </Col>
                <Col span={11}>
                  <div>Hình nền</div>
                  <FileUpload></FileUpload>
                </Col>
              </Row>
              <Row type="flex" justify="space-between" align="middle">
                <Col span={11}>
                  <div>Nội dung trái/phải</div>
                  <SelectButton options={[{label:1, value: 1},{label:2, value: 2}]}/>
                </Col>
                <Col span={11}>
                  <div>Hiệu ứng</div>
                  <Select options={[{label:1, value: 1},{label:2, value: 2}]}></Select>
                </Col>
              </Row>
            </CSS.FormGroup>
          </CSS.Label>
          <Table dataSource={menuBar} columns={columns} />
      </div>
  );
};

export default withTranslation()(Contact);
