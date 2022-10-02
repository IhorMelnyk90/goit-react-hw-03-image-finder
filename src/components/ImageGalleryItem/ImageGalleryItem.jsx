import React from 'react';
import PropTypes from 'prop-types';
import {
    ImageGalleryItemLi,
    ImageGalleryItemImage,
} from './ImageGalleryItem.styled';



const ImageGalleryItem = ({ cardUrl, alt, onClick }) => (
    <ImageGalleryItemLi onClick={onClick}>
        <ImageGalleryItemImage src={cardUrl} alt={alt}></ImageGalleryItemImage>
    </ImageGalleryItemLi>
);


ImageGalleryItem.propTypes = {
    cardUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
