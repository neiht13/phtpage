import * as CSS from "./styles";

const Container = ({ padding, border, children }) => (
  <CSS.Container padding={padding} border={border}>
    {children}
  </CSS.Container>
);

export default Container;
