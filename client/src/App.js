import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component { 
  renderSingleBear(bear) {
    return (
      <div key={bear.id}>{bear.name}</div>
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

export default connect(mapStateToProps)(App);
