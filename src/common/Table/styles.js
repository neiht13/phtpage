import styled from 'styled-components';

export const Table = styled.div`
  .ant-pagination-item-active {
    border-color: #005aaa;
    :hover {
      border-color: #005aaa;
    }
    a {
      color: #005aaa;
      :hover {
        color: #005aaa ;
      }
    }
  }
  .ant-pagination-item {
    :hover {
      border-color: #005aaa;
    }
    a {
      :hover {
        color: #005aaa ;
      }
    }
  }
  .ant-pagination-item-link {
    :hover {
      border-color: #005aaa;
    }
  }
  .ant-table-thead > tr > th {
    font-weight: bold !important;
  }
`;
