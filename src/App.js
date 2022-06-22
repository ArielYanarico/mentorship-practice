import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/error";
import MyComponents from "./pages/MyComponents";
import "./styles/App.scss";
import Navigator from "./components/Navigator";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { PostProvider } from "./contexts/PostContext";
import { UserProvider } from "./contexts/UserContext";

const links = [
  { path: "/", text: "Home" },
  { path: "/login", text: "Login" },
  { path: "/my-components", text: "My Components" },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserProvider>
          <Router>
            <Navigator links={links}></Navigator>
            <Routes>
              <Route
                path="/"
                element={
                  <PostProvider>
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  </PostProvider>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/error" element={<Error />} />
              <Route
                path="/my-components"
                element={
                  <PrivateRoute>
                    <MyComponents />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </UserProvider>
      </div>
    );
  }
}

export default App;
