const Images = ({ src, width, height }) => (
  <img src={`${process.env.PUBLIC_URL}/img/images/${src}`} alt={src} with={width} height={height} />
);

export default Images;
