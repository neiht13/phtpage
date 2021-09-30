import {lazy, useEffect, useState} from "react";
import {Row, Col, Form, Checkbox, Popconfirm} from "antd";
import Zoom from "react-reveal/Zoom";
import {ErrorMessage, Formik, useFormik} from 'formik';

import axios from "axios";
import * as CSS from "./styles";
import removeVietnamese from "../../common/Utilities/ConvertViString";
import useForm from "../../common/Form/useForm";
import * as instanceApi from "../../service/service"
import Notification from "../../common/Form/Notification";
import Popup from "../../common/Popup";

const TableX = lazy(() => import("../../common/Table"));
const Block = lazy(() => import("../../components/Block"));
const Input = lazy(() => import("../../common/Input"));
const Button = lazy(() => import("../../common/Button"));
const TextArea = lazy(() => import("../../common/TextArea"));

const NewsType = ({title, content, id, t}) => {
    const {
        values,
        setValues,
        errors,
        handleChange,
        handleSubmit,
        shouldSubmit,
        setShouldSubmit,
        setUrlForm,
    } = useForm();
    const [isNew, setIsNew] = useState(true);
    const [menuBar, setMenuBar] = useState([]);
    const formik = useFormik({
        initialValues: {id: '', newsType: '', value: ''},

        validate: values => {
            const errors = {};
            if (!values.id) {
                errors.id = 'Vui lòng nhập ID.';
            }
            if (!values.newsType) {
                errors.newsType = 'Vui lòng nhập Loại tin tức.';
            }
            if (!values.value) {
                errors.value = 'Vui lòng nhập Giá trị.';
            }
            return errors;
        },
        onSubmit: (values, {setSubmitting}) => {
            onSubmit(values);
        }
    });
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = () => {
        instanceApi.fetch('menu_bar').then(data => {
            console.log("data", data)
            setMenuBar(data)
        });
    }

    const deleteAction = (row) => {
        instanceApi.remove('menu_bar', row.target.id
        ).then(data => {
            onSuccess();
        }).catch(err => onFinishFailed(err));
    }

    const editAction = (row) => {
        console.log('row', row)
        setIsNew(false);
        formik.setValues(
            {
                id: row.id,
                newsType: row.name,
                value: row.value,
            }
        )
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Loại tin tức',
            dataIndex: 'name',
            key: 'name',
            sorter: true

        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'vallue',
            sorter: true

        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            render: (i, row) =>
                <span>
                    <Popup
                        title="Are you sure to delete this task?"
                        onConfirm={deleteAction}
                        onCancel={() =>{}}
                        okText="Yes"
                        cancelText="No"
                        item={<i className={`fas fa-times`} style={{color: 'tomato', cursor: 'pointer'}} id={i}/>}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <i className={`fas fa-pencil-alt`} style={{cursor: 'pointer'}}
                       id={i} onClick={(e) => editAction(row)}/>
          </span>
        },
    ];

    const onSuccess = () => {
        fetchMenu();
        Notification('success', 'Thành công', 'Thêm bản ghi thành công.');
        formik.resetForm();
    }
    const onSubmit = (values) => {
        console.log(values);
        if (isNew) {
            instanceApi.create('menu_bar', values).then(data => {
                onSuccess();
            }).catch(err => onFinishFailed(err));
        } else {
            instanceApi.update('news', values).then(data => {
                onSuccess();
            }).catch(err => onFinishFailed(err));
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo.errorFields);
        if ((errorInfo && errorInfo.errorFields)) {
            errorInfo.errorFields.forEach(error => {
                Notification('error', error.name, error.errors);

            })
        }
        if (errorInfo && errorInfo.response && errorInfo.response.status !== '200') {
            Notification('error', errorInfo.response.status, errorInfo.response.statusText);

        }
    };

    return (
        <div>
            <CSS.FormX>
                <form onSubmit={formik.handleSubmit}>
                    <Row type="flex" justify="space-between" ali>
                        <Col span={6}>
                            <Input
                                type="text"
                                name="id"
                                label="ID"
                                onChange={formik.handleChange}
                                value={formik.values.id}
                                hasError={formik.touched.id && formik.errors.id}
                            />
                        </Col>
                        <Col span={6}>
                            <Input
                                type="text"
                                name="newsType"
                                label="Loại tin tức"
                                onChange={formik.handleChange}
                                value={formik.values.newsType}
                                hasError={formik.touched.newsType && formik.errors.newsType}
                            />
                        </Col>
                        <Col span={6}>
                            <Input
                                type="number"
                                name="value"
                                label="Giá trị"
                                onChange={formik.handleChange}
                                value={formik.values.value}
                                hasError={formik.touched.value && formik.errors.value}
                            />
                        </Col>
                        <Col span={6}>
                            <Button position="flex-end" type="submit" disabled={formik.isSubmitting}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </form>
            </CSS.FormX>
            <br/>
            <TableX dataSource={menuBar} columns={columns}/>
        </div>
    );
};

export default NewsType;
