import styled from 'styled-components';

export const FormX = styled.div`
  .ant-form-item-has-error {
    .ant-input {
      border-color: tomato;
    }
    .ant-input-password {
      border-color: tomato;
    }
  }
  .ant-form-item-explain.ant-form-item-explain-error {
    color: tomato;
  }
  .ant-form-item-has-error {
    input {
      border-color: tomato !important;
    }
  }
  input {
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.hasError ? "tomato" : '-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133)) '};
    outline: none;
    font-size: 0.875rem;
    padding: 0.6rem 15px;
    transition: border-color 0.3s ease-in;
    border-radius: 3px;
    color: #000;
  }
`;

export const Contact = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
`;

export const IconContainer = styled.div`
  @media only screen and (min-width: 980px) {
    padding: 10rem 7rem;
  }
`;

export const FormGroup = styled.form`
  width: 100%;
  max-width: 1440px;
`;

export const Span = styled.span`
  display: block;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;


export const Label = styled.label`
  color: #005aaa;
`;

export const ButtonContainer = styled.div`
  text-align: end;
  position: relative;
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
