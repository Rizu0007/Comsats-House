import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/about'
import Profile from './pages/Profile'
import Signin from './pages/Signin.jsx'
import SignOut from './pages/SignOut.jsx'
import Header from "./components/Header";




function App() {
  return (

   <BrowserRouter>
   <Header/>
   <Routes>

       <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About  />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signout" element={<SignOut />}/>


   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
