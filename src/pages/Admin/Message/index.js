import {lazy, useEffect, useState} from "react";
import { Row, Col, Table } from "antd";
import Zoom from "react-reveal/Zoom";
import { withTranslation } from "react-i18next";

import axios from "axios";
import * as CSS from "./styles";
import removeVietnamese from "../../../common/Utilities/ConvertViString";
import useForm from "../../../common/Form/useForm";

const Block = lazy(() => import("../../../components/Block"));
const Input = lazy(() => import("../../../common/Input"));
const Button = lazy(() => import("../../../common/Button"));
const TextArea = lazy(() => import("../../../common/TextArea"));

const ContactMessage = ({ title, content, id, t }) => {
  const { values, setValues, errors, handleChange, handleSubmit, shouldSubmit, setShouldSubmit, setUrlForm } = useForm();
  const [messages, setMessages] = useState(null);
  const [resolvedAction, setResolvedAction] = useState(false);
  useEffect(() =>{
    fetchData();
  },[resolvedAction])

  const fetchData = () => {
    axios.get('http://localhost:5000/messages').then(res =>{
      setMessages(res.data)
    })
  }

  const solveAction = (row) => {
    axios.post('http://localhost:5000/messages/update', {
      id: row.target.id
    }).then(res => {
      setResolvedAction(resolvedAction => !resolvedAction);
    })
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      render: (id, i) => {
        if(i.resolved === 0){
          return <i
              className={`fas fa-check`}
              style={{color: 'tomato', cursor: 'pointer'}}
              id={id} onClick={solveAction}/>
        } else {
          return <i
              className={`fas fa-check-circle`}/>
        }
      },
    },
  ];

  return (
      <div>
          <Table dataSource={messages} columns={columns} pagination={{ pageSize: 7 }}/>
      </div>
  );
};

export default withTranslation()(ContactMessage);
