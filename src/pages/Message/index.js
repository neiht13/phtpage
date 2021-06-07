import {lazy, useEffect, useState} from "react";
import axios from "axios";
import * as CSS from "./styles";
import removeVietnamese from "../../common/Utilities/ConvertViString";
import useForm from "../../common/Form/useForm";
import TableX from "../../common/Table";
import * as instanceApi from "../../service/service"
import {Popconfirm, message, Tooltip} from "antd";

const Block = lazy(() => import("../../components/Block"));
const Input = lazy(() => import("../../common/Input"));
const Button = lazy(() => import("../../common/Button"));
const TextArea = lazy(() => import("../../common/TextArea"));

const Message = ({title, content, id, t}) => {
    const {
        values,
        setValues,
        errors,
        handleChange,
        handleSubmit,
        shouldSubmit,
        setShouldSubmit,
        setUrlForm
    } = useForm();
    const [messages, setMessages] = useState(null);
    const [resolvedAction, setResolvedAction] = useState(false);
    useEffect(() => {
        fetchData();
    }, [resolvedAction])

    const fetchData = () => {
        axios.get('http://localhost:5000/messages').then(res => {
            setMessages(res.data)
        })
    }

    const solveAction = (row) => {
        console.log(row)
        instanceApi.update('messages', {
            id: row.target.id
        }).then(res => {
            setResolvedAction(resolvedAction => !resolvedAction);
        })
    }

    function cancel(e) {
        console.log(e);
        message.error('Hủy tác vụ xử lý');
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
            render: (email) => {
                if (email.length > 20) {
                    const shortEmail = email.substring(0, 9);
                    return (
                        <Tooltip title={email}>
                            <span>{shortEmail + '...'}</span>
                        </Tooltip>
                    )
                }
                return (
                    <span>{email}</span>
                )
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
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
            fixed: 'right',
            key: 'action',
            width: 100,
            render: (id, i) => {
                if (i.resolved === 0) {
                    return (
                        <Popconfirm
                            title="Are you sure to delete this task?"
                            onConfirm={solveAction}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        ><i
                            className={`fas fa-check`}
                            style={{color: 'tomato', cursor: 'pointer'}}
                            id={id}/>
                        </Popconfirm>)
                } else {
                    return <i className={`fas fa-check-circle`} style={{display: 'flex', alignContent: 'center'}}/>
                }
            },
        },
    ];

    return (
        <div>
            <TableX dataSource={messages} columns={columns}/>
        </div>
    );
};

export default Message;
