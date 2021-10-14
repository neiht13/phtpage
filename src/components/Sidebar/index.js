import * as CSS from "./styles";
import {AppProfile} from "../../common/Profile";
import {Layout, Menu} from "antd";
import React, {useState} from "react";
import {SidebarStyle} from "./styles";
import RandomIcon from "../../common/Utilities/RandomIcon";
import {Link} from 'react-router-dom';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu, Item} = Menu;

const Sidebar = ({id, selectedMenu, setSelectedMenu, menu}) => {

    const [openMenu, setOpenMenu] = useState();
    const renderSubItem = (sub, subId) => {
        return sub.map((item, id) => {
            return <Item key={subId+''+id}
                         // onClick={()=>{
                         //     setSelectedMenu(item)
                         // }}
            ><Link to={item.url}>{item.title}</Link></Item>
        })
    }
    const renderItem = menu.map((item, id) => {
        return (
            <SubMenu key={id} title={item.title} icon={RandomIcon()}>
                {renderSubItem(item.sub, id)}
            </SubMenu>
        );
    });
    const onOpenChange = (e) => {
        console.log(e)
        setOpenMenu(e[e.length -1]);
    }


    return (
        <SidebarStyle>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <AppProfile setSelectedMenu={setSelectedMenu}/>
                <Menu
                    defaultOpenKeys={[openMenu]}
                    onOpenChange={onOpenChange}
                    mode="inline">

                    {renderItem}
                </Menu>
            </Sider>
        </SidebarStyle>
    )
};


export default Sidebar;
