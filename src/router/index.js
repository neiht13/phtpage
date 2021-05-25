import React, { lazy, Suspense } from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import routes from "./config";
import GlobalStyles from "../globalStyles";
import {Layout} from "antd";
import Sidebar from "../components/Sidebar";
import Menu from "./../content/menu.json";
import Login from "../pages/Login";

const {Header, Content, Footer, Sider} = Layout;

const Router = () => {

    const authUser = (Component) => () => {
        debugger;
        return localStorage.getItem("userLogin") ? (
            <Component />
        ) : (
            <Redirect to="/login" />
        );
    };
    return (
    <Suspense fallback={null}>
      <GlobalStyles primaryFont="Helvetica" primaryColor="#005aaa"/>
      {/*<Header id="header"/>*/}
        <Layout style={{minHeight: '100vh'}}>
            <Sidebar menu={Menu.data}/>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}/>
                <Content style={{margin: '0 16px'}}>
                    {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                    {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>User</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Switch>
                            {routes.map((routeItem) => {
                                return (
                                    <Route
                                        key={routeItem.component}
                                        path={routeItem.path}
                                        exact={routeItem.exact}
                                        component={authUser(lazy(() => import(`../pages/${routeItem.component}`)))}
                                    />
                                );
                            })}
                            <Route
                                key={'login'}
                                path={'/login'}
                                component={Login}
                            />
                        </Switch>

                    </div>
                </Content>
                <Footer>Powered by VNPT Đồng Tháp</Footer>
            </Layout>
        </Layout>
    </Suspense>
  );
};

export default Router;
