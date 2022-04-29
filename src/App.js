import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MyComponents from './pages/MyComponents';
import './styles/App.scss';


class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Router>

          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/my-components'>My Components</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/my-components' element={<MyComponents />} />
          </Routes>
        </Router>

      </div>
    )
  }
}

export default App;
