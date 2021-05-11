import * as CSS from "./styles";
import {Galleria} from "primereact/galleria";

const GalleryX = ({ id, images, onClick }) =>
{

  const im = [
    {
      url: '/img/images/dtp/seudaudo.jpg',
      alt: 1
    },
    {
      url: '/img/images/dtp/langcuphobang.jpg',
      alt: 2
    },
    {
      url: '/img/images/dtp/langhoasadec.jpg',
      alt: 3
    },
    {
      url: '/img/images/dtp/tramchimtamnong.jpg',
      alt: 4
    },
  ]
  const itemTemplate = (item) => {
  return <img src={item.url} alt={item.alt} style={{ width: '100%' }} />
}

  const thumbnailTemplate = (item) => {
  return <img src={item.url} alt={item.alt} style={{ width: '40%' }}/>
}
  return (

  <CSS.GalleryX>
    <i className="pi pi-android"/>
    <Galleria value={im} numVisible={3} style={{maxWidth: '1440px'}}
              item={itemTemplate} thumbnail={thumbnailTemplate} />

  </CSS.GalleryX>
)};


export default GalleryX;
