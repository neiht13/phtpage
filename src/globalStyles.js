import { createGlobalStyle } from 'styled-components';


const Styles = createGlobalStyle`
    body,
    html,
    a {
        font-family: ${(props) => (props.primaryFont ? props.primaryFont : 'Segoe UI')}, sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
      }

      a:hover {
        color: #000;
      }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${(props) => (props.primaryFont ? props.primaryFont : 'Segoe UI')}, sans-serif;
        color: ${(props) => (props.primaryColor ? props.primaryColor : "#005aaa")};
        font-size: 2.575rem;
        line-height: 3.0625rem;

        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
      }

      p {
        color: #0a1f44;
        font-size: 1.125rem;
      }

      h1 {
        font-weight: 600;
    }
    hr {
      border-top: solid 1px #005aaa;
    }

      a {
        text-decoration: none;
        outline: none;
        color: #005aaa;

        :hover {
            color: #005aaa;
        }
    }
    i {
        color: #005aaa;
      }
    
    input {
      :focus,
      :hover {
        border-color: #005aaa !important;
      }
    }
     

      .about-block-image svg {
        text-align: center;
      }

      .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
      }

    span {
      font-family: Helvetica, sans-serif;
      :focus,
      :hover {
        border-color: #005aaa !important;
      }
    }
    header {
      color: #005aaa !important;
      font-family: Helvetica, sans-serif;
    }
    footer {
      color: #005aaa !important;
      font-family: Helvetica, sans-serif;
    }
    
    .anticon {
      color: #005aaa !important;
    }
    ::after {
      color: #005aaa;
    }
    .site-layout-background {
      background: #ffffff;
    }
`;

export default Styles;
