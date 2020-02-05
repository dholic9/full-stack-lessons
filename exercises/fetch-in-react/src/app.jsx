import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    /* your code here */
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(data => {
        const arr =[]
        data.map(user => {
          arr.push(user)
        })
        this.setState({users: arr})
        this.setState({ isLoading: false })
      })
      .catch(error => {
        console.log('Error: ', error)
      })
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users}/>;
  }
}

export default App;
