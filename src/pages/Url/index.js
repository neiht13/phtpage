import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Upload, Modal, Card, Form, Checkbox, Row, Col} from 'antd';
import {lazy} from "react";
import Input from "../../common/Input";
import QRCode from "../../common/Utilities/QR/qr";
import Notification from "../../common/Form/Notification";
import RandomString from "../../common/Utilities/RandomString";

const Button = lazy(() => import("../../common/Button"));
// const Checkbox = import("../../common/Checkbox");

const ShortURL = () => {
    const logoDefault = "img/images/logo_vnpt_2.png";
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState();
    const [logo, setLogo] = useState("");
    const [colorDefault, setColorDefault] = useState(false);
    const [noLogo, setNoLogo] = useState("");
    const [shortChange, setShortChange] = useState(false);
    const onValuesChange = (values) => {
        console.log(values)
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
    const shortUrlAction = () => {
        const baseURL = "https://url.vnptdongthap.com.vn/"
        let randomString = RandomString(8);
        setShortUrl(baseURL + randomString);
    }

    function copyAction() {
        const copyText = document.getElementById("shortURL");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
    }
    function shortChangeAction(e) {
        setShortChange(true);
        setShortUrl(e && e.value && e.value.target);
    }

    const onFinish = (values) => {
        console.log('values change:', values);
        setUrl(values.url);
        setLogo(values.logo ? values.logo : logoDefault);
        setColorDefault(values.basic);
        setNoLogo(values.nologo);
        shortUrlAction();
        setShortChange(false);
    };

    const onFinishFailed = (errorInfo) => {

    };
    return (
        <div>
            <Row justify="space-between">
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

                            <Row justify="space-between">
                                <Form.Item name="basic" valuePropName="checked">
                                    <Checkbox>Basic Color</Checkbox>
                                </Form.Item>
                                <Form.Item name="nologo" valuePropName="checked">
                                    <Checkbox>Hidden Logo</Checkbox>
                                </Form.Item>
                                <div/>
                            </Row>
                            <Form.Item>
                                <Button type="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={12}>
                    <Row wrap={false}>
                        <Form>
                            <Form.Item>
                                <Input
                                    name="Short"
                                    id="shortURL"
                                    label="Short URL"
                                    width="300px"
                                    value={shortUrl}
                                    onChange={e => shortChangeAction(e)}
                                />
                            </Form.Item>
                        </Form>
                        {shortChange && <Button width='100px' onClick={copyAction}>Save</Button>}
                        &nbsp;&nbsp;&nbsp;
                        <Button width='100px' onClick={copyAction}>Copy</Button>
                    </Row>
                    <Row>
                        <QRCode
                            value={url}
                            size={200}
                            bgColor={"#ffffff"}
                            fgColor={colorDefault ? "#000000" : "#005aaa"}
                            level={"H"}
                            includeMargin={false}
                            renderAs={"canvas"}
                            imageSettings={!noLogo && {
                                src: logo,
                                x: null,
                                y: null,
                                height: 40,
                                width: 40,
                                excavate: true,
                            }}
                        />
                    </Row>
                    <Button width="200px" onClick={downloadQR}>Download</Button>
                </Col>
            </Row>
            <div>

            </div>
        </div>
    );

}
export default ShortURL;