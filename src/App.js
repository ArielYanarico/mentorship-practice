import React from 'react'
import Home from './pages/Home';
import MyComponents from './pages/MyComponents';
import './styles/App.scss';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
        <MyComponents />
      </div>
    )
  }
}

export default App;
