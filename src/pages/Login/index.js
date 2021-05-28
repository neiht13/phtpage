import {Form, Input, Checkbox, Card} from 'antd';
import {LoginStyle} from "./styles";
import {lazy} from "react";
import Notification from "../../common/Form/Notification";
import {useHistory} from "react-router-dom";
const Button = lazy(() => import("../../common/Button"));

const Login = () => {
    const history = useHistory();

    const onFinish = (values) => {
        console.log('Success:', values);
        history.push("/");
        localStorage.setItem("userLogin", JSON.stringify({username: values.username, role: values.remember ? 'admin' : 'user'}));
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
        <LoginStyle>
            <Card>
                <Form
                    name="basic"
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên tài khoản!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Card>
        </LoginStyle>
    );
};

export default Login;