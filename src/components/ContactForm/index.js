import {lazy, useEffect} from "react";
import { Row, Col } from "antd";
import Zoom from "react-reveal/Zoom";
import { withTranslation } from "react-i18next";

import validate from "./validationRules";

import * as CSS from "./styles";
import useForm from "../../common/Form/useForm";

const Block = lazy(() => import("../Block"));
const Input = lazy(() => import("../../common/Input"));
const Button = lazy(() => import("../../common/Button"));
const TextArea = lazy(() => import("../../common/TextArea"));

const Contact = ({ title, content, id, t }) => {
  const { values, errors, handleChange, handleSubmit, shouldSubmit, setShouldSubmit, setUrlForm } = useForm();

  useEffect(() =>{
    setUrlForm("http://localhost:5000/messages/new");
    if (shouldSubmit) {
      setShouldSubmit(false);
    }
  },[shouldSubmit])

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <Zoom cascade>
        <CSS.Span>{ErrorMessage}</CSS.Span>
      </Zoom>
    ) : (
      <CSS.Span />
    );
  };

  return (
    <CSS.ContactContainer id={id}>
      <CSS.Contact>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={title} content={content} />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <CSS.Label>
            <CSS.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  id="name"
                  name="Name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="number"
                  id="phone"
                  name="Phone"
                  placeholder="Your Phone"
                  value={values.phone || ""}
                  onChange={handleChange}
                />
                <ValidationType type="phone" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  id="email"
                  name="Email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <Input
                  type="area"
                  placeholder="Your Message"
                  value={values.message || ""}
                  id="message"
                  name="Message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <CSS.ButtonContainer>
                <Button name="submit" type="submit">
                  {t("Submit")}
                </Button>
              </CSS.ButtonContainer>
            </CSS.FormGroup>
            </CSS.Label>
          </Col>
        </Row>
      </CSS.Contact>
    </CSS.ContactContainer>
  );
};

export default withTranslation()(Contact);
