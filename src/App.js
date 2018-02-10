import React, { Component } from 'react';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'jerry'
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <UserInput change={this.handleChange} 
                   currentUsername={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username="BigJ" />
      </div>
    );
  }
}

export default App;
