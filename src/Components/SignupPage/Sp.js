import React, { useState } from "react";
import "../SignupPage/Sp.css";
import Sp from "../Images/Spimg.png";
import Companylogo from "../Images/CompanyLogo.png";
import Gimage from "../Images/gimg.png";
import Fimg from "../Images/fimg.webp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
function Signup () {
    // Logics
    const [FirstName ,setFirstname] = useState("");
    const [Email ,setEmail] = useState("");
    const [UserName ,setUesrName] = useState("");
    const [MobileNo ,setMobileNo] = useState("");
    const [Password ,setPassword] = useState("");
    const [ConPassword ,setConpassword] = useState("");
    const [ConpasswordError , setConpasswordError] = useState ("");
    const [MobileNoError , setMobileNoError] = useState ("") ;
    
    const navigate = useNavigate();
    
    const handleLogin = () =>{
        navigate("/login");
     }
    
    const validatePassword =(password) => {
        if(password===""){
            return "Please Enter the password First" ;
        }
        if(password.length < 8){
            return "Password must be at least 8 characters long .";
        }
        else if(!/[A-Z]/.test(password)){
            return "Password must include at least one uppercase letter.";
        }
        else if (!/[a-z]/.test(password)) {
            return "Password must include at least one lowercase letter.";
        }
        else if (!/[0-9]/.test(password)) {
            return "Password must include at least one number.";
        }
         else if (!/[!@#$%^&*]/.test(password)) {
            return "Password must include at least one special character (!@#$%^&*).";
        }
    else{
        return "" ;
        }
    
    }

    const validateMobileNo =(mobileNo)=>{
        if(mobileNo.length < 10){
            return "Mobile Number Must be 10 digit" ;
        }
    }

    const handleRegister = () => {
        const passwordValidationError = validatePassword(Password);
        setConpasswordError(passwordValidationError);
        const MobileNoValidationError = validateMobileNo(MobileNo);
        setMobileNoError(MobileNoValidationError);
        
    

    if(passwordValidationError){
        return ;
    }
    if (Password !== ConPassword) {
        setConpasswordError("Passwords do not match.");
        return;
      }

    if(!passwordValidationError && Password === ConPassword){
     sessionStorage.setItem("Name", FirstName);
    sessionStorage.setItem("Email", Email);
      sessionStorage.setItem("username", UserName);
      sessionStorage.setItem("MobileNo", MobileNo);
      sessionStorage.setItem("password", Password);
      sessionStorage.setItem("Loginstatus",true);  
     alert("Registration Successful!");
     navigate("/login");

    }
}

    
    return (
        <>
    {/* Design */}
         <div class="container-fluid">
           <div id="SpMain">
                <div id="Spimg">
                <img src={Sp} alt=".." id="spfoodimg"/>
                </div>
                <div id="Spform">
                <img src={Companylogo} alt=".." id="spcllogo"/>    
                <div id="rm"><br/>
                    <div id="r1"></div>
                    <div id="or">Register</div>
                    <div id="r2"></div>
                </div>
                <div id="des">
                <label for="description">Already have an Account ? <span id="logcon" onClick={handleLogin} >Login</span></label><br/><br/>
                </div>
                <div class="form">
            <label for="Name">Name : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" id="name" value={FirstName} onChange={(e) =>setFirstname(e.target.value)} placeholder="Enter Your Full Name" required /><br/><br/>
            <label for="Email">Email : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="email" id="email" value={Email} onChange={(e) =>setEmail(e.target.value)} placeholder="Enter your Email"required /><br/><br/>
            <label for="UserName">User Name : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" id="uname" value={UserName} onChange={(e) =>setUesrName(e.target.value)} placeholder="Create A Unique UserName" required /><br/><br/>
            <label for="Mobike">Mobile No : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" value={MobileNo} onChange={(e) =>setMobileNo(e.target.value)} id="mob" placeholder="Enter 10 Digit Number"required /><br/><br/>
            {MobileNoError && (
                                <div className="error-message" id="errormessage">{MobileNoError}</div>
                                
                            )}

            <label for="Password">Password : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="Password" value={Password} onChange={(e) =>setPassword(e.target.value)} id="pass" placeholder="Create Your Password" required /><br/><br/>
            <label for="ConPassword">Confirm Password : </label>&nbsp;&nbsp;
            <input type="Password" value={ConPassword} onChange={(e) =>setConpassword(e.target.value)} id="cpass" placeholder="ReEnter Your Password" required /><br/><br/>
            {ConpasswordError && (
                                <div className="error-message" id="errormessage">{ConpasswordError}</div>
                                
                            )}
           
            <input type="checkbox" id="cbox"required />
            <label for="Policy" id="mlabel">I accept the <label for="" id="sublabel"> Terms of use </label> & <label for="" id="sublabel"> Privacy Policy</label></label>
            <div id="rmm"><br/>
                    <div id="r11"></div>
                    <div id="orr">Or Signup With</div>
                    <div id="r22"></div>
                </div>
           <div id="logos">
           <img src={Gimage} id="gimg" alt="logo"/>
           <img src={Fimg} id="fimg" alt="logo"/>
           </div>

           <div >
            <button className="Regbtn" onClick={handleRegister} >Register Now</button>
           </div>
            </div>
           </div>
           </div>
        </div>
        </>




    )
}
export default Signup;