import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import { fetchBears } from './actions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(reducer);

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
        bears: store.getState().bears
      });
    });

    store.dispatch(fetchBears());
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
