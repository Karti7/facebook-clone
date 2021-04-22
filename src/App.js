import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} className="fb-logo" />
        <div className="para">
          <p>Facebook helps you connect and share <br /> with the people in your life.</p>
        </div>
        <div className="card">
          <div className="card2">
            <input
              type="text"
              placeholder="Email address or Phone number"
              className="input"
            /> <br />

            <input
              type="password"
              placeholder="Password"
              className="input"
            /> <br />

            <div>
              <button className="btn" >Log In</button>
            </div>

            <div >
              <a href="#" className="forget">Forgetten Password? </a>
            </div>

            <div >
              <button className="btn2">Create New Account</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
