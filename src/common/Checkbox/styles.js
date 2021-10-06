import styled from 'styled-components';

export const Checkbox = styled.div`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #005aaa;
    border-color: #005aaa;
  }
  .ant-checkbox-checked::after {
    border-color: #005aaa;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #005aaa;
  }
`;

