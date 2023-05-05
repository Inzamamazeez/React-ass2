import React, { useState } from "react";
import axios from "axios";
import './Axios.css';

export default function OtpGeneration(){
    const [mobile, setMobile] = useState("");
  
    const postData = () => {
      const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";
      axios.post(url,{
        mobileNum:`${mobile}`,
      })
      .then(response=>setMobile(response.mobileNum))
      .catch(error=>console.log(error))
      numberValidation()
    }
    function valuePassing(e){
      setMobile(e.target.value)
    }
    
    function numberValidation(){
      const redgx=/^[789]\d{9}$/.test(mobile);
      if(redgx===true){
        setMobile(" ")
        alert('OTP send Successfully.');
      }
      else{
        alert('Invalid Number.')
      }
      }
    return (
      <div className="design1">
      <h6> Hello! Pls enter your Mobile Number: </h6>
        <input
          type="number"
          value={mobile}
          placeholder="Enter Your Mobile Number"
          onChange={valuePassing}
        />
        <button onClick={postData}>Get OTP</button>
      </div>
    );
  };