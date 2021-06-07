import {Layout, Menu, Breadcrumb, Empty} from 'antd';
import {BackTop} from 'antd';

import React, {lazy, useEffect, useMemo, useState} from "react";
import {Container} from "./styles";
import {AppProfile} from "../../common/Profile";
import Sidebar from "../../components/Sidebar";
import routes from "../../router/config";
import {Route, Switch} from "react-router-dom";


const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;
const LoginPage = lazy(() => import("../Login"));
const MenuPage = lazy(() => import("../Menu"));
const SystemPage = lazy(() => import("../System"));
const MessagePage = lazy(() => import("../Message"));
const FooterPage = lazy(() => import("../Footer"));
const CContainer = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const SiderDemo = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [content, setContent] = useState(null);

    const onCollapse = () => {
        setCollapsed(collapsed => !collapsed)
    };
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
                    url: "content"
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

    // useEffect(() => {
    //     console.log(selectedMenu);
    //     debugger;
    //     switch (selectedMenu) {
    //         case 'menu':
    //             setContent( <MenuPage/>);
    //             break;
    //         case 'header':
    //             setContent( <SystemPage/>);
    //             break;
    //         case 'footer':
    //             setContent( <FooterPage/>);
    //             break;
    //         case 'account':
    //             setContent( <MessagePage/>);
    //             break;
    //         case 'login':
    //             setContent( <LoginPage/>);
    //             break;
    //         default:
    //             setContent( <Empty description="Không có dữ liệu"/>)
    //     }
    // },[selectedMenu]);

    const sidebarr = useMemo(() => {
        return (
            <Sidebar collapsed={collapsed} onCollapse={onCollapse} menu={menu} setSelectedMenu={setSelectedMenu}/>
        )
    }, [selectedMenu]);
    return (
        <Container>
            <ScrollToTop/>
            <Layout style={{minHeight: '100vh'}}>
                {sidebarr}
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                        {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>User</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            {selectedMenu && <Switch>
                                <Route
                                    key={selectedMenu.component}
                                    path={selectedMenu.url}
                                    component={lazy(() => import(`../${selectedMenu.component}`))}
                                />

                            </Switch>}

                        </div>
                    </Content>
                    <Footer>Powered by VNPT Đồng Tháp</Footer>
                </Layout>
            </Layout>
        </Container>
    );
}


export default SiderDemo;