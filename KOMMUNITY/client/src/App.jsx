import "./App.css"
import React from "react";
import Auth from "./pages/Auth/Auth";
// import Home from "./pages/home/HomePage";
// import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{top: '-18%',right:'0'}}></div>
      <div className="blur" style={{top: '36%', left:'-8rem'}}></div>
      <Auth />
      {/* <Home /> */}
      {/* <Profile /> */}
    </div>
  );
}

export default App;
