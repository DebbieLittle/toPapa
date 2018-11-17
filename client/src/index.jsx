import React from 'react';
import ReactDOM from 'react-dom';
import {Thumbnail, Modal, Carousel} from 'react-bootstrap';
import StackGrid from 'react-stack-grid';
import axios from 'axios';

class App extends React.Component {
  state = {
    photos: [],
    letters: [],
    currentPhoto: '',
    view: false
  }

  componentDidMount() {
    this.getAllPhotos();
  }

  getAllPhotos = () => {
    axios.get('/photos')
    .then((res) => {
      this.setState({
        photos: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  openModal = (photo) => {
    this.setState({
      currentPhoto: photo,
      view: true
    })
  }

  handleHide = () => {
    this.setState({
      view: false
    })
  }

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <center>
              <img width={900} height={550} src="//i.imgur.com/qrHy0NK.png" />
            </center>
          </Carousel.Item>
          <Carousel.Item>
            <center>
              <img width={900} height={550} src="//i.imgur.com/vKrYKxw.png" />
            </center>
          </Carousel.Item>
          <Carousel.Item>
            <center>
              <img width={900} height={550} src="//i.imgur.com/buheJ7G.png" />
            </center>
          </Carousel.Item>
          <Carousel.Item>
            <center>
              <img width={900} height={550} src="//i.imgur.com/c4aJ35z.png" />
            </center>
          </Carousel.Item>
        </Carousel>

        <StackGrid columnWidth={300} monitorImagesLoaded={true}>
        {this.state.photos.map((photo) => {
          return (
            <div key={photo.url}>
              <Thumbnail
                src={photo.url}
                height="250"
                onClick={() => this.openModal(photo.url)}
              ></Thumbnail>
            </div>
          )
        })}
        </StackGrid>

        <Modal
          show={this.state.view}
          onHide={this.handleHide}
          bsSize="large"
        >
          <Modal.Body>
            <center>
              <img
                style={{ maxWidth: '870px', maxHeight: '750px' }}
                src={this.state.currentPhoto}
              />
            </center>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));