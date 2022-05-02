import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MyComponents from './pages/MyComponents';
import './styles/App.scss';
import Navigator from './components/Navigator';



const navigatorProps = {
  'links': ['/', '/my-components'],
  'linkTexts': ['Home', 'My Components'],
}

class App extends React.Component {
  
  render() {
    
    return (
      <div className="App">
        <Router>
          <Navigator link={ navigatorProps.links } textLink={ navigatorProps.linkTexts }></Navigator>
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
