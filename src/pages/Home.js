import React from 'react';
import '../styles/Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="home-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default Home;
