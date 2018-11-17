import React from 'react';
import ReactDOM from 'react-dom';
import {Thumbnail, Modal, Button} from 'react-bootstrap';
import StackGrid from 'react-stack-grid';
import axios from 'axios';

class App extends React.Component {
  state = {
    photos: [],
    letters: [],
    view: false
  }

  getAllPhotos = this.getAllPhotos.bind(this)

  componentDidMount() {
    this.getAllPhotos();
  }

  getAllPhotos() {
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

  render() {
    if (this.state.view === false) {
      return (
        <div>
          <StackGrid columnWidth={300} monitorImagesLoaded={true}>
          {this.state.photos.map((photo) => {
            return (
              <div key={photo.url}>
                <Thumbnail
                  src={photo.url}
                  height="250"
                  //onClick={() => function to make photo pop out bigger}
                ></Thumbnail>
              </div>
            )
          })}
          </StackGrid>
        </div>
      )
    } else {
      <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
            <p>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));