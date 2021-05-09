const SvgIcon = ({ src, width, height }) => (
  <img src={`${process.env.PUBLIC_URL}/img/svg/${src}`} alt={src} with={width} height={height} />
);

export default SvgIcon;
