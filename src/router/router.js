import React, {lazy} from "react";

import {
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Login from "./../pages/Login";
import Photo from "./../pages/Test";
const Message = lazy(() => import("./../pages/Message"));
const Menu = lazy(() => import("./../pages/Menu"));

const System = lazy(() => import("./../pages/System"));
const BlockContent = lazy(() => import("./../pages/BlockContent"));
const Footer = lazy(() => import("./../pages/Footer"));
const Home = lazy(() => import("./../pages/Home"));
const NotFound = lazy(() => import("./../pages/NotFound"));

const authUser = (Component, role) => () => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    console.log('role', role);
    return user && user.role === role  ? (
        <Component/>
    ) : (
        <Redirect to="/login" />
    );

};
const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}>
            <Redirect to="/home" />
        </Route>
        <Route path="/login"><Login/></Route>
        <Route path="/message" component={authUser(Message, 'user')}/>
        <Route path="/menu" component={authUser(Menu, 'admin')}/>
        <Route path="/account" component={authUser(System, 'admin')}/>
        <Route path="/content" component={authUser(BlockContent, 'user')}/>
        <Route path="/footer" component={authUser(Footer, 'user')}/>
        <Route path="/photo" component={Photo}/>
        <Route path="*" component={NotFound}/>
    </Switch>
);

export default Routes;
