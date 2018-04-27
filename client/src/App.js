import React, { Component } from 'react';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const BEAR_API_URL = 'http://localhost:8000/api/bears';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let reducer = function(state = [], action) {
  if (action) {
    if (action.type === 'FETCH_BEAR') {
      return action.payload;
    }
  }

  return state;
}

let store = createStoreWithMiddleware(reducer);

let fetchBearsActionCreator = function() {
  return (dispatch) => {
    return axios.get(BEAR_API_URL)
      .then( (response) => {
        console.log('fetchBears payload: ', response.data);

        dispatch({ type: 'FETCH_BEAR', payload: response.data });
      });
  };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bears: []
    };
  }

  componentDidMount() {
    store.subscribe( () => {
      this.setState({
        bears: store.getState()
      });
    });

    store.dispatch(fetchBearsActionCreator());
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
