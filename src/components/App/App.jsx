import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'components/Loader';
import Api from 'components/fetchImages';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import Button from 'components/Button';

import { AppDiv, ModalImg } from './App.styled';

export default class App extends Component {
    state = {
        name: '',
        images: [],
        error: null,
        page: 1,
        showModal: false,
        status: 'idle',
        total: 0,
        largeImage: '',
    };

    componentDidUpdate = (_, prevState) => {
        const { name, page } = this.state;

        if (prevState.name !== name) {
            this.setState({
                images: [],
                status: 'pending',
                page: 1,
            });
            this.fetchImages();
        }
        if (page !== prevState.page && page !== 1) {
            this.setState({
                status: 'pending',
            });
            this.fetchImages();
        }
    };

    onSubmit = name => {
        this.setState({
            name,
            images: [],
            page: 1,
        });
    };

    async fetchImages() {
        const { name, page } = this.state;
        try {
            const gallery = await Api(name, page);

            if (gallery.hits.length === 0) {
                this.setState({
                    status: 'idle',
                });
                return toast.error(`${name} not found`);
            }
            this.setState(prevState => ({
                images: [...prevState.images, ...gallery.hits],
                status: 'resolved',
                total: gallery.totalHits,
            }));
        } catch (error) {
            this.setState({
                error: error,
                status: 'rejected',
            });
        }
    }

    onClickButton = () => {
        this.setState(({ page }) => {
            return {
                page: page + 1,
            };
        });
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    onClickImage = event => {
        this.toggleModal();
        this.setState({ largeImage: event });
    };

    render() {
        const { onSubmit, onClickImage, onClickButton } = this;
        const { error, images, status, total, largeImage, showModal } =
            this.state;
        return (
            <AppDiv>
                <Searchbar onSubmit={onSubmit} />
                {status === 'resolved' && (
                    <ImageGallery images={images} onClick={onClickImage} />
                )}
                {status === 'pending' && <Loader/>}
                {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <ModalImg src={largeImage} alt={''} />
                    </Modal>
                )}
                {images.length > 0 && images.length < total && (
                    <Button onClick={onClickButton} />
                )}
                <ToastContainer autoClose={3000} />

                {error && (
                    <p>Щось пішло не так :( спробуйте будь ласка пізніше...</p>
                )}
            </AppDiv>
        );
    }
}
