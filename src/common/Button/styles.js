import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color || '#005aaa'};
  color: ${(props) => (props.color ? '#005aaa' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) => (props.color ? '1px solid #005aaa' : '0px')};
  border-radius: 8px;
  height: ${(props) => props.size === 'small' ? "40px" : "60px" };
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: ${(props) => props.size === 'small' ? "100px" : "180px" };

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
