import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import SignUp from './emailSignIn/SignUp'
import SignIn from './emailSignIn/SignIn'


function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
