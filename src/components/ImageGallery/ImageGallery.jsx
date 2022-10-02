import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import {ImageGalleryUl} from './ImageGallery.styled'


const ImageGallery = ({images, onClick}) => {
  return (
    <ImageGalleryUl>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          cardUrl={webformatURL}
          alt={tags}
          onClick={() => onClick(largeImageURL)}
        />
      ))}
    </ImageGalleryUl>
  )
};


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
  onClick: PropTypes.func,
};

export default ImageGallery;
