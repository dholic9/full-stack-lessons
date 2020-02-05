import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      count: 0
    };
    this.handleResetClick = this.handleResetClick.bind(this);
    this.timerEffect = this.timerEffect.bind(this);
    this.id = null;
  }

  handleResetClick(event) {
    if (!this.state.clicked) {
      this.setState({ count: 0 });
    }
  }

  timerEffect(event) {

    if (!this.state.clicked) {
      this.id = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
      this.setState({ clicked: !this.state.clicked });
    } else {
      clearInterval(this.id);
      this.setState({ clicked: !this.state.clicked });
    }
  }

  render() {
    return (
      <div className="container">
        <div onClick={this.handleResetClick} className="stopWatch">
          <div className="number">{this.state.count}</div>
        </div>
        <i onClick={this.timerEffect} className={this.state.clicked ? 'pause fas fa-pause' : 'play fas fa-play'}></i>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.querySelector('#root')
);
