import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as CSS from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Images = lazy(() => import("../../common/Images"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const address = "83 Nguyễn Huệ, Phường 1, Thành Phố Cao Lãnh, Đồng Tháp"
  const phone = "0888 009612"

  return (
    <Fragment>
      <Fade bottom>
        <CSS.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <CSS.Language>{t("Contact")}</CSS.Language>
                <CSS.Large to="/">{t("Tell us everything")}</CSS.Large>
                <CSS.Para>
                  {t(
                    `Do you have any question regarding the project? Feel free to reach out.`
                  )}
                </CSS.Para>
                <a>
                  <CSS.Chat>{t(`Let's Chat`)}</CSS.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <CSS.Title>{t("Policy")}</CSS.Title>
                <CSS.Large to="/" left="true">
                  {t("Application Security")}
                </CSS.Large>
                <CSS.Large left="true" to="/">
                  {t("Software Principles")}
                </CSS.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <CSS.Empty />
                <CSS.Large left="true" to="/">
                  {t("Support Center")}
                </CSS.Large>
                <CSS.Large left="true" to="/">
                  {t("Customer Support")}
                </CSS.Large>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <CSS.Empty />
                <CSS.Language>{t("ADDRESS")}</CSS.Language>
                <span><i className="fas fa-map-marker-alt"/> </span><CSS.Address href={`https://www.google.com/maps/place/${address}`} target="_blank">{address}</CSS.Address>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <CSS.Title>{t("Company")}</CSS.Title>
                <CSS.Large left="true" to="/">
                  {t("About")}
                </CSS.Large>
                <CSS.Large left="true" to="/">
                  {t("Blog")}
                </CSS.Large>
                <CSS.Large left="true" to="/">
                  {t("Press")}
                </CSS.Large>
                <CSS.Large left="true" to="/">
                  {t("Careers & Culture")}
                </CSS.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <CSS.Select>
                  <CSS.Label htmlFor="select-lang">{t("Language")}</CSS.Label>
                  <CSS.LangSelect
                    onChange={handleChange}
                    value={i18n.language}
                    id="select-lang"
                  >
                    <option value="vi">Tiếng Việt</option>
                    <option value="en">English</option>
                  </CSS.LangSelect>
                </CSS.Select>
              </Col>
            </Row>
          </Container>
        </CSS.Footer>
        <CSS.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <CSS.NavLink to="/">
                <CSS.LogoContainer>
                  <Images
                    src="logo_vnpt.png"
                    aria-label="homepage"
                    width="100px"
                    height="100px"
                  />
                  <span style={{display: "flex", alignItems: "flex-end"}}>Design by VNPT Đồng Tháp</span>
                </CSS.LogoContainer>
              </CSS.NavLink>
              <CSS.FooterContainer>        
                <CSS.StyledLink
                  href="https://facebook.com"
                  className="fab fa-facebook"
                />
                <CSS.StyledLink
                  href="https://twitter.com"
                  className="fab fa-twitter"
                />
                <CSS.StyledLink
                  href="https://instagram.com/"
                  className="fab fa-instagram"
                />
                <CSS.StyledLink
                  href="https://youtube.com/"
                  className="fab fa-youtube"
                />
              </CSS.FooterContainer>
            </Row>
          </Container>
        </CSS.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
