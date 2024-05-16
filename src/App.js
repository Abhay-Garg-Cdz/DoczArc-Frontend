import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import { AppContextProvider } from "./context/AppContextProvider";
import MyDocument from "./pages/MyDocument";
function App() {
  return (
    <div>
      <AppContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/docs" element={<MyDocument/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </AppContextProvider>
    </div>

  );
}

export default App;
