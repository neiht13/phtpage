import {lazy, useEffect, useState} from "react";
import { Row, Col, Table } from "antd";
import Zoom from "react-reveal/Zoom";
import { withTranslation } from "react-i18next";

import axios from "axios";
import * as CSS from "./styles";
import removeVietnamese from "../../../common/Utilities/ConvertViString";
import useForm from "../../../common/Form/useForm";

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
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
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
        {/*  <Block padding={true} title={title} content={content} />*/}
        {/*</Col>*/}
          <CSS.Label>
            <CSS.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Row type="flex" justify="space-between" align="middle">
              <Col span={6}>
                <Input
                    type="text"
                    name="ID"
                    id="id"
                    disabled
                    required
                    value={removeVietnamese(values.name) || ""}
                    onChange={handleChange}
                />
              </Col>
              <Col span={6}>
                <Input
                    type="text"
                    name="Name"
                    id="name"
                    alt="id"
                    required
                    value={values.name || ""}
                    onChange={handleChange}
                />
              </Col>
              <Col span={6}>
                <Input
                    type="number"
                    value={values.value || ""}
                    name="Value"
                    id="value"
                    required
                    onChange={handleChange}
                />
              </Col>
              <Col span={4}>
                <CSS.ButtonContainer>
                  <Button name="submit" size="small" type="submit">
                    {t("Submit")}
                  </Button>
                </CSS.ButtonContainer>
              </Col>
              </Row>
            </CSS.FormGroup>
          </CSS.Label>
          <Table dataSource={menuBar} columns={columns} />
      </div>
  );
};

export default withTranslation()(Contact);
