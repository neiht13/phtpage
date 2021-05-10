import * as CSS from "./styles";
import {Collapse} from "antd";

const {Panel} = Collapse;

const listPanel = (items) => {
    items.forEach(item => {
        return (
            <Panel header={item.subText} key={item.subText}>
                <p>{item.subTextContent}</p>
            </Panel>
        )
    })
}

const CollapseX = ({id, items}) => (
    <CSS.Collapse id={id} >
        <Collapse defaultActiveKey={['1']} ghost>
            <Panel header={items[0].subText} key={items[0]}>
                <p>{items[0].subTextContent}</p>
            </Panel>
        </Collapse>
    </CSS.Collapse>
);


export default CollapseX;
