import { withTranslation } from "react-i18next";

import * as CSS from "./styles";

const Input = ({ id, name, placeholder, onChange, t, disabled, type, value, alt, readonly, required  }) =>
{
  if(type==='area'){
    return (
        <CSS.Container>
          <label htmlFor={name}>{t(name)}</label>
          <CSS.TextArea
            spellcheck="false"
            placeholder={t(placeholder)}
            name={name}
            id={id}
            required ={required}
            disabled={disabled}
            readonly={readonly}
            onChange={onChange}
            type={type}
            value={value}
            alt={alt}
            min="0"
            />
            </CSS.Container>
            )
  }
  else {
    return (
        <CSS.Container>
          <label htmlFor={name}>{t(name)}</label>
          <CSS.Input
              spellcheck="false"
              placeholder={t(placeholder)}
              name={name}
              id={id}
              required={required}
              disabled={disabled}
              readonly={readonly}
              onChange={onChange}
              type={type}
              value={value}
              alt={alt}
              min="0"
          />
        </CSS.Container>
    )
  }
};

export default withTranslation()(Input);
