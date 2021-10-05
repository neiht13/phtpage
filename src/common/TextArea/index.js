
import * as CSS from "./styles";

const TextArea = ({ name, id, placeholder, onChange, t , value}) => (
  <CSS.Container>
    <label htmlFor={name}>{t(name)}</label>
    <CSS.TextArea
      spellcheck="true"
      placeholder={t(placeholder)}
      id={id}
      name={name}
      onChange={onChange}
    >
        {value}
    </CSS.TextArea>
  </CSS.Container>
);

export default withTranslation()(TextArea);
