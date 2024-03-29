import { Component } from 'react';
import Loader from 'react-loader-spinner';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';
import API from './services/images-api';
import './App.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    showModal: false,
    modalSrc: '',
    modalAlt: '',
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.search;
    const nextSearch = this.state.search;

    if (prevSearch !== nextSearch) {
      this.handleFetch();
    }

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 700);
  }

  handleFetch = () => {
    const { search, page } = this.state;
    this.setState({ status: Status.PENDING });

    setTimeout(() => {
      API.fetchImages(search, page)
        .then(images =>
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
            page: prevState.page + 1,
            status: Status.RESOLVED,
          })),
        )
        .catch(this.setState({ status: Status.REJECTED }));
    }, 700);
  };

  handleFormSubmit = search => {
    this.setState({
      search: search,
      images: [],
      page: 1,
      status: Status.IDLE,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onImageClick = event => {
    this.setState({
      modalSrc: event.target.dataset.source,
      modalAlt: event.target.alt,
      showModal: true,
    });
  };

  render() {
    const { images, status, showModal, modalSrc, modalAlt } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} onImageClick={this.onImageClick} />
        {status === 'pending' && (
          <div className="Loader">
            <Loader
              type="Hearts"
              color="#3f51b5"
              height={200}
              width={200}
              timeout={3000}
            />
          </div>
        )}
        {status === 'resolved' && <Button loadMore={this.handleFetch} />}
        {showModal && (
          <Modal
            bigImage={modalSrc}
            alt={modalAlt}
            onClose={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
