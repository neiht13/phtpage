import { notification } from "antd";

const notiType = [
    "error",
    "success",
    "info",
    "warning",
    "open"];

const Notification = (type, message, description) => {
    if(type ===notiType[0]) {
        notification[type]({
            message: message,
            description: description,
            icon: <i className="fas fa-times-circle" style={{color: 'tomato'}}/>,
            closeIcon: <i className="fas fa-times" style={{color: 'tomato'}}/>
        });
    } else {
        notification[type]({
            message: message,
            description: description,
            icon: <i className="fas fa-check" style={{color: "#005aaa"}}/>,
            closeIcon: <i className="fas fa-times" style={{color:"#005aaa"}}/>,
        });
    }

};


export default Notification;