import React, { Component } from 'react';
import './Animation.css';
class Animation extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  componentWillUpdate(newProps, newState) {
    if (!newState.show) {
      document.getElementById('fade').style = 'background: red;';
    } else {
      document.getElementById('fade').style = 'background: blue;';
    }
  }
  toggleCollapse = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div className="Animation">
        <button onClick={this.toggleCollapse}>
          {this.state.show ? 'Collapse' : 'Expand'}
        </button>
        <div
          id="fade"
          className={this.state.show ? 'transition show' : 'transition'}
        />
      </div>
    );
  }
}
export default Animation;
