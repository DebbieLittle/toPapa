import React from 'react';
import ReactDOM from 'react-dom';
import {Thumbnail} from 'react-bootstrap';
import StackGrid from 'react-stack-grid';
import axios from 'axios';

class App extends React.Component {
  state = {
    photos: [],
    letters: [],
    view: true
  }

  getAllPhotos = this.getAllPhotos.bind(this)
  // getAllLetters = this.getAllLetters.bind(this)

  componentDidMount() {
    // this.getAllLetters();
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

  // getAllLetters() {
  //   axios.get('/letters')
  //   .then((res) => {
  //     this.setState({
  //       letters: res.data
  //     })
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  render() {
    if (this.state.view === false) {
      return null
    } else {
      return (
        <div>
          <StackGrid columnWidth ={300} monitorImagesLoaded={true}>
          {this.state.photos.map((photo) => {
            return (
              <div key={photo.url}>
                <Thumbnail
                  src={photo.url}
                  height="250"
                  //onClick={() => function to make photo pop out bigger}
                >
                </Thumbnail>
              </div>
            )
          })}
          </StackGrid>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));