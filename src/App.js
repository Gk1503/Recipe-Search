
import './App.css';
import Home from './Components/HomePage/Home';
import Signup from './Components/SignupPage/Sp';
import Login from './Components/LoginPage/Login';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
 <>
 
   
   {/* <Home/>   */}
{/* <Signup/>
<Login/>  */}
{/* <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes> */}

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route> 
    </Routes>
 </>
  );
}

export default App;
