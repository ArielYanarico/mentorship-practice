import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/error';
import MyComponents from './pages/MyComponents';
import './styles/App.scss';
import Navigator from './components/Navigator';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

const links = [
  {path:'/', text:'Home'},
  {path:'/login', text:'Login'},
  {path:'/my-components', text:'My Components'},
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
            <Route path='/error' element={<Error />} />
            <Route path='/my-components' element={ <PrivateRoute><MyComponents /></PrivateRoute> } />
          </Routes>
        </Router>

      </div>
    )
  }
}

export default App;
