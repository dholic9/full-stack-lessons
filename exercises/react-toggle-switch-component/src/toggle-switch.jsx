import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div className="container">
          <div onClick={this.handleClick} className="clicked">
            <div className="toggleLeft"></div>
          </div>
          <div className="text">ON</div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div onClick={this.handleClick} className="notClicked">
            <div className="toggleRight"></div>
          </div>
          <div className="text">OFF</div>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
