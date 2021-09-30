
import * as CSS from "./styles";
import {Col} from "antd";
import {ErrorMessage} from "./styles";

const Input = ({ id, name, placeholder, onChange, label, errorMessage, disabled, type, value, alt, readonly, required, hasError  }) =>
{
  if(type==='area'){
    return (
        <CSS.Container>
          <label>{label}</label>
          <CSS.TextArea
            spellcheck="false"
            placeholder={placeholder}
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
          <label>{label}</label>
          <CSS.Input
              spellcheck="false"
              placeholder={placeholder}
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
              hasError={hasError}
          />
            {hasError && <CSS.ErrorMessage>{hasError}</CSS.ErrorMessage>}
        </CSS.Container>
    )
  }
};

export default Input;
