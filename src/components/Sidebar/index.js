import * as CSS from "./styles";
import {AppProfile} from "../../common/Profile";
import {Layout, Menu} from "antd";
import React, {useContext, useState} from "react";
import {SidebarStyle} from "./styles";
import RandomIcon from "../../common/Utilities/RandomIcon";
import {Link} from 'react-router-dom';
import {UserContext} from "../../pages/Login/auth";

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

    const { currentUser } = useContext(UserContext);

    console.log("user context: ", currentUser)

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
                {currentUser && <Menu
                    defaultOpenKeys={[openMenu]}
                    onOpenChange={onOpenChange}
                    mode="inline">

                    {renderItem}
                </Menu>}
            </Sider>
        </SidebarStyle>
    )
};


export default Sidebar;
