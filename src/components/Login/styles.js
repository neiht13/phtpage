import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginStyle = styled.div`
  width: 40%;
  margin-left: 30%;
  .ant-input {
    padding: 8px 16px;
    border-radius: 5px;

  }

  .ant-input-password {
    padding: 8px 16px;
    border-radius: 5px;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #005aaa;
    border-color: #005aaa;
  }
  .ant-checkbox-inner:hover {
    border-color: #005aaa;
  }

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
`;