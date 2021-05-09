import {useState, Fragment, lazy, useEffect} from "react";
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";

import * as CSS from "./styles";
import axios from "axios";

const Images = lazy(() => import("../../common/Images"));
const Button = lazy(() => import("../../common/Button"));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);
  const [menuBar, setMenuBar] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/menu_bar').then(res =>{
      setMenuBar(res.data)
    })
  },[]);
  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        <CSS.CustomNavLinkSmall onClick={() => scrollTo(menuBar[0] && menuBar[0].id)}>
          <CSS.Span>{t(menuBar[0] && menuBar[0].name)}</CSS.Span>
        </CSS.CustomNavLinkSmall>
        <CSS.CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <CSS.Span>{t("Mission")}</CSS.Span>
        </CSS.CustomNavLinkSmall>
        <CSS.CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <CSS.Span>{t("Product")}</CSS.Span>
        </CSS.CustomNavLinkSmall>
        <CSS.CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <CSS.Span>
            <Button>{t("Contact")}</Button>
          </CSS.Span>
        </CSS.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <CSS.Header>
      <CSS.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <CSS.LogoContainer to="/" aria-label="homepage">
            <Images src="logo_vnpt.png" width="100px" height="100px" />
          </CSS.LogoContainer>
          <CSS.NotHidden>
            <MenuItem />
          </CSS.NotHidden>
          <CSS.Burger onClick={showDrawer}>
            <CSS.Outline />
          </CSS.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <CSS.Label onClick={onClose}>
                <Col span={12}>
                  <CSS.Menu>Menu</CSS.Menu>
                </Col>
                <Col span={12}>
                  <CSS.Outline padding="true" />
                </Col>
              </CSS.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </CSS.Container>
    </CSS.Header>
  );
};

export default withTranslation()(Header);
