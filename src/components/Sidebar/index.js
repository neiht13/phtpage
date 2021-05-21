import * as CSS from "./styles";
import {AppProfile} from "../../common/Profile";
import {Layout, Menu} from "antd";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import {SidebarStyle} from "./styles";
import RandomIcon from "../../common/Utilities/RandomIcon";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu, Item} = Menu;

const Sidebar = ({id, selectedMenu, setSelectedMenu, menu}) => {

    const renderSubItem = (sub, subId) => {
        return sub.map((item, id) => {
            return <Item key={subId+''+id}
                         onClick={()=>{
                             setSelectedMenu(item.url)
                         }}
            >{item.title}</Item>
        })
    }
    const renderItem = menu.map((item, id) => {
        return (
            <SubMenu key={id} title={item.title} icon={RandomIcon()}>
                {renderSubItem(item.sub, id)}
            </SubMenu>
        );
    });
    const gotoLogin = () => {

    }


    return (
        <SidebarStyle>
            <Sider>
                <AppProfile setSelectedMenu={setSelectedMenu}/>
                <Menu mode="inline">
                    {renderItem}
                </Menu>
            </Sider>
        </SidebarStyle>
    )
};


export default Sidebar;
