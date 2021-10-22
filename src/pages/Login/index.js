import {Form, Checkbox, Card} from 'antd';
import {LoginStyle} from "./styles";
import {lazy, useContext, useEffect, useState} from "react";
import Notification from "../../common/Form/Notification";
import {Redirect, useHistory} from "react-router-dom";
import Input from "../../common/Input";
import firebase from "firebase/compat";
import firebaseConfig from "../../service/firebase-config";
import {UserContext} from "./auth";
const Button = lazy(() => import("../../common/Button"));

const Login = () => {
    const [hasAccount, setHasAccount] = useState(true);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [pwd, setPwd] = useState();
    const onValuesChange = (values) => {
        console.log('values change:', values);
        values.username && setUsername(values.username);
        values.password && setPwd(values.password);

    };
    const { signIn } = useContext(UserContext);
    const { signUp } = useContext(UserContext);

    const onFinish = (values) => {
        console.log('Success:', values);

        hasAccount
            ?
            signIn({email: values.username, pwd: values.password}).then(() => setLoginSuccess(true))
            :
            signUp({email: values.username, pwd: values.password});
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        console.log('Failed:', errorInfo.errorFields);
        if (errorInfo && errorInfo.errorFields) {
            errorInfo.errorFields.forEach(error => {
                Notification('error', error.name, error.errors);

            })
        }
    };
    const renderLoginSuccess = () => {

        return loginSuccess && <Redirect to='/'/>
    }

    return (
        <LoginStyle>
            {renderLoginSuccess()}
            <Card>
                <Form
                    name="basic"
                    initialValues={{
                        remember: false,
                        username: "thien@gmail.com",
                        password: 123456,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    onValuesChange={onValuesChange}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên tài khoản!',
                            },
                        ]}
                    >
                        <Input
                            name="User"
                            id="username"
                            label="Username"
                            type="email"
                        />
                    </Form.Item>
                    <br/>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                    >
                        <Input
                            name="Password"
                            label="Password"
                            id="password"
                        />
                    </Form.Item>
                    <br/>


                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="submit">{hasAccount ? "Login" : "Sign Up"}</Button>
                    </Form.Item>
                    {hasAccount && <a onClick={e => setHasAccount(hasAccount => !hasAccount)}>Don't have account?</a>}
                </Form>
            </Card>
        </LoginStyle>
    );
};

export default Login;