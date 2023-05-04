import React, { useState } from "react";
import './ot.css';

export default function OtpGeneration(){
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const postData = () => {
    const isValidNumber = /^[789]\d{9}$/.test(mobile);
    if (!isValidNumber) {
      setError("Invalid mobile number");
      return;
    }

    const body = { mobile: Number(mobile) };

    const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          setError("OTP Sent successfully");
          setMobile("");
        } else {
          return response.text();
        }
      })
      .then((errorMessage) => {
        if (errorMessage) {
          setError(errorMessage || "Failed to send OTP. Please try again.");
        }
      });
  };

  return (
    <div className="design1">
    <h6> Hello! Pls enter your Mobile Number: </h6>
      <input
        type="text"
        value={mobile}
        placeholder="Enter Your Mobile Number"
        onChange={(e) => setMobile(e.target.value)}
      />
      &nbsp;
      <button onClick={postData}>Get OTP</button>
      {error && <p>{error}</p>}
    </div>
  );
};
