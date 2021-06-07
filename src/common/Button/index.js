import * as CSS from "./styles";
import {FlexEnd} from "./styles";

const Button = ({ id, color, width, size, children, onClick , position}) => {
  const BTN =
    <CSS.Button id={id} color={color} width={width} size={size} onClick={onClick}>
    {children}
  </CSS.Button>;
  if (position === 'flex-end') {
    return <FlexEnd><CSS.Button id={id} color={color} width={width} size={size} onClick={onClick}>
      {children}
    </CSS.Button></FlexEnd>
  }
  return <CSS.Button id={id} color={color} width={width} size={size} onClick={onClick}>
    {children}
  </CSS.Button>
};


export default Button;
