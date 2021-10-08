import styled from 'styled-components';

export const CheckboxStyle = styled.div`
  width: 100%;
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #005aaa !important;
    border-color: #005aaa !important;
  }
  .ant-checkbox-checked::after {
    border-color: #005aaa !important;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #005aaa !important;
  }
`;

