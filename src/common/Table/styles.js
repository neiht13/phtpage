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
  .ant-table-cell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 12px !important;
  }
  .ant-card {
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  }
`;
