import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as CSS from "./styles";

const Block = ({ title, content, t }) => {
  return (
    <CSS.Container>
      <Fade left>
        <h6>{t(title)}</h6>
        <CSS.TextWrapper>
          <CSS.Content>{t(content)}</CSS.Content>
        </CSS.TextWrapper>
      </Fade>
    </CSS.Container>
  );
};

export default withTranslation()(Block);
