import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Upload, Modal, Card, Form, Checkbox, Row, Col, Radio} from 'antd';
import {lazy} from "react";
import Input from "../../common/Input";
import QRCode from "../../common/Utilities/QR/qr";
import Notification from "../../common/Form/Notification";
import RandomString from "../../common/Utilities/RandomString";

const Button = lazy(() => import("../../common/Button"));
import {CheckboxStyle} from "../../common/Checkbox/styles";
import * as CSS from "./style";
const {getCities} = require("../../service/firebase-server");
const ShortURL = () => {
    const getData = () => {
        getCities().then(result => {
            console.log('data:', result[0]);
        });
    };



    const logoDefault = "img/images/logo_vnpt_2.png";
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState();
    const [randomString, setRandomString] = useState();
    const [logo, setLogo] = useState("");
    const [colorDefault, setColorDefault] = useState(false);
    const [noLogo, setNoLogo] = useState("");
    const [shortChange, setShortChange] = useState(false);
    const [includeMargin, setIncludeMargin] = useState(true);
    const [qrStyle, setQrStyle] = useState('vnpt');
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
            downloadLink.download = randomString + ".png";

            document.body.appendChild(downloadLink);

            downloadLink.click();

            document.body.removeChild(downloadLink);
        } else {
            console.log("Could not find QR code element");
        }
    };
    const shortUrlAction = () => {
        const baseURL = "https://url.vnptdongthap.com.vn/"
        setRandomString(RandomString(8));
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
        getData();
        console.log('values change:', values);
        setUrl(values.url);
        setLogo(values.logo ? values.logo : logoDefault);
        setColorDefault(values.basic);
        setNoLogo(values.nologo);
        shortUrlAction();
        setShortChange(false);
        setIncludeMargin(values.margin);
    };

    const onFinishFailed = (errorInfo) => {

    };
    return (
        <div>
            <Row justify="space-between">
                <Col span={8}>
                    <CSS.Card>
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

                            <Row justify="space-between" wrap={false}>
                                <Form.Item name="basic" valuePropName="checked">
                                    <CheckboxStyle><Checkbox>Màu cơ bản</Checkbox></CheckboxStyle>
                                </Form.Item>
                                <Form.Item name="nologo" valuePropName="checked">
                                    <CheckboxStyle><Checkbox>Ẩn logo</Checkbox></CheckboxStyle>
                                </Form.Item>
                                <Form.Item name="margin" valuePropName="checked">
                                    <CheckboxStyle><Checkbox checked={includeMargin} onChange={e =>setIncludeMargin(!includeMargin)}>Viền</Checkbox></CheckboxStyle>
                                </Form.Item>

                            </Row>
                            <Row justify="space-between" wrap={false}>
                                <Radio.Group onChange={e=> setQrStyle(e.target.value)} value={qrStyle}>
                                    <Radio value="basic">Cơ bản</Radio>
                                    <Radio value="circle">Chấm tròn</Radio>
                                    <Radio value="vnpt">VNPT</Radio>
                                </Radio.Group>

                            </Row>
                            <Form.Item>
                                <Button type="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                    </CSS.Card>
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
                        <CSS.Card2 onClick={downloadQR}>
                            <Card>
                            <QRCode
                                value={url}
                                size={500}
                                bgColor={"#ffffff"}
                                fgColor={colorDefault ? "#000000" : "#005aaa"}
                                level={"H"}
                                qrStyle={qrStyle}
                                includeMargin={includeMargin}
                                renderAs={"canvas"}
                                imageSettings={!noLogo && {
                                    src: logo,
                                    x: null,
                                    y: null,
                                    height: 100,
                                    width: 100,
                                    excavate: true,
                                }}
                            />
                            </Card>
                        </CSS.Card2>
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