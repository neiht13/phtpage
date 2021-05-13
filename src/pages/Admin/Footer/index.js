import {lazy, useEffect, useState} from "react";
import {Row, Col} from "antd";
import Zoom from "react-reveal/Zoom";
import {withTranslation} from "react-i18next";

import axios from "axios";
import * as CSS from "./styles";
import removeVietnamese from "../../../common/Utilities/ConvertViString";
import useForm from "../../../common/Form/useForm";
import TableX from "../../../common/Table";

const Block = lazy(() => import("../../../components/Block"));
const Input = lazy(() => import("../../../common/Input"));
const Button = lazy(() => import("../../../common/Button"));
const TextArea = lazy(() => import("../../../common/TextArea"));

const ContentBlock = ({title, content, id, t}) => {
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
    const [menuBar, setMenuBar] = useState(null);
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        fetchMenu();
        setUrlForm("http://localhost:5000/footer/new");
        if (shouldSubmit) {
            setShouldSubmit(false);
            setShowForm(false)
        }
    }, [shouldSubmit])
    useEffect(() => {
        fetchMenu();
        if (!isNew) {
            setUrlForm("http://localhost:5000/footer/update");
        }
    }, [isNew, shouldSubmit])
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
        axios.get('http://localhost:5000/footer').then(res => {
            setMenuBar(res.data)
        })
    }

    const deleteAction = (row) => {
        axios.post('http://localhost:5000/footer/delete', {
            id: row.target.id
        }).then(res => {
            fetchMenu()
        })
    }

    const editAction = (row) => {
        console.log(row);
        setValues(row);
        setIsNew(false);
        setShowForm(true)
    }

    const columns = [
        {
            title: 'Mục chính',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Mục phụ 1',
            dataIndex: 'sub_1',
            key: 'sub_1',
        },
        {
            title: 'Nội dung mục phụ 1',
            dataIndex: 'sub_1_content',
            key: 'sub_1_content',
        },
        {
            title: 'Mục phụ 2',
            dataIndex: 'sub_2',
            key: 'sub_2',
        },
        {
            title: 'Nội dung mục phụ 2',
            dataIndex: 'sub_2_content',
            key: 'sub_2_content',
        },
        {
            title: 'Mục phụ 3',
            dataIndex: 'sub_3',
            key: 'sub_3',
        },
        {
            title: 'Nội dung mục phụ 3',
            dataIndex: 'sub_3_content',
            key: 'sub_3_content',
        },
        {
            title: 'Mục phụ 4',
            dataIndex: 'sub_4',
            key: 'sub_4',
        },
        {
            title: 'Nội dung mục phụ 4',
            dataIndex: 'sub_4_content',
            key: 'sub_4_content',
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
            {!showForm &&<Button onClick={() => setShowForm(true)}>Thêm mới</Button>}
            {showForm && <CSS.Label>
                <CSS.FormGroup autoComplete="off" onSubmit={handleSubmit}>
                    <Row type="flex" align="middle">
                        <Col span={16}>
                            <Input
                                type="text"
                                name="Mục chính"
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
                                name="Mục phụ 1"
                                id="sub_1"
                                required
                                value={values.sub_1 || ""}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col span={16}>
                            <Input
                                type="text"
                                name="Nội dung mục phụ 1"
                                id="sub_1_content"

                                value={values.sub_1_content || ""}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-between" align="middle">
                        <Col span={8}>
                            <Input
                                type="text"
                                name="Mục phụ 2"
                                id="sub_2"
                                required
                                value={values.sub_2 || ""}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col span={16}>
                            <Input
                                type="text"
                                name="Nội dung mục phụ 2"
                                id="sub_2_content"

                                value={values.sub_2_content || ""}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-between" align="middle">
                        <Col span={8}>
                            <Input
                                type="text"
                                name="Mục phụ 3"
                                id="sub_3"
                                required
                                value={values.sub_3 || ""}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col span={16}>
                            <Input
                                type="text"
                                name="Nội dung mục phụ 3"
                                id="sub_3_content"
                                value={values.sub_3_content || ""}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-between" align="middle">
                        <Col span={8}>
                            <Input
                                type="text"
                                name="Mục phụ 4"
                                id="sub_4"
                                required
                                value={values.sub_4 || ""}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col span={16}>
                            <Input
                                type="text"
                                name="Nội dung mục phụ 4"
                                id="sub_4_content"
                                value={values.sub_4_content || ""}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <CSS.ButtonContainer>
                        <Button name="submit">
                            {t("Submit")}
                        </Button>
                    </CSS.ButtonContainer>
                </CSS.FormGroup>
            </CSS.Label>
            }
            <hr/>
            <TableX dataSource={menuBar} columns={columns}/>
        </div>
    );
};

export default withTranslation()(ContentBlock);
