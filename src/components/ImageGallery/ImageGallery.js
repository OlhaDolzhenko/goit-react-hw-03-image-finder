import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            smallImage={image.webformatURL}
            bigImage={image.largeImageURL}
            alt={image.tags}
            onImageClick={onImageClick}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
