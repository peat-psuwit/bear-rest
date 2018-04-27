import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createBear, deleteBear } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newBearName: ""
    };
  }

  handleNewBearNameChange = (event) => {
    this.setState({
      newBearName: event.target.value
    });
  }

  handleAddBearClicked = () => {
    this.props.createBear({
      name: this.state.newBearName
    });

    this.setState({
      newBearName: ""
    });
  }

  renderNewBearBar() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newBearName}
          onChange={this.handleNewBearNameChange}
        />
        <button onClick={this.handleAddBearClicked}>Add</button>
      </div>
    );
  }

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
        { this.renderNewBearBar() }
        { bears.map( this.renderSingleBear ) }
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  bears: state.bears
});

let actionsToPropsMap = {
  createBear,
  deleteBear
};

export default connect(mapStateToProps, actionsToPropsMap)(App);
