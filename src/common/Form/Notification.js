import { notification } from "antd";


const Notification = (type, message, description) => {
    if(type ==='error') {
        notification[type]({
            message: message,
            description: description,
            icon: <i className="fas fa-times-circle" style={{color: 'red'}}/>,
            closeIcon: <i className="fas fa-times"/>
        });
    } else {
        notification[type]({
            message: message,
            description: description,
            icon: <i className="fas fa-check"/>,
            closeIcon: <i className="fas fa-times"/>,
        });
    }

};

export default Notification;