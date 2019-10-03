import React, { Component } from 'react';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    Users: [],
    loading: false
  }

  async UNSAFE_componentWillMount() {

    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret-$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log('res', res);
    this.setState({ Users: res.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.Users} />
        </div>
      </div>
    );

  }
}

export default App;
