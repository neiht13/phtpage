import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Upload, Modal, Card, Form, Checkbox, Row} from 'antd';
import {lazy} from "react";
import Input from "../../common/Input";
import QRCode from "qrcode.react";
import Notification from "../../common/Form/Notification";

const Button = lazy(() => import("../../common/Button"));

const ShortURL = () => {
    const logoDefault = "https://vnpt.com.vn/Design/images/logo-vnpt-app.jpg";
    const [url, setUrl] = useState("");
    const [logo, setLogo] = useState("");
    const onValuesChange = (values) => {
    };

    const onFinish = (values) => {
        console.log('values change:', values);
        setUrl(values.url);
        setLogo(values.logo ? values.logo : logoDefault);
    };

    const onFinishFailed = (errorInfo) => {

    };
    return (
        <div>
            <Row>
                <Card>
                    <Form
                        name="basic"
                        initialValues={{
                            remember: false,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        onValuesChange={onValuesChange}
                    >
                        <Form.Item
                            name="url"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập đường dẫn!',
                                },
                            ]}
                        >
                            <Input
                                name="url"
                                id="url"
                                label="URL"
                            />
                        </Form.Item>
                        <br/>
                        <Form.Item
                            name="logo"
                            rules={[
                                {
                                    required: false,
                                    message: 'Vui lòng nhập logo!',
                                },
                            ]}
                        >
                            <Input
                                name="Logo"
                                id="logo"
                                label="Logo"
                                placeholder={logo}
                            />
                        </Form.Item>
                        <br/>


                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Card>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <QRCode
                    value={url}
                    size={300}
                    bgColor={"#ffffff"}
                    fgColor={"#005aaa"}
                    level={"L"}
                    includeMargin={false}
                    renderAs={"canvas"}
                    imageSettings={{
                        src: logo,
                        x: null,
                        y: null,
                        height: 50,
                        width: 50,
                        excavate: true,
                    }}
                />
            </Row>
            <div>

            </div>
        </div>
    );

}
export default ShortURL;