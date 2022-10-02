import React from 'react';
import PropTypes from 'prop-types';
import { ButtonM } from './Button.styled';

const Button = ({ onClick }) => (
    <ButtonM type="button" onClick={onClick}>
        Load more
    </ButtonM>
);

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;