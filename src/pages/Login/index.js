import {Form, Checkbox, Card} from 'antd';
import {LoginStyle} from "./styles";
import {lazy, useEffect, useState} from "react";
import Notification from "../../common/Form/Notification";
import {useHistory} from "react-router-dom";
import Input from "../../common/Input";
import firebase from "firebase/compat";
import firebaseConfig from "../../service/firebase-config";
const Button = lazy(() => import("../../common/Button"));

const Login = () => {
    const history = useHistory();
    const [hasAccount, setHasAccount] = useState(true);
    const [username, setUsername] = useState();
    const [pwd, setPwd] = useState();
    const onValuesChange = (values) => {
        console.log('values change:', values);
        values.username && setUsername(values.username);
        values.password && setPwd(values.password);

    };
    const firebaseInstance = firebase.initializeApp(firebaseConfig)

    const signUp = async (event) => {
        event.preventDefault();
        try {
            if (firebaseInstance) {
                const user = await firebaseInstance.auth().createUserWithEmailAndPassword(username, pwd)
                console.log("user", user)
                alert(`Welcome ${username}!`);
            }
        } catch (error) {
            console.log("error", error);
            alert(error.message);
        }
    };

    const signIn = async (event) => {
        event.preventDefault();

        try {
            if (firebaseInstance) {
                const user = await firebaseInstance
                    .auth()
                    .signInWithEmailAndPassword(username, pwd);
                console.log("user", user);
                alert("Welcome back! " + username);
            }
        } catch (error) {
            console.log("error", error);
            alert(error.message);

        }
    };

    const [currentUser, setCurrentUser] = useState(null);

// Listen to onAuthStateChanged
    useEffect(() => {
        if (firebaseInstance) {
            firebaseInstance.auth().onAuthStateChanged((authUser) => {
                if (authUser) {
                    setCurrentUser(authUser.email);
                } else {
                    setCurrentUser(null);
                }
            });
        }
    }, []);

    const onFinish = (values) => {
        console.log('Success:', values);
        history.push("/");
        localStorage.setItem("userLogin", JSON.stringify({
            username: values.username,
            role: values.remember ? 'admin' : 'user'
        }));
        signUp(values.username, values.password);
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
                    {hasAccount && <Form.Item>
                        <Button onClick={signIn}>Submit</Button>
                    </Form.Item>}
                    {hasAccount && <a onClick={e => setHasAccount(hasAccount => !hasAccount)}>Don't have account?</a>}
                    {!hasAccount && <Form.Item>
                        <Button onClick={signUp}>Sign Up</Button>
                    </Form.Item>}
                </Form>
            </Card>
        </LoginStyle>
    );
};

export default Login;