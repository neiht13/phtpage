import styled from 'styled-components';

export const SidebarStyle = styled.div`
    .ant-layout-sider {
      max-width: 250px !important;
    }
    .ant-menu-submenu-arrow {
      color: #005aaa !important;
    }
  .ant-layout-sider {
    background: #ffffff;
  }
  .ant-layout-sider-trigger {
    background: #ffffff
  }
  .ant-menu-item-selected {
    color: #005aaa;
  }
  .ant-menu-submenu-selected {
    color: #005aaa;
  }
  .ant-menu-item-active {
    color: #005aaa;
  }
  .ant-menu-submenu-active {
    color: #005aaa;
  }
  .ant-menu-submenu-title:hover {
    color: #005aaa;
  }
  .ant-menu-item::after {
    border-right: 3px solid #005aaa;
  }
`;
