import * as CSS from "./styles";
import {FlexEnd} from "./styles";

const Button = ({ id, color, width, size, children, onClick , position, type}) => {
  const BTN =
    <CSS.Button id={id} color={color} width={width} size={size} onClick={onClick} type={type}>
    {children}
  </CSS.Button>;
  if (position === 'flex-end') {
    return <FlexEnd><CSS.Button id={id} color={color} width={width} size={size} onClick={onClick} type={type}>
      {children}
    </CSS.Button></FlexEnd>
  }
  return <CSS.Button id={id} color={color} width={width} size={size} onClick={onClick} type={type}>
    {children}
  </CSS.Button>
};


export default Button;
