import React, { Component } from 'react';
import axios from 'axios';

const BEAR_API_URL = 'http://localhost:8000/api/bears';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bears: []
    };
  }

  componentDidMount() {
    axios.get(BEAR_API_URL)
      .then( (response) => {
        console.log('Bears:', response.data);

        this.setState({
          bears: response.data
        });
      });
  }

  renderSingleBear(bear) {
    return (
      <div key={bear.id}>{bear.name}</div>
    );
  }

  render() {
    let bears = this.state.bears;

    return (
      <div>
        { bears.map( this.renderSingleBear ) }
      </div>
    );
  }
}

export default App;
