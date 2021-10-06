import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  label {
    top: -6px;
    position: absolute!important;
    z-index: 9;
    height: auto!important;
    width: auto!important;
    padding-left: 3px;
    padding-right: 3px;
    left: 10px;
    background-color: #fff;
    border-radius: 3px;
  }
`;

export const Input = styled.input`
  width: ${(props) => props.width ? props.width : "100%"};
  max-width: 369px;
  min-width: 234px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.hasError ? "tomato" : '-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))'};
  outline: none;
  font-size: 0.875rem;
  padding: 0.6rem 15px;
  transition: border-color 0.3s ease-in;
  border-radius: 3px;
  color: #000;


  &:focus,
  &:hover {
    border-color: #005aaa;
  }
  
`;

export const TextArea = styled.input`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  outline: none;
  font-size: 0.875rem;
  padding: 1rem 1.25rem;
  transition: border-color 0.3s ease-in;
  border-radius: 8px;
  color: #000;
  height: 100px;

  &:focus,
  &:hover {
    border-color: #005aaa;
  }
`;
export const ErrorMessage = styled.div`
  color: tomato;
  font-size: 12px;
  opacity: 88%;
`;
