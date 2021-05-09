import SvgIcon from "../../common/SvgIcon";

import * as CSS from "./styles";

const Input = () => {
  const scrollUp = () => {
    const element = document.getElementById("firstBlock");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <CSS.Up onClick={scrollUp}>
      <SvgIcon src="scroll-top.svg" width="26px" height="26px" />
    </CSS.Up>
  );
};

export default Input;
