import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import MyDocument from "./pages/MyDocument";
// import { useEffect,useContext } from "react";
// import AppContext from './context/AppContext'
function App() {
  // const{isLogin,setIsLogin} = useContext(AppContext);

  // useEffect(() => {
  //   if(localStorage.getItem('isLogin')) {
  //     setIsLogin(localStorage.getItem('isLogin'));
  //   }
  // }, []);
  
  // useEffect(() => {
  //   localStorage.setItem('isLogin', isLogin);
  // }, [isLogin]);

  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/docs" element={<MyDocument/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>

    </div>

  );
}

export default App;
