import * as CSS from "./styles";

const Button = ({ id, color, width, size, children, onClick }) => (
  <CSS.Button id={id} color={color} width={width} size={size} onClick={onClick}>
    {children}
  </CSS.Button>
);


export default Button;
