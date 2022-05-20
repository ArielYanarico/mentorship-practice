import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyComponents from './pages/MyComponents';
import './styles/App.scss';
import Navigator from './components/Navigator';
import Login from './pages/Login';
import PrivateRoute from './components/PrivatRoute';

const links = [
  {path:'/', text:'Home'},
  {path:'/my-components', text:'My Components'},
  {path:'/login', text:'Login'},
]

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Navigator links={ links } ></Navigator>
          <Routes>
            <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/my-components' element={ <PrivateRoute><MyComponents /></PrivateRoute> } />
          </Routes>
        </Router>

      </div>
    )
  }
}

export default App;
