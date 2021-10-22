import React, {lazy, useContext} from "react";

import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import Login from "./../pages/Login";
import Photo from "./../pages/Test";
import ShortURL from "./../pages/Url";
import {UserContext} from "../pages/Login/auth";
const Message = lazy(() => import("./../pages/Message"));
const Menu = lazy(() => import("./../pages/Menu"));

const System = lazy(() => import("./../pages/System"));
const BlockContent = lazy(() => import("./../pages/BlockContent"));
const Footer = lazy(() => import("./../pages/Footer"));
const Home = lazy(() => import("./../pages/Home"));
const NotFound = lazy(() => import("./../pages/NotFound"));
const NewsType = lazy(() => import("./../pages/NewsType"));



const Routes = (currentUser) => {
    const authUser = (Component, path) => () => {
        return <Component/>
    };

    return (
        <Switch>
            <Route exact path="/" component={Home}>
                <Redirect to="/url"/>
            </Route>
            <Route path="/message" component={authUser(Message)}/>
            <Route path="/menu" component={authUser(Menu, "/menu")}/>
            <Route path="/account" component={authUser(System, 'admin')}/>
            <Route path="/content" component={authUser(BlockContent, 'user')}/>
            <Route path="/footer" component={authUser(Footer, 'user')}/>
            <Route path="/news-type" component={authUser(NewsType, 'user')}/>
            <Route path="/photo" component={Photo}/>
            <Route path="/url" component={authUser(ShortURL, "/url")}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    )
};


export default Routes;
