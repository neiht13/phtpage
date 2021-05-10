import { createGlobalStyle } from 'styled-components';

const primaryColor = "#005aaa";
const Styles = createGlobalStyle`
    body,
    html,
    a {
        font-family: 'Segoe UI', sans-serif;
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
        font-family: 'Segoe UI', sans-serif;
        color: #005aaa;
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
        font-size: 18px;
    }
    
    *:focus {
        outline: none;
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

    .ant-notification-notice-icon-success {
        color: rgb(255,130,92);
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #005aaa;
    }
    
    .anticon {
      color: ${primaryColor}!important;
    }
`;

export default Styles;
