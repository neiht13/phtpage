import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./config";
import GlobalStyles from "../globalStyles";
import {Layout} from "antd";
import Sidebar from "../components/Sidebar";
const {Header, Content, Footer, Sider} = Layout;


const Router = () => {
    const menu = [
        {
            title: "Quản trị tài khoản",
            url: "",
            sub: [
                {
                    title: "Tài khoản",
                    url: "account",
                },
                {
                    title: "Phân quyền",
                    url: "role",
                },
            ]
        },
        {
            title: "Quản lý hệ thống",
            url: "",
            sub: [
                {
                    title: "Menu",
                    url: "menu",
                },

                {
                    title: "Phân quyền Menu",
                    url: "menu_role",
                },
            ]
        },
        {
            title: "Quản lý danh mục bài viết",
            url: "",
            sub: [
                {
                    title: "Loại tin tức",
                    url: ""
                },
                {
                    title: "Tin tức",
                    url: ""
                },
                {
                    title: "Hình ảnh",
                    url: ""
                },
            ]
        },
        {
            title: "Quản lý tham số cấu hình",
            url: "",
            sub: [
                {
                    title: "Mô tả",
                    url: ""
                },
                {
                    title: "Code",
                    url: "",
                    icon: ""
                },
            ]
        },
        {
            title: "Quản lý thông tin đơn vị",
            url: "",
            sub: [
                {
                    title: "Liên hệ",
                    url: "",
                },
                {
                    title: "Giới thiệu",
                    url: "",

                },
                {
                    title: "Địa điểm",
                    url: "",

                },
                {
                    title: "Email",
                    url: "",
                    icon: ""
                },
                {
                    title: "Liên hệ",
                    url: "",
                },
                {
                    title: "Số điện thoại",
                    url: "",
                },
                {
                    title: "Banner",
                    url: "",
                },
                {
                    title: "Logo",
                    url: "",
                },
            ]
        },

        {
            title: "Quản lý bố cục trang",
            url: "",
            sub: [
                {
                    title: "Đầu trang",
                    url: "header",
                },
                {
                    title: "Chân trang",
                    url: "footer",
                    component: "FirstAdmin/Footer",
                },
            ]
        },
    ]

    return (
    <Suspense fallback={null}>
      <GlobalStyles primaryFont="Helvetica" primaryColor="#005aaa"/>
      {/*<Header id="header"/>*/}
        <Layout style={{minHeight: '100vh'}}>
            <Sidebar menu={menu}/>
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
                                        component={lazy(() => import(`../pages/${routeItem.component}`))}
                                    />
                                );
                            })}
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
