import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteBear } from './actions';

class App extends Component { 
  renderSingleBear = (bear) => {
    return (
      <div key={bear.id}>
        <button onClick={ () => this.props.deleteBear(bear.id) }>X</button>
        {bear.name}
      </div>
    );
  }

  render() {
    let bears = this.props.bears;

    return (
      <div>
        { bears.map( this.renderSingleBear ) }
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  bears: state.bears
});

let actionsToPropsMap = {
  deleteBear
};

export default connect(mapStateToProps, actionsToPropsMap)(App);
