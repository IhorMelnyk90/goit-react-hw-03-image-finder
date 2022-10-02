import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    omponentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };
    render() {
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalDiv>{this.props.children}</ModalDiv>
            </Overlay>,
            modalRoot
        );
    }
}

export default Modal;
