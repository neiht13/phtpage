import * as CSS from "./styles";
import {Galleria} from "primereact/galleria";

const GalleryX = ({ id, images, onClick }) =>
{

  const im = [
    {
      url: '/img/images/bing/BingWallpaper (0).jpg',
      alt: 0
    },
    {
      url: '/img/images/bing/BingWallpaper (1).jpg',
      alt: 1
    },
    {
      url: '/img/images/bing/BingWallpaper (2).jpg',
      alt: 2
    },
    {
      url: '/img/images/bing/BingWallpaper (3).jpg',
      alt: 3
    },
    {
      url: '/img/images/bing/BingWallpaper (4).jpg',
      alt: 4
    },
    {
      url: '/img/images/bing/BingWallpaper (5).jpg',
      alt: 5
    },
    {
      url: '/img/images/bing/BingWallpaper (6).jpg',
      alt: 6
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
    <Galleria value={im} numVisible={5} style={{maxWidth: '1440px'}}
              item={itemTemplate} thumbnail={thumbnailTemplate} />

  </CSS.GalleryX>
)};


export default GalleryX;
