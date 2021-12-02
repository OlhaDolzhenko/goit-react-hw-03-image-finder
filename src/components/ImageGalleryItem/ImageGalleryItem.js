import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, smallImage, bigImage, alt, onImageClick }) => {
  return (
    <li className={s.ImageGalleryItem} key={id}>
      <img
        className={s.ImageGalleryItemImage}
        src={smallImage}
        alt={alt}
        data-source={bigImage}
        onClick={onImageClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
