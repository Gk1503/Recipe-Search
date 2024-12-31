import React from "react";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareXmark} from  "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile(props) {
const [username , setusername] = useState("");
const [email , setEmail] = useState("");
const [password , setpassword] = useState("");
const [conpassword , setConpassword] = useState("");
const [mobileNo , setMobileNo] = useState("");
const [ConpasswordError , setConpasswordError] = useState ("");
const [mobileNoError , setMobileNoError] = useState ("") ;

useEffect(() => {
  setusername(sessionStorage.getItem("username") || "");
  setEmail(sessionStorage.getItem("Email") || "");
  setpassword(sessionStorage.getItem("password") || "");
  setConpassword(sessionStorage.getItem("conpassword") || "");
  setMobileNo(sessionStorage.getItem("MobileNo") || "");
}, []);

const navigate = useNavigate();


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


const handlesave = () => {

    const passwordValidationError = validatePassword(password);
    const MobileNoValidationError = validateMobileNo(mobileNo);
    setConpasswordError(passwordValidationError);
    setMobileNoError(MobileNoValidationError);
    


if(passwordValidationError || MobileNoValidationError){
    return ;
}
if (password !== conpassword) {
    setConpasswordError("Passwords do not match.");
    return;
  }

if(!passwordValidationError && password === conpassword){
  sessionStorage.setItem("MobileNo", mobileNo);
  sessionStorage.setItem("password", password);
  
 alert("Registration Successful!");
 navigate("/login");

}
}



  return (
    <div id="popupOverlayStyle">
      <div id="popupBoxStyle">
        {/* Close button inside the popup */}
        <button onClick={props.togglePopup} id="closeButtonStyle">
        <FontAwesomeIcon icon={faSquareXmark} id="crossbtn" />
        </button>
        <div id="ep">Edit profile</div>
        <div id="det"><br/><br/>
        <label for="Username">UserName : </label>&nbsp;&nbsp;&nbsp;
        <input type="text" disabled value={username} onChange={(e)=>setusername(e.target.value)} placeholder="Enter Your Username"></input><br/><br/>
        <label for="Email">Email : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="Email" disabled value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"></input><br/><br/>
        <label for="Mobile Number">Mobile : </label>&nbsp;&nbsp;
        <input type="text"  value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} placeholder="Enter Your Phone Number"></input><br/><br/>
        {mobileNoError && (
                                <div className="error-message" id="errormessage">{mobileNoError}</div>
                                
                            )}
                            <br/>
        <label for="password">Create New Password :</label>&nbsp;&nbsp;&nbsp;
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Your Password"></input><br/><br/>
        <label for="Conpassword">Confirm Password :</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="password" value={conpassword} onChange={(e)=>setConpassword(e.target.value)} placeholder="Enter Your Password"></input>
        {ConpasswordError && (
                                <div className="error-message" id="errormessage">{ConpasswordError}</div>
                                
                            )}
        <div id="btns">

        <button id="cl"onClick={props.togglePopup}>Close</button>
        <button id="sc" onClick={handlesave} >Save Changes</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
