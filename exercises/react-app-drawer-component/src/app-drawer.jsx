import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHidden: true
    };
    this.clearModal = this.clearModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  showModal(event) {
    this.setState({ modalHidden: !this.state.modalHidden });
  }

  clearModal(event) {
    if (!this.state.modalHidden) {
      this.setState({ modalHidden: true });
    }
  }

  render() {
    return (
      <div className={'bodyContainer '}>
        <div className={'container ' + (this.state.modalHidden ? '' : 'border')}>
          <i onClick={this.showModal} className="fas fa-bars"></i>
          <div className={'modal ' + (this.state.modalHidden ? 'hide' : 'show')}>
            <h2 onClick={this.clearModal}>Menu</h2>
            <h3 onClick={this.clearModal}>About</h3>
            <h3 onClick={this.clearModal}>Get Started</h3>
            <h3 onClick={this.clearModal}>Sign In</h3>
          </div>
        </div>
        <div onClick={this.clearModal} className={'content ' + (this.state.modalHidden ? '' : 'blur')}></div>
      </div>
    );
  }
}

export default AppDrawer;
