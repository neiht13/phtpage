import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Upload, Modal, Card, Form, Checkbox, Row, Col} from 'antd';
import {lazy} from "react";
import Input from "../../common/Input";
import QRCode from "../../common/Utilities/QR/qr";
import Notification from "../../common/Form/Notification";

const Button = lazy(() => import("../../common/Button"));

const ShortURL = () => {
    const logoDefault = "img/images/logo_vnpt_2.png";
    const [url, setUrl] = useState("");
    const [logo, setLogo] = useState("");
    const [color, setColor] = useState(false);
    const [qr, setQr] = useState("");
    const onValuesChange = (values) => {
    };
    const downloadQR = () => {
        const canvas = document.getElementsByTagName("canvas")[0];

        if (canvas) {
            const pngUrl = canvas
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream");

            const downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = "qr.png";

            document.body.appendChild(downloadLink);

            downloadLink.click();

            document.body.removeChild(downloadLink);
        } else {
            console.log("Could not find QR code element");
        }
    };
    const onFinish = (values) => {
        console.log('values change:', values);
        setUrl(values.url);
        setLogo(values.logo ? values.logo : logoDefault);
        setColor(values.basic);
    };

    const onFinishFailed = (errorInfo) => {

    };
    return (
        <div>
            <Row>
                <Col span={8}>
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


                        <Form.Item name="basic" valuePropName="checked">
                            <Checkbox>Basic default</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Card>
                </Col>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div id='qrcode'>
                <QRCode
                    value={url}
                    size={300}
                    bgColor={"#ffffff"}
                    fgColor={"#005aaa"}
                    level={"Q"}
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
                    <Button onClick={downloadQR}>Download</Button>
                </div>
            </Row>
            <div>

            </div>
        </div>
    );

}
export default ShortURL;