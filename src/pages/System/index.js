import {lazy, useEffect, useState} from "react";
import {Row, Col} from "antd";

import axios from "axios";
import * as CSS from "./styles";
import removeVietnamese from "../../common/Utilities/ConvertViString";
import useForm from "../../common/Form/useForm";


const TableX = lazy(() => import("../../common/Table"));
const Block = lazy(() => import("../../components/Block"));
const Input = lazy(() => import("../../common/Input"));
const Button = lazy(() => import("../../common/Button"));
const TextArea = lazy(() => import("../../common/TextArea"));

const Contact = ({title, content, id, t}) => {
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
    useEffect(() => {
        fetchMenu();
        setUrlForm("http://localhost:5000/system/update");
        if (shouldSubmit) {
            setShouldSubmit(false);
        }
    }, [shouldSubmit])
    const fetchMenu = () => {
        axios.get('http://localhost:5000/system').then(res => {
            setValues(res.data[0])
        })
    }


    const optionsFont = [
        {label: "Segoe UI", value: "Segoe UI"},
        {label: "Helvetica", value: "Helvetica"},
        {label: "Calibri", value: "Calibri"},
        {label: "Tahoma", value: "Tahoma"},
        {label: "Times New Roman", value: "Times New Roman"},
        {label: "Arial", value: "Arial"},
    ]
    const fontOptionTemplate = (option) => {
        return (
            <span style={{fontFamily: option.value}}>{option.label}</span>
        );
    }

    return (
        <div>
            {/*<Col lg={12} md={11} sm={24}>*/}
            {/*  <Footer padding={true} title={title} content={content} />*/}
            {/*</Col>*/}
            <CSS.Label>
                <CSS.FormGroup autoComplete="off" onSubmit={handleSubmit}>

            <Row>
                <Col span={4}>
                    <label>Màu sắc chủ đạo</label> &nbsp;&nbsp;&nbsp;
                </Col> <Col>
            </Col>
                <Col span={6}>
                    <Input
                        type="text"
                        id="primary_color"
                        onChange={handleChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                    <label>Màu sắc font chữ</label> &nbsp;&nbsp;&nbsp;
                </Col>
                <Col>
                </Col>
                <Col span={6}>
                    <Input
                        type="text"
                        id="primary_font_color"
                        onChange={handleChange}
                    />
                </Col>
            </Row>

            <Row>
                <Col span={4}>
                    <label>Font chữ</label> &nbsp;&nbsp;&nbsp;
                </Col>
                <Col span={6}>

                </Col>
            </Row>
            <CSS.ButtonContainer>
                <Button name="submit">
                    {t("Submit")}
                </Button>
            </CSS.ButtonContainer>
                </CSS.FormGroup>
            </CSS.Label>
            <hr/>
        </div>
    );
};

export default (Contact);
