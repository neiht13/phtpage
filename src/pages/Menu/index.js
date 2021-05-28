import {lazy, useEffect, useState} from "react";
import {Row, Col, Form, Checkbox} from "antd";
import Zoom from "react-reveal/Zoom";

import axios from "axios";
import * as CSS from "./styles";
import removeVietnamese from "../../common/Utilities/ConvertViString";
import useForm from "../../common/Form/useForm";
import * as instanceApi from "../../service/service"
import Notification from "../../common/Form/Notification";

const TableX = lazy(() => import("../../common/Table"));
const Block = lazy(() => import("../../components/Block"));
const Input = lazy(() => import("../../common/Input"));
const Button = lazy(() => import("../../common/Button"));
const TextArea = lazy(() => import("../../common/TextArea"));

const Menu = ({title, content, id, t}) => {
    const {
        values,
        setValues,
        errors,
        handleChange,
        handleSubmit,
        shouldSubmit,
        setShouldSubmit,
        setUrlForm,
        isNew,
        setIsNew
    } = useForm();
    const [menuBar, setMenuBar] = useState([]);
    useEffect(() => {
        fetchMenu();
    }, [])
    const ValidationType = ({type}) => {
        const ErrorMessage = errors[type];
        return errors[type] ? (
            <Zoom cascade>
                <CSS.Span>{ErrorMessage}</CSS.Span>
            </Zoom>
        ) : (
            <CSS.Span/>
        );
    };

    const fetchMenu = () => {
        instanceApi.fetch('menu_bar').then(data => {
            console.log("data", data)
            setMenuBar(data)
        });
    }

    const deleteAction = (row) => {
        axios.post('http://localhost:5000/menu_bar/delete', {
            id: row.target.id
        }).then(res => {
            instanceApi.fetch('menu_bar').then(data => {
                console.log("data", data)
                setMenuBar(data)
            });
        })
    }

    const editAction = (row) => {
        if (isNew) {
            instanceApi.create('menu_bar', row).then(data => {
                setValues({});
                setShouldSubmit(true);
                Notification('success', 'Thành công', 'Thêm bản ghi thành công.');
            });
        } else {
            instanceApi.update('menu_bar', row).then(data => {
                setValues({});
                setShouldSubmit(true);
                Notification('success', 'Thành công', 'Thêm bản ghi thành công.');
            });
        }
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

    const onFinish = (values) => {
        instanceApi.create('menu_bar', values).then(data => {
            fetchMenu();
            Notification('success', 'Thành công', 'Thêm bản ghi thành công.');
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo.errorFields);
        if (errorInfo && errorInfo.errorFields) {
            errorInfo.errorFields.forEach(error => {
                Notification('error', error.name, error.errors);

            })
        }
    };

    return (
        <div>
            {/*<Col lg={12} md={11} sm={24}>*/}
            {/*  <Footer padding={true} title={title} content={content} />*/}
            {/*</Col>*/}
            {/*  <CSS.Label>*/}
            {/*    <CSS.FormGroup autoComplete="off" onSubmit={editAction}>*/}
            {/*      <Row type="flex" justify="space-between" align="middle">*/}
            {/*      <Col span={6}>*/}
            {/*        <Input*/}
            {/*            type="text"*/}
            {/*            name="ID"*/}
            {/*            id="id"*/}
            {/*            disabled*/}
            {/*            required*/}
            {/*            value={removeVietnamese(values.name) || ""}*/}
            {/*            onChange={handleChange}*/}
            {/*        />*/}
            {/*      </Col>*/}
            {/*      <Col span={6}>*/}
            {/*        <Input*/}
            {/*            type="text"*/}
            {/*            name="Name"*/}
            {/*            id="name"*/}
            {/*            alt="id"*/}
            {/*            required*/}
            {/*            value={values.name || ""}*/}
            {/*            onChange={handleChange}*/}
            {/*        />*/}
            {/*      </Col>*/}
            {/*      <Col span={6}>*/}
            {/*        <Input*/}
            {/*            type="number"*/}
            {/*            value={values.value || ""}*/}
            {/*            name="Value"*/}
            {/*            id="value"*/}
            {/*            required*/}
            {/*            onChange={handleChange}*/}
            {/*        />*/}
            {/*      </Col>*/}
            {/*      <Col span={4}>*/}
            {/*        <CSS.ButtonContainer>*/}
            {/*          <Button name="submit" size="small" type="submit">*/}
            {/*            {t("Submit")}*/}
            {/*          </Button>*/}
            {/*        </CSS.ButtonContainer>*/}
            {/*      </Col>*/}
            {/*      </Row>*/}
            {/*    </CSS.FormGroup>*/}
            {/*  </CSS.Label>*/}
            <div>
            <Form
                name="basic"
                initialValues={{
                    remember: false,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item name="id">
                            <Input
                                type="text"
                                name="ID"
                                id="id"

                            />
                </Form.Item>
                <Form.Item name="name">
                            <Input
                                type="text"
                                name="Name"
                                id="name"
                            />
                </Form.Item>
                <Form.Item name="value">
                            <Input
                                type="number"
                                name="Value"
                                id="name"
                            />
                </Form.Item>

                <Form.Item>
                    <Button type="submit">Submit</Button>
                </Form.Item>
            </Form>
            </div>
            <TableX dataSource={menuBar} columns={columns}/>
        </div>
    );
};

export default Menu;
