import React from 'react';
import ReactDOM from 'react-dom';
import {Thumbnail} from 'react-bootstrap';

class App extends React.Component {
  state = {
    photos: ['https://imgur.com/a/wHjiRZg'],
    letters: []
  }

  render() {
    return (
      <div>
        <Thumbnail src={this.state.photos[0]}></Thumbnail>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))