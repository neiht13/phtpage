import React, {lazy, Suspense, useContext, useEffect, useState} from "react";
import {Switch, Route, Redirect, useHistory} from "react-router-dom";
import routes from "./config";
import GlobalStyles from "../globalStyles";
import {Layout} from "antd";
import Sidebar from "../components/Sidebar";
import Menu from "./../content/menu.json";
import Login from "../pages/Login";
import Routes from "./router"
import {UserContext} from "../pages/Login/auth";
import Photo from "../pages/Test";
import ShortURL from "../pages/Url";

const {Header, Content, Footer} = Layout;

const Router = () => {
        const {currentUser} = useContext(UserContext);
        const [renderRoute, setRenderRoute] = useState(Routes(currentUser));
        return (
            <Suspense fallback={null}>
                <GlobalStyles primaryFont="Helvetica" primaryColor="#005aaa"/>
                {currentUser ?
                    <Layout style={{minHeight: '100vh'}}>
                        <Sidebar menu={Menu.data}/>
                        <Layout className="site-layout">
                            <Header className="site-layout-background" style={{padding: 0, margin: "0 0 16px 16px"}}/>
                            <Content style={{margin: '0 16px'}}>
                                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                                    {renderRoute}
                                </div>
                            </Content>
                            <Footer>Powered by VNPT Đồng Tháp</Footer>
                        </Layout>
                    </Layout>
                    :
                    <Login/>
                }
            </Suspense>
        );
    }
;

export default (Router);
