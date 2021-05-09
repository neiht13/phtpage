import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";

import * as CSS from "./styles";

const RightBlock = ({ title, content, button, icon, t, id, background}) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <CSS.BackgroundImage url={background}>
    <CSS.RightBlockContainer>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col offset={1} lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <CSS.ContentWrapper>
              <h6>{t(title)}</h6>
              <CSS.Content>{t(content)}</CSS.Content>
              <CSS.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        width="true"
                        onClick={() => scrollTo("about")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </CSS.ButtonWrapper>
            </CSS.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            />
          </Slide>
        </Col>
      </Row>
    </CSS.RightBlockContainer>
    </CSS.BackgroundImage>
  );
};

export default withTranslation()(RightBlock);
