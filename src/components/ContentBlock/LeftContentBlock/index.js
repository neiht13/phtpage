import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";

import * as CSS from "./styles";

const LeftContentBlock = ({ icon, title, content, section, t, id }) => {
  return (
    <CSS.BackgroundImage>
    <CSS.LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col offset={1} lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <CSS.ContentWrapper>
              <h6>{t(title)}</h6>
              <CSS.Content>{t(content)}</CSS.Content>
              <CSS.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section &&
                    typeof section === "object" &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <CSS.MinTitle>{t(item.title)}</CSS.MinTitle>
                          <CSS.MinPara>{t(item.content)}</CSS.MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </CSS.ServiceWrapper>
            </CSS.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </CSS.LeftContentBlock>
    </CSS.BackgroundImage>
  );
};

export default withTranslation()(LeftContentBlock);
