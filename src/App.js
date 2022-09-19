import React, { Component } from "react";
import "./index.css";

//  Make a login pge with a sign up button using react js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLogin: false,
      isSignUp: false,
    };
  }

  //  Handle the login
  handleLogin = () => {
    const { username, password } = this.state;
    if (username === 'admin' && password === 'admin') {
      this.setState({
        isLogin: true,
      });
    } else {
      alert('Invalid username or password');
    }
  };

  //  Handle the sign up
  handleSignUp = () => {
    this.setState({
      isSignUp: true,
    });
  };

  //  Handle the input change
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password, isLogin, isSignUp } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {isLogin ? (
            <div>
              <h1>Welcome to the login page</h1>
            </div>
          ) : isSignUp ? (
            <div>
              <h1>Welcome to the sign up page</h1>
            </div>
          ) : (
            <div>
              <h1>Welcome to the login page</h1>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleInputChange}
              />
              <button onClick={this.handleLogin}>Login</button>
              <button onClick={this.handleSignUp}>Sign Up</button>
            </div>
          )}
        </header>
      </div>
    );
  }
}



export default App;
