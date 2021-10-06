import styled from 'styled-components';

export const Button = styled.button`
  background: var(--main-color);
  color: ${(props) => (props.color ? '#005aaa' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) => (props.color ? '1px solid #005aaa' : '0px')};
  border-radius: 6px;
  height: ${(props) => props.size === 'small' ? "40px" : "42px" };
  outline: none;  
  cursor: pointer;
  margin-top: 0.625rem;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0px rgb(0 0 0 / 14%), 0 1px 5px 0px rgb(0 0 0 / 12%);

  max-width: ${(props) => props.width  ? props.width : "150px" };

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '140px' : '100%')};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '130px' : '100%')};
  }
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;
