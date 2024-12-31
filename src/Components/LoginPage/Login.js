import React from "react";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import "../LoginPage/Login.css";
import Lp from "../Images/Lpimg.webp";
import Companylogo from "../Images/CompanyLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Login() {
  const navigate = useNavigate();         
  
  const handleSignup = () =>{
    navigate('/signup');

  }
  const handleHome = () =>{
    navigate('/');
  }

  const [username, setUesrName] = useState();
  const [password, setpassword] = useState();

 
  
  // const handleHome = () =>{
  //   navigate('/');
  // }

    
    
  const handleLogin = () =>{
  let storedUsername = sessionStorage.getItem("username");
  let storedPassword = sessionStorage.getItem("password");
  if(username === storedUsername && password===storedPassword){
    sessionStorage.setItem("Loginstatus",true);
  //  alert("Login Successful!");
   navigate("/");
  }
  else{
    alert('Invalid User');
  }
  }

    return(
        <>
        <div id="Lpmain">
        <div id="Lpform">
        <img src={Companylogo} alt="..." id="cplplogo" />
        <div id="lm"><br/>
                    <div id="l1"></div>
                    <div id="lr">Log In</div>
                    <div id="l2"></div>
        </div>
        
        <label for="lpdescription" id="lpdescription">Don't have an Account? <span id="joinnow" onClick={handleSignup}>Join Now</span>  </label><br/><br/><br/>
        <div id="inputs">
        <label for="UserName">UserName : &nbsp;&nbsp;</label>
        <input type="text" name="username" onChange={(e) => setUesrName(e.target.value)}
                  value={username}  placeholder="Enter UserName" /><br/><br/><br/>
        <label for="Password">Password : &nbsp;&nbsp;&nbsp;</label>
        <input type="passwrod" name="password" onChange={(e) => setpassword(e.target.value)}
                  value={password}  placeholder="Enter Your Password" /><br/>
        <label for="Forgotpassword" id="forgotpass">Forgot password ?</label>
        </div>
        <div id="log"><br/>
                    <div id="log1"></div>
                    <div id="logr"> OR </div>
                    <div id="log2"></div>
        </div>
        <div id="logoptions">
       <div className="logopt" id="logwithemail"><FontAwesomeIcon icon={faEnvelope}  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log In With Email</div>
       <div className="logopt" id="logwithgoogle"> <FontAwesomeIcon icon={faGoogle} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log In With Google</div>
       <div className="logopt" id="logwithfacebook"> <FontAwesomeIcon icon={faFacebook} />&nbsp;&nbsp;&nbsp;&nbsp;Log In With Facebook</div>
        </div>
        <button id="logbtn" onClick={handleLogin}>LogIN</button>
        </div>
     
        <div id="Lpimg">
        <img src={Lp} alt=".." id="lplogo"/> 

        </div>
        </div>


      
        </>

    )
}

export default Login ;