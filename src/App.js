import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
// import Practice from "./components/Practice/Practice";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return isLogin ? (
    <div className="app">
      
      <Home />
      {/* <Practice num={10} /> */}
    </div>
  ) : (
    <Login />
  );
}

export default App;
