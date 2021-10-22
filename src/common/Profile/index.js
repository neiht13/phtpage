import React, {useContext, useState} from 'react';
import classNames from 'classnames';
import {CSSTransition} from 'react-transition-group';
import {Link, useHistory} from "react-router-dom";
import {LayoutProfile} from "./styles";
import {Layout, Menu, Breadcrumb} from 'antd';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import Icon from "../Icon";
import {UserContext} from "../../pages/Login/auth";

const {SubMenu} = Menu;

export const AppProfile = ({setSelectedMenu}) => {
    let history = useHistory();
    const [expanded, setExpanded] = useState(false);

    const { signOut } = useContext(UserContext);

    console.log(setSelectedMenu)
    const onClick = (event) => {
        setExpanded(prevState => !prevState);
        event.preventDefault();
    }

    const logOutAction = () => {
        localStorage.clear()
        signOut()
        history.push('/login')
    }

    return (
        <LayoutProfile>
            <div>
                <img className="avatar" src="img/images/em.jpg" alt="Profile"/>
                <div className="profile">
                    <Menu mode="inline">
                        <SubMenu key="sub1" icon={<Icon name="user-cog"/>} title="Phan Thien">
                            <Menu.Item key="3"><Link to={'auth'}>Account</Link></Menu.Item>
                            <Menu.Item key="4">Notifications</Menu.Item>
                            <Menu.Item key="5" onClick={logOutAction}><Link to={'/login'}>Logout</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>

            {/*<CSSTransition classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={expanded} unmountOnExit>*/}
            {/*    <ul className={classNames({ 'layout-profile-expanded': expanded })}>*/}
            {/*        <li><button type="button" className="p-link"><i className="pi pi-fw pi-user" /><span>Account</span></button></li>*/}
            {/*        <li><button type="button" className="p-link"><i className="pi pi-fw pi-inbox" /><span>Notifications</span><span className="menuitem-badge">2</span></button></li>*/}
            {/*        <li>*/}
            {/*            <Link to="/login">*/}
            {/*                <button type="button" className="p-link" onClick={logOutAction}><i className="pi pi-fw pi-power-off" /><span>Logout</span></button>*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</CSSTransition>*/}
        </LayoutProfile>
    );

}
