import styled from 'styled-components';

export const LayoutProfile = styled.div`
  text-align: center;
  padding: 20px 0;
  span {
    font-size: 14px;
  }
  .profile {
    width: 80%;
    margin-left: 10%; 
    .ant-menu-submenu-arrow {
        display: none;
    }
  }

  img {
    width: 69px;
    margin: 10px;
    border-radius:50%;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0px rgb(0 0 0 / 14%), 0 1px 5px 0px rgb(0 0 0 / 12%);
  }

  .layout-profile-link {
    cursor: pointer;
    display: inline-block;
    margin-bottom: .75em;

    i {
      display: inline-block;
      font-size: 14px;
      vertical-align: middle;
      margin-left: .5em;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      button {
        width: 100%;
        padding: 1em;
        border: 0 none;
        border-radius: 0;
        cursor: pointer;

        &:hover {
          color: #005aaa;
        }

        span {
          margin-left: .25em;
          vertical-align: middle;
        }

        i {
          vertical-align: middle;
        }
      }
    }

    &.layout-submenu-wrapper-enter,
    &.layout-submenu-wrapper-leave-to {
      max-height: 0;
    }

    &.layout-submenu-wrapper-enter-to,
    &.layout-submenu-wrapper-leave {
      max-height: 1000px;
    }

    &.layout-submenu-wrapper-leave-active {
      overflow: hidden;
      transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    &.layout-submenu-wrapper-enter-active {
      overflow: hidden;
      transition: max-height 1s ease-in-out;
    }
  }
`;