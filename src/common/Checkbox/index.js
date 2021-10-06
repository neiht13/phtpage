import * as CSS from "./styles";
import {FlexEnd} from "./styles";
import {Checkbox as CheckX} from "antd";
const Checkbox = ({ id, color, width, size, children, onClick , type}) => {

  return <CSS.Checkbox id={id} color={color} width={width} size={size} onClick={onClick} type={type}>
    <CheckX>{children}</CheckX>
  </CSS.Checkbox>
};
export default Checkbox;
