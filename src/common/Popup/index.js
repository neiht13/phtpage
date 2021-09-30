import {PopupX} from "./styles";
import {Popconfirm} from "antd";

const Popup = ({id, color, item, title, okText, cancelText, onConfirm, onCancel}) => {

    return <PopupX>
        <Popconfirm
            title={title}
            onConfirm={onConfirm}
            onCancel={onCancel}
            okText={okText}
            cancelText={cancelText}
        >
            {item}
        </Popconfirm>
    </PopupX>
};


export default Popup;
