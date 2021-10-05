import React, {lazy, useEffect, useState} from "react";
import {Row, Col, Table, Select, Upload} from "antd";

import axios from "axios";
import * as CSS from "./styles";
import removeVietnamese from "../../common/Utilities/ConvertViString";
import useForm from "../../common/Form/useForm";

const Block = lazy(() => import("../../components/Block"));
const Input = lazy(() => import("../../common/Input"));
const Button = lazy(() => import("../../common/Button"));
const TextArea = lazy(() => import("../../common/TextArea"));

const Contact = ({ title, content, id, t }) => {
  const { values, setValues, errors, handleChange, handleSubmit, shouldSubmit, setShouldSubmit, setUrlForm , isNew, setIsNew} = useForm();
  const [menuBar, setMenuBar] = useState(null);
  const [menuBarSelect, setMenuBarSelect] = useState(null);
  const [photos, setPhotos] = useState(null);
  useEffect(() =>{
    fetchMenu();
    setUrlForm("http://localhost:5000/block-content/update");
    if (shouldSubmit) {
      setShouldSubmit(false);
    }
  },[shouldSubmit])
  const fetchMenu = () => {
    axios.get('http://localhost:5000/menu_bar').then(res =>{
      setMenuBar(res.data)
        const tesst = res.data.map(item => {
          let option = {
            label: item.name,
            value: item.id,
          };
          console.log(JSON.stringify(option))
          return option;
        })
      console.log(JSON.stringify(tesst))
      setMenuBarSelect(tesst)
    })
  }
  const dropdownHeader = () =>{
    if (menuBar) {
      const tesst = menuBar.map(item => {
        let option = {};
        option['label'] = item.name;
        option['value'] = item.id;
        console.log(option.toString())
        return option;
      })
      console.log(tesst);
      return tesst;
    }
  }

  const deleteAction = (row) => {
    axios.post('http://localhost:5000/menu_bar/delete', {
      id: row.target.id
    }).then(res => {
      fetchMenu()
    })
  }
  const uploadHandle = (data) => {
    console.log(data)
    axios.post('http://localhost:5000/upload', data.file)
        .then((res) => {
          setPhotos(res.data)
        });
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
            {/*<i className={`fas fa-times`} style={{color: 'tomato', cursor: 'pointer'}}*/}
            {/*   id={i} onClick={deleteAction}/>*/}
            {/*&nbsp;&nbsp;&nbsp;*/}
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
                <Col span={6}>
                  <Input
                      type="text"
                      name="ID trang"
                      id="id"
                      disabled
                      value={values.id || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={8}>
                  <Input
                      type="text"
                      name="Tiêu đề"
                      id="title"
                      value={values.title || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={10}>
                  <Input
                      type="text"
                      name="Mô tả"
                      id="text"
                      
                      value={values.text || ""}
                      onChange={handleChange}
                  />
                </Col>
              </Row>
              <hr/>
              <strong>Thành phần phụ</strong> &nbsp;&nbsp;&nbsp;
              <InputSwitch id="subContent" checked={values.subContent} onChange={handleChange} />
              {values.subContent && <Row type="flex" justify="space-between" align="middle">
                <Col span={7}>
                  <Input
                      type="text"
                      name="Tiêu đề phụ 1"
                      id="sub_1_title"
                      
                      value={values.sub_1_title || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Mô tả"
                      id="sub_1_text"
                      
                      value={values.sub_1_text || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Hình ảnh"
                      id="sub_1_image"
                      
                      value={values.sub_1_image || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={7}>
                  <Input
                      type="text"
                      name="Tiêu đề phụ 2"
                      id="sub_2_title"
                      
                      value={values.sub_2_title || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Mô tả"
                      id="sub_2_text"
                      
                      value={values.sub_2_text || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Hình ảnh"
                      id="sub_2_image"
                      
                      value={values.sub_2_image || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={7}>
                  <Input
                      type="text"
                      name="Tiêu đề phụ 3"
                      id="sub_3_title"
                      
                      value={values.sub_3_title || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Mô tả"
                      id="sub_3_text"
                      
                      value={values.sub_3_text || ""}
                      onChange={handleChange}
                  />
                  <Input
                      type="text"
                      name="Hình ảnh"
                      id="sub_3_image"
                      
                      value={values.sub_3_image || ""}
                      onChange={handleChange}
                  />
                </Col>
              </Row>}
              <hr/>
              <strong>Nút</strong> &nbsp;&nbsp;&nbsp;
              <InputSwitch id="hasButton" checked={values.hasButton} onChange={handleChange} />
              {values.hasButton && <Row type="flex" justify="space-between" align="middle">
                <Col span={8}>
                  <Input
                      type="text"
                      name="Tên nút"
                      id="button_name_1"
                      
                      value={values.button_name_1 || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={8}>
                  <label>Đường dẫn đến</label>
                  <br/>
                  <Dropdown
                      id="button_url_1"
                      value={values.button_url_1 || ""}
                      onChange={handleChange}
                      options={menuBarSelect}
                  />
                </Col>
                <Col span={8}>
                  <Input
                      type="text"
                      name="Nền"
                      id="button_background_1"
                      
                      value={values.button_background_1 || ""}
                      onChange={handleChange}
                  />
                </Col>
              </Row> }
              {values.hasButton &&  <Row type="flex" justify="space-between" align="middle">
                <Col span={8}>
                  <Input
                      type="text"
                      name="Tên nút"
                      id="button_name_2"
                      
                      value={values.button_name_2 || ""}
                      onChange={handleChange}
                  />
                </Col>
                <Col span={8}>
                  <label>Đường dẫn đến</label>
                  <br/>
                  <Dropdown
                      id="button_url_2"
                      value={values.button_url_2 || ""}
                      onChange={handleChange}
                      options={menuBarSelect}
                  />
                </Col>
                <Col span={8}>
                  <Input
                      type="text"
                      name="Nền"
                      id="button_background_2"
                      
                      value={values.button_background_2 || ""}
                      onChange={handleChange}
                  />
                </Col>
              </Row>}
              <hr/>
              <Row type="flex" justify="space-between" align="middle">
                <Col span={11}>
                  <div>Hình ảnh</div>

                  <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      onChange={uploadHandle}
                  >
                  </Upload>
                </Col>
                <Col span={11}>
                  <div>Hình nền</div>
                  <FileUpload id="background" onUpload={uploadHandle}/>
                  {photos && photos[0] && <img src={`http://localhost:3000/upload/${photos[0].filename}`} alt={photos[0].filename}/>}
                </Col>
              </Row>
              <hr/>
              <Row type="flex" justify="space-between" align="middle">
                <Col span={11}>
                  <div>Nội dung trái/phải</div>
                  <SelectButton id="position" value={values.position || ""} onChange={handleChange} options={[{label:'Trái', value: 'left'},{label:'Phải', value: 'right'}]}/>
                </Col>
                <Col span={11}>
                  <div>Hiệu ứng</div>
                  <Dropdown id="effect" value={values.effect || ""} onChange={handleChange} options={[{label:1, value: 1},{label:2, value: 2}]}/>
                </Col>
              </Row>
              <Row>
                <CSS.ButtonContainer>
                  <Button name="submit" size="small" type="submit">
                    {t("Submit")}
                  </Button>
                </CSS.ButtonContainer>
              </Row>
            </CSS.FormGroup>
          </CSS.Label>

        <hr/>
          <Table dataSource={menuBar} columns={columns} />
      </div>
  );
};

export default withTranslation()(Contact);
